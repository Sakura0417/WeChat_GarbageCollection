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
    // 页面加载时读取缓存中的信息
    var tempFilePaths = wx.getStorageSync('picture')
    this.setData({
      userimage: tempFilePaths[0],
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var that = this
    // 将读取到的数据发送到服务器
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
        // console.log(res.data)
        console.log(res.data.data.list)

        // 如果成功就执行处理数据
        if (res.data.data.list===undefined){
          that.setData({
            name:"对不起，暂时找不到相关信息"
          })
        } else {
          that.processGarbageData(res.data.data)
        }
    

      },
      fail: function (res) {
        console.log(res);

      },
      complete: function (res) {
        console.log("搜索完成！");
      }

    })
  },
  // 处理服务器返回的数据
  processGarbageData: function(arbageInfo){
    var garbageData = [];//存放筛选过的数据
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