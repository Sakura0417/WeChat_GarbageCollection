// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // liststyle: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    that.sendDatatoServer()

  },


  // 向服务器发送数据
  sendDatatoServer: function() {
    var that = this
    // 将读取到的数据发送到服务器
    // 判断用户输入的是文字还是图片
    if (wx.getStorageSync('input')) {
      wx.request({
        url: 'https://recover2.market.alicloudapi.com/recover_word',
        data: {
          name: wx.getStorageSync('input') //读取缓存中用户输入的信息
        },
        method: 'get',
        header: {
          'content-type': 'application/json',
          'Authorization': 'APPCODE ' + 'c977859da234401b9dbe99c27b0a14d1',
        },
        success(res) {
          wx.showLoading({
            title: '玩命搜索中',
          })
          console.log(res.data.data.list)
          // 如果成功就执行处理数据
          if (res.data.data.length == 0) {
            console.log("找不到相关信息")
            wx.showModal({
              title: '提示',
              content: '找不到相关信息，请重新搜索',
              showCancel: false,
              success(res) {
                wx.navigateBack({
                  delta: 2
                })
              }
            })
          } else {
            that.setData({
              garbageinfo: res.data.data.list,
              liststyle: true
            })
            // that.processGarbageData(res.data.data)
          }
        },
        fail: function(res) {
          console.log(res);

        },
        complete: function(res) {
          wx.hideLoading();
        }
      })
    } else if (wx.getStorageInfoSync('picture')) {
      wx.showLoading({
        title: '玩命搜索中',
      })
      wx.request({
        url: 'https://recover.market.alicloudapi.com/recover',
        data: {
          img: wx.getStorageSync('picture') //读取缓存中BASE64编码后的图片URL
        },
        method: 'post',
        header: {
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Authorization': 'APPCODE ' + 'c977859da234401b9dbe99c27b0a14d1',
        },
        success(res) {
          // console.log(res.data.data)
          that.setData({
            garbageSimilarityData: res.data.data,
            liststyle: false
          })
          // that.processGarbageImgData(res.data)
        },
        fail: function(res) {
          console.log("失败")
          console.log(res);
        },
        complete: function(res) {
          // console.log("搜索完成！");
          wx.hideLoading();
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},


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
    wx.removeStorageSync('input')
    wx.removeStorageSync('picture')
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