//index.js
//获取应用实例
var listLivepp=require('../../data/data.js')

const app = getApp()

Page({
  data: {
    array: [{ id: 1, picM: "/img/zyjd.png", tcid: "专业鉴宝" }, { id: 2, picM: "/img/ytpfj.png", tcid: "源头批发价" }, { id: 3, picM: "/img/7tbt.png", tcid: "七天包退" }, { id: 4, picM: "/img/rsps.png", tcid: "如实拍摄" }
    ],

    living: [
      { id: 1, livpic: "/img/recommand_pic1.png", livname: "主播一", livtitle: "翡翠一点半", livperson: "2.5万" , livadd:"昆明"}, 
      { id: 2, livpic: " /img/recommand_pic2.png", livname: "主播二", livtitle: "于是宝石", livperson: "3.0万", livadd: "昆明"},
      { id: 3, livpic: " /img/recommand_pic1.png", livname: "主播三", livtitle: "快点来看直播啊", livperson: "4.2万", livadd: "昆明"}, 
    
    ]

  },
  //事件处理函数

  onLoad: function () {
   
   var sliderTem=[
     { id: 1, slidershow: "/img/slider1.jpg", sliderlink: "" },
     { id: 2, slidershow: "/img/slider2.jpg", sliderlink: "" },
     { id: 3, slidershow: "/img/slider3.jpg", sliderlink: "" }
   ]


    this.setData({
      slider : sliderTem
    })  
    
    this.setData({
      listLive: listLivepp.listLiving
    })  

  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },


  





})
