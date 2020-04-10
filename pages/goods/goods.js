// pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodslistinfo: ''
  },

  // 监听用户下拉刷新
  onPullDownRefresh: function () {
    this.onLoad();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://39.96.53.42:8000/api/',
      data: {
        // name: wx.getStorageSync('input') //读取缓存中用户输入的信息
      },
      method: 'get',
      header: {
        'content-type': 'application/json',
        // 'Authorization': 'APPCODE ' + 'c977859da234401b9dbe99c27b0a14d1',
      },
      success(res) {
        wx.showLoading({
          title: '玩命搜索中',
        })
        // console.log(res.data)
        that.setData({
          goodslistinfo: res.data,
        })
        console.log(that.goodslistinfo)

      },
      fail: function (res) {
        console.log(res);

      },
      complete: function (res) {
        wx.hideLoading();
      }
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

  },
   // 获取滚动条当前位置
   onPageScroll: function (e) {
    // console.log(e)
    if (e.scrollTop > 100) {
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      });
    }
  },

  //回到顶部
  goTop: function (e) {  // 一键回到顶部
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },

})