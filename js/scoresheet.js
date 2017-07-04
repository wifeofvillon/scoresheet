class Scoresheet {
  /**
   * initialize index.html
   * @param  {JSON} json property
   */
  constructor(json) {
    // app title
    $('title').text(json.title);
    $('.bland-logo').text(json.header);

    // tabs
    if (!json.tab) {
      $('.tabs').hide();
    } else {
      for (var i = 0; i < json.tabList.length; i++) {
        $('.tabs').append(this.tabList(json.tabList[i]));
        if (i == 0) { // only first time
          $('.tabs .tab').addClass('active');
        }
      }
    }

    // buff switch
    if (!json.buff) {
      $('.buff').hide();
    } else {
      for (var i = 0; i < json.buffSwitch.length; i++) {
        $('.row.buff').append(this.buffSwitch(json.buffSwitch[i]));
      }
    }

    // mission reward
    if (json.reward) {
      for (var i = 0; i < json.rewardList.length; i++) {
        $('.row.buff').append(this.rewardButton(json.rewardList[i]));
      }
    }

    // score box
    $('.score--add p.left').text(json.add.title);
    for (var i = json.add.digit; 0 < i; i--) {
      $('.score--add .point--select').append(this.selectbox('score--add__' + i));
    }
    $('.score--total p.left').text(json.total.title);
    for (var i = json.total.digit; 0 < i ; i--) {
      $('.score--total .point--select').append(this.selectbox('score--total__' + i));
    }
  }

/**
 * Return tab
 * @param  {JSON} tabData JSON data which has id and name.
 * @return {String}         HTML String
 */
  tabList(tabData) {
    let tabHtml = '<li class="tab">';
        tabHtml += '<a id="chara-"' + tabData.id + '>' + tabData.name + '</a>';
        tabHtml += '</li>';
    return tabHtml;
  }
/**
 * Return buff switch
 * @param  {JSON} buffData JSON data which has path, title and value.
 * @return {String}          HTML String
 */
  buffSwitch(buffData) {
    let buffHtml = '<div class="col">';
        buffHtml += '<img class="buff--icon" src="' + buffData.path + '" title="' + buffData.title + '">';
        buffHtml += '<div class="switch right">';
        buffHtml += '<label>off<input type="checkbox" value="' + buffData.value + '">';
        buffHtml += '<span class="lever"></span>On</label>';
        buffHtml += '</div></div>';
    return buffHtml;
  }
/**
 * Return reward button
 * @param  {JSON} rewardData JSON data witch has value and text
 * @return {String}            HTML String
 */
  rewardButton(rewardData) {
    let buttonHtml = '<a class="waves-effect waves-light btn" value="' + rewardData.value + '">';
        buttonHtml += '<i class="material-icons left">add</i>';
        buttonHtml += rewardData.text;
        buttonHtml += '</a>';
    return buttonHtml;
  }
/**
 * Return selectbox
 * @param  {String} className class name of selectbox
 * @return {String}           HTML String
 */
  selectbox(className) {
    let option = '';
    for (var i = 0; i < 10; i++) {
      option += '<option value="' + i + '">' + i + '</option>';
    }
    option = '<select class="browser-default col ' + className + '">' + option + '</select>';
    return option;
  }
}
