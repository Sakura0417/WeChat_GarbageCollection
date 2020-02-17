// pages/text/text.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animation: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.animation = wx.createAnimation({
      duration: 1500, //动画持续时间，单位 ms
      timingFunction: 'ease', //动画的效果
      delay: 100, //动画延迟时间
      transformOrigin: 'left top', //属性允许您改变被转换元素的位置。
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  start: function () {
    var animation = wx.createAnimation({
      duration: 2000,
      timingFunction: 'ease',
      delay: 0,
      transformOrigin:'center'
    });
    // animation.width("400rpx").height("400rpx").step()
    // animation.scale(2,2).step()
    animation.translate(130,130).width("520rpx").height("520rpx").step()
    this.setData({
      ani: animation.export()
    })
  }
})