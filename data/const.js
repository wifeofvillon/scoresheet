const ScoresheetData = {
  title: "App Title",
  header: "Header Title",
  tab: true,
  tabList: [
    {
      id: 9,
      name: 'Character9',
      color: '#7e57c2'
    },
    {
      id: 30,
      name: 'Character30',
      color: '#b71c1c'
    },
    {
      id: 101,
      name: 'Character101',
      color: '#03a9f4'
    }
  ],
  add: {
    title: "Add Score",
    digit: 3
  },
  total: {
    title: "Total Score",
    digit: 5
  },
  buff: true,
  buffSwitch: [
    {
      path: "./img/buff_2.png",
      title: "buff-item(x2)",
      value: 2
    },
    {
      path: "./img/buff_3.png",
      title: "buff-item(x3)",
      value: 3
    }
  ],
  reward: true,
  rewardList: [
    {
      value: 500,
      text: 'Daily Mission(+500)'
    },
    {
      value: 1000,
      text: 'Weekly Mission(+1000)'
    }
  ],
  cookie: {
    key: 'appdata',
    property: {expire:365},
    init: {
      "score": 0,
      "version": 1
    }
  },
  graph: {
    option: {
      legend:{
        display: false
      },
      scales: {
        xAxes: [{
          position: 'top',
          ticks: {
            beginAtZero:true,
            min:0,
            max:100,
            stepSize:10,
            callback:function(value){
              return value + "%";
            }
          }
        }]
      }
    }
  },
  twitter: 'null'
};
