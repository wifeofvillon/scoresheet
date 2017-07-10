class Scoresheet {
  /**
   * initialize index.html
   */
  constructor() {
    // app title
    $('title').text(ScoresheetData.title);
    $('.bland-logo').text(ScoresheetData.header);

    // nav / header text
    $('.nav__reset-cookie').append(Text.resetCookie);
    $('.nav__history, #history .header').append(Text.history);
    $('.nav__disclaimer, #disclaimer .header').append(Text.disclaimer);
    $('.nav__contact, #contact .header').append(Text.contact);

    // section body
    $('#disclaimer').append('<p>' + Text.disclaimerText + '</p>');
    $('#contact').append('<p>' + Text.contactText + '</p>')
      .append('<p>Twitter:<a href="//twitter.com/' + ScoresheetData.twitter + '">@' + ScoresheetData.twitter + '<i class="material-icons tiny">open_in_new</i></a></p>');

    // tabs
    if (!ScoresheetData.tab) {
      $('.tabs').hide();
    } else {
      for (var i = 0; i < ScoresheetData.tabList.length; i++) {
        $('.tabs').append(this.tabList(ScoresheetData.tabList[i]));
        if (i == 0) { // only first time
          $('.tabs .tab').addClass('active');
        }
      }
    }

    // buff switch
    if (!ScoresheetData.buff) {
      $('.buff').hide();
    } else {
      for (var i = 0; i < ScoresheetData.buffSwitch.length; i++) {
        $('.row.buff').append(this.buffSwitch(ScoresheetData.buffSwitch[i]));
      }
    }

    // mission reward
    if (ScoresheetData.reward) {
      for (var i = 0; i < ScoresheetData.rewardList.length; i++) {
        $('.row.buff').append(this.rewardButton(ScoresheetData.rewardList[i]));
      }
    }

    // score box
    $('.score--add p.left').text(ScoresheetData.add.title);
    for (var i = ScoresheetData.add.digit; 0 < i; i--) {
      $('.score--add .point--select').append(this.selectbox('score--add__' + i));
    }
    $('.score--total p.left').text(ScoresheetData.total.title);
    for (var i = ScoresheetData.total.digit; 0 < i ; i--) {
      $('.score--total .point--select').append(this.selectbox('score--total__' + i));
    }
    // activate materialize components
    $('select').material_select();
    $('.button-collapse').sideNav();
    $('.chips').material_chip();

    // change log
    $('#history ul.collection').append(this.historyList(History));
    $('#nav-pc .chip:eq(0), #nav-mobile .chip:eq(0)').text('ver.' + History[0].version);
    $('#nav-pc .chip:eq(1), #nav-mobile .chip:eq(1)').text('last update ' + History[0].date);
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
    option = '<select class=" col ' + className + '">' + option + '</select>';
    return option;
  }
  /**
   * Return change log
   * @param  {Array} historyData History
   * @return {String}   HTML String
   */
  historyList(historyData) {
    let historyHtml = '<ul>';
    if (typeof(historyData) !== 'object' || historyData.length == 0) {
      // no change log
    } else {
      for (var i = 0; i < historyData.length; i++) {
        historyHtml += '<li class="collection-item">';
        historyHtml += '<div class="header">';
        historyHtml += '<span class="date right">' + historyData[i].date + '</span>';
        historyHtml += '<span class="title">ver.' + historyData[i].version + '</span>'
        historyHtml += '</div>';
        for (var j = 0; j < historyData[i].body.length; j++) {
          historyHtml += '<ul>';
          historyHtml += '<li>' + historyData[i].body[j] + '</li>';
          historyHtml += '</ul>';
        }
      }
    }
    historyHtml += '</li>';
    historyHtml += '</ul>';
    return historyHtml;
  }
}
