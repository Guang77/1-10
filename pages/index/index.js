//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    array: [{ id: 1, picM: "/img/zyjd.png", tcid: "专业鉴宝" }, { id: 2, picM: "/img/ytpfj.png", tcid: "源头批发价" }, { id: 3, picM: "/img/7tbt.png", tcid: "七天包退" }, { id: 4, picM: "/img/rsps.png", tcid: "如实拍摄" }
    ],

    living: [
            { id: 1, livpic: " ", livname: "主播一", livtitle: "翡翠一点半", livperson: "2.5万" , livadd:"昆明"}, 
            { id: 2, livpic: " ", livname: "主播二", livtitle: "于是宝石", livperson: "3.0万", livadd: "昆明"},
            { id: 3, livpic: " ", livname: "主播三", livtitle: "快点来看直播啊", livperson: "4.2万", livadd: "昆明"}, 
    
    ],

    slider:[
      {id:1,slidershow:"/img/slider1.jpg",sliderlink:""},
      {id:2,slidershow: "/img/slider2.jpg", sliderlink: "" },
      {id:3,slidershow: "/img/slider3.jpg", sliderlink: "" },
    ],
 

    listlive:[
      { id: 1, listavatar: "", listname: "主播一", listperson: "2.5万", listaddr: "北京", listdet: "这是于是宝石的直播间", livbgpic:"/img/recommand_pic1.png"}, 
      { id: 2, listavatar: "", listname: "主播二", listperson: "2.5万", listaddr: "昆明", listdet: "这是翡翠直播间", livbgpic:"/img/recommand_pic2.png"}
    ],

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  

  // imageLoad: function (e) {
  //   var imageSize = this.imageUtil(e)
  //   this.setData({
  //     imagewidth: imageSize.imageWidth,
  //     imageheight: imageSize.imageHeight
  //   })
  // },
  // imageUtil: function (e) {
  //   var imageSize = {};
  //   var originalWidth = e.detail.width; 
  //   var originalHeight = e.detail.height; 
  //   var originalScale = originalHeight / originalWidth; 
    
  //   wx.getSystemInfo({
  //     success: function (res) {
  //       var windowWidth = res.windowWidth;
  //       var windowHeight = res.windowHeight;
  //       var windowscale = windowHeight / windowWidth;
  //       if (originalScale < windowscale) { 
          
  //         imageSize.imageWidth = windowWidth;
  //         imageSize.imageHeight = (windowWidth * originalHeight) / originalWidth;
  //       } else { 
          
  //         imageSize.imageHeight = windowHeight;
  //         imageSize.imageWidth = (windowHeight * originalWidth) / originalHeight;
  //       }
  //     }
  //   })
  //   return imageSize;
  // }





})
