// pages/harmful-waste/harmful-waste.js
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
      data: "1、分类投放有害垃圾时，应注意轻放。"
    },
    {
      data: "2、废弃药品宜连带包装一并投放。"
    },
    {
      data: "3、杀虫剂等压力罐装容器，应排空内容物后投放。"
    },
    {
      data: "4、在公共场所产生有害垃圾且未发现对应收集容器时，应携带至有害垃圾投放点妥善投放。"
    },
    {
      data: "5、废灯管等易破损的有害垃圾应连带包装或包裹后投放。"
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