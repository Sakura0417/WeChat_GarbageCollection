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
    var garbageKind = [
      {
        kind: "电池类：",
        data: "纽扣电池、充电电池（如手机电池）、铅酸电池、蓄电池等。不含普通干电池（如 1号、5号、7号电池，因具生产已达到国家低汞或无汞技术要求，现作为其他垃圾投放）等。"
      },
      {
        kind: "含汞类：",
        data: "废荧光灯管、废节能灯、废水银温度计、废水银血压计、 荧光棒、水印体温计、水银血压计等。"
      },
      {
        kind: "费药类：",
        data: "过期药品、药片、过期胶囊药品、药品包装等。"
      },
      {
        kind: "油漆、废农药类:",
        data: "废油漆桶、染发剂壳、洗甲水、过期指甲油、消毒液、老鼠药、杀虫剂等。"
      },
      {
        kind: "废胶片及废相纸类：",
        data: "x光片等感光胶片、相片底片等。"
      },
    ]
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
      textData: garbageData,
      kindData: garbageKind
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