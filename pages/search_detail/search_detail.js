// pages/detail/detail.js
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
    var that = this
    var tempFilePaths = wx.getStorageSync('picture')
    var searchpath = wx.getStorageSync('input')
    this.setData({
      userimage: tempFilePaths[0],
      text:searchpath
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var that = this
    wx.request({
      url: 'https://recover2.market.alicloudapi.com/recover_word',
      data: {
        name: wx.getStorageSync('input')
      },
      method: 'get',
      header: {
        'content-type': 'application/json',
        'Authorization': 'APPCODE ' + 'c977859da234401b9dbe99c27b0a14d1',
      },

      success(res) {
        // console.log(res.data)
        // console.log(res.data.data.list)
        that.processGarbageData(res.data.data)

      },
      fail: function (res) {
        console.log(res);

      },
      complete: function (res) {
        console.log(res.data.data);
      }

    })
  },

  processGarbageData: function(arbageInfo){
    var garbageData = [];
    for (var idx in arbageInfo.list){
      var list = arbageInfo.list[idx];
      var name = list.name;
      var category = list.category;
      var temp = {
        name:name,
        category:category,
      }
      garbageData.push(temp)
    }
    console.log(garbageData)
    this.setData({
      garbageinfo:garbageData
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
    wx.removeStorage({
      key: 'picture',
      success(res) {
        console.log(res)
      }
    })
    wx.removeStorageSync('input')
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