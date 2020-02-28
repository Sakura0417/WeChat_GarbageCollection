// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.removeStorageSync('input'),
    wx.removeStorageSync('picture')
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

  },

  ontaps: function(event) {
    wx.navigateTo({
      url: '/pages/search_detail/search_detail',
    })
  },

  // 拍照
  ontap: function() {

    var that = this
    wx.showActionSheet({
      itemList: ['拍照', '从相册中选择'],
      success(res) {
        console.log(res.tapIndex)
        if (res.tapIndex == 0) { //0是拍照
          wx.chooseImage({
            count: 1,
            sizeType: ['compressed'],
            sourceType: ['camera'],
            success: function(res) {
              //res.tempFilePaths[0] 这个是图片
              const tempFilePaths = res.tempFilePaths
              console.log(tempFilePaths)
              // 将图片路径放入缓存
              wx.setStorage({
                key: 'picture',
                data: res.tempFilePaths,
              })
            },
            complete: function(res) {
              wx.navigateTo({
                url: '/pages/search_detail/search_detail',
              })
            },
          })
        } else if (res.tapIndex == 1) {

          wx.chooseImage({
            count: 1, //选择图库中的图片
            sizeType: ['compressed'],
            sourceType: ['album'],
            success: function(res) {
              //res.tempFilePaths[0] 这个是图片
              const tempFilePaths = res.tempFilePaths
              console.log(tempFilePaths)
              wx.setStorage({
                key: 'picture',
                data: res.tempFilePaths,
              })
            },
            complete: function(res) {
              // 完成后跳转到搜索详情页
              wx.navigateTo({
                url: '/pages/search_detail/search_detail',
              })
            },
          })
        }

      }
    })


  },

  //获取搜索框输入的文字，并存入缓存
  onInput: function(event) {
    var that = this
    var val = event.detail.value
    console.log(val)
    that.setData({
      inputValue: event.detail.value
    })
    wx.setStorage({
      key: 'input',
      data: event.detail.value,
    })

  },

  onSearch: function(event) {
    console.log("你点击了键盘搜索键")
    wx.navigateTo({
      url: '/pages/search_detail/search_detail',
    })
  },
})