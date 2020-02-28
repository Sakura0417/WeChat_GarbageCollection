// pages/kitchen-waste/kitchen-waste.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var garbageData = [{
      data: "1、厨余垃圾应从产生时就与其他类别垃圾分开归类，去除食材食品的包装物，不得混入纸巾餐具、厨房用具等。"
    },
    {
      data: "2、餐厨垃圾中的废弃食用油脂，应单独存放、交付餐厨垃圾收集运输单位。"
    },
    {
      data: "3、难以生物降解的贝壳、大骨头、毛发等，宜作为其他垃圾投放。"
    },
    {
      data: "4、厨余垃圾（餐厨垃圾）滤去水分后再投放。"
    },
    {
      data: "5、包装物请投放到对应的干垃圾或其他容器中。"
    },
    ]
    this.setData({
      textData: garbageData
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})