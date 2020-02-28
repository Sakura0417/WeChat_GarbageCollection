// pages/recoverable-garbage/recoverable-garbage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },






  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var garbageData = [{
        data: "1、纸类应尽量叠放整齐，避免揉团，纸板也应拆开叠放。"
      },
      {
        data: "2、投放的牛奶利乐包等食品包装盒应折叠压扁。"
      },
      {
        data: "3、投放瓶罐类物品应尽可能将容器内产品用尽或倒尽，并清理干净后投放。"
      },
      {
        data: "4、玻璃类物品应小心轻放，以免割伤破损，最好是袋装或者用容器装好后投放。"
      },
      {
        data: "5、织物类应打包整齐后，定期投放到指定收集点。"
      },
    ]
    this.setData({
      textData:garbageData
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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

  }
})