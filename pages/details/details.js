// pages/details/details.js

// 小程序定位SDK
var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
var qqmapsdk = new QQMapWX({
  key: 'BNKBZ-2IGKW-EBDRM-OMPQP-VKW4T-3ZBEY'
});

Page({

  /**
   * 页面的初始数据
   */
  data: {
    nation: '',
    province: '',
    city: '',
    district: '',
    animation: '',
  },

  // 获取用户地理位置（经纬度）
  getLocation: function() {
    var that = this
    wx.getLocation({
      success: function(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
        that.getlocal(latitude, longitude)
      },
      fail: function(res) {
        console.log(res)
      }
    })
  },

  // 根据经纬度获取城市信息
  getlocal: function(latitude, longitude) {
    var that = this
    qqmapsdk.reverseGeocoder({
      success: function(res) {
        location: {
          latitude: latitude
          longitude: longitude
        }
        // console.log(JSON.stringify(res))
        const nation = res.result.ad_info.nation
        const province = res.result.ad_info.province
        const city = res.result.ad_info.city
        const district = res.result.ad_info.district
        console.log(nation)
        console.log(province)
        console.log(city)
        console.log(district)
        that.setData({
          nation: nation,
          province: province,
          city: city,
          district: district
        })
      }
    })
  },

  // 发送请求获取定位权限
  getUserLocation: function() {
    var that = this
    wx.getSetting({
      success: function(res) {
        console.log(JSON.stringify(res))
        // 如果没有授权则请求授权
        if (res.authSetting['scope.userLocation'] != true && res.authSetting['scope.userLocation'] != undefined) {
          wx.showModal({
            title: '请求获取当前位置',
            content: '获取您的位置以便提供相关资讯',
            success(res) {
              // 如果用户取消授权
              if (res.cancel) {
                wx.showToast({
                  title: '获取位置失败',
                  icon: 'none',
                  duration: 2000
                })
              }
              // 如果用户同意授权 
              else if (res.confirm) {
                wx.openSetting({
                  success: function(authData) {
                    if (authData.authSetting['scope.userLocation' == true]) {
                      wx.showToast({
                          title: '获取位置授权成功',
                          icon: 'none',
                          duration: 2000
                        }),
                        that.getLocation()
                    } else {
                      wx.showToast({
                        title: '获取位置失败',
                        icon: 'none',
                        duration: 2000
                      })
                    }
                  }
                })
              }
            }
          })
        } else if (res.authSetting['scope.userLocation'] == undefined) {
          that.getLocation();
        } else {
          that.getLocation();
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */

  // 获取位置
  onLoad: function(options) {
    this.getUserLocation()
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
  toRecoverable: function(event) {
    wx.navigateTo({
      url: '/pages/recoverable-garbage/recoverable-garbage',
    })
  },
  toHarmful: function(event) {
    wx.navigateTo({
      url: '/pages/harmful-waste/harmful-waste',
    })
  },
  toKitchen: function(event) {
    wx.navigateTo({
      url: '/pages/kitchen-waste/kitchen-waste',
    })
  },
  toOther: function(event) {
    wx.navigateTo({
      url: '/pages/other-waste/other-waste',
    })
  }

})