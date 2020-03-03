// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '',
    name: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.removeStorageSync('input'),
      wx.removeStorageSync('picture')
      this.setData({
        name: ''
      })
  },

  //生命周期函数--监听页面初次渲染完成
  onReady: function() {},

  //生命周期函数--监听页面显示
  onShow: function() {},

  // 生命周期函数--监听页面隐藏
  onHide: function() {},

 
  // 生命周期函数--监听页面卸载
  onUnload: function() {},

  //生命周期函数--监听用户下拉动作
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
    // 为了防止冲突，点击图片搜索时清楚文字搜索缓存
    this.setData({
      name: ' '
    })
    wx.removeStorageSync('input')
    
    var that = this
    wx.showActionSheet({
      itemList: ['拍照', '从相册中选择'],
      success: function(res) {
        if (res.tapIndex == 0) { //0是拍照
          wx.chooseImage({
            count: 1,
            sizeType: ['compressed'],
            sourceType: ['camera'],
            success: function(res) {
              //res.tempFilePaths[0] 这个是图片
              // 将图片的本地路径进行base64编码并放入缓存
              wx.getFileSystemManager().readFile({
                filePath: res.tempFilePaths[0], //选择图片返回的相对路径
                encoding: 'base64', //编码格式
                success: function(res) { //成功的回调
                  // console.log( res.data)
                  wx.setStorage({
                    key: 'picture',
                    data: 'data:image/png;base64,'+ res.data,
                  })
                }
              })
              wx.navigateTo({
                url: '/pages/search_detail/search_detail',
              })
            },
            complete: function(res) {
            },
          })
        } else if (res.tapIndex == 1) {
          wx.chooseImage({
            count: 1, //选择图库中的图片
            sizeType: ['compressed'],
            sourceType: ['album'],
            success: function(res) {
              //res.tempFilePaths[0] 这个是图片
              wx.getFileSystemManager().readFile({
                filePath: res.tempFilePaths[0], //选择图片返回的相对路径
                encoding: 'base64', //编码格式
                success: function(res) { //成功的回调
                  // console.log( res.data)
                  wx.setStorage({
                    key: 'picture',
                    data: 'data:image/png;base64,' + res.data,
                  })
                }
              })
              wx.navigateTo({
                url: '/pages/search_detail/search_detail',
              })
            },
            complete: function(res) {
            },
          })
        }

      },
      fail: function(res) {
        wx.navigateBack({
          delta: 2
        })
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
    if (wx.getStorageSync('input') == "") {
      console.log("请输入正确名称")
      wx.showToast({
        title: '请输入名字',
        icon: 'none',
        duration: 2000,
        mask: true,
        image: '../../images/failed.png'
      })
    } else {
      console.log(wx.getStorageSync('input'))
      this.setData({
        name: ''
      })
      wx.navigateTo({
        url: '/pages/search_detail/search_detail',
      })
    }

  },
})