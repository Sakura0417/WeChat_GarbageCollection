// pages/other-waste/other-waste.js
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
    var garbageKind = [{
        kind: "纸类、塑料类、玻璃类、金属类废弃物中不可回收的部分：",
        data: "如餐巾纸、卫生间用纸、尿不湿、狗尿垫、污损纸张、干燥剂、污损塑料、防碎气泡膜、一次性饭盒、带胶制品、镜子等。"
      },
      {
        kind: "纺织类、木竹类废弃物中不可回收的部分：",
        data: "如拖把、抹布、竹制品、一次性筷子、树枝、尼龙制品、编织袋、旧毛巾、内衣裤等。"
      },
      {
        kind: "灰土类、砖瓦陶瓷类废弃物、其他混合垃圾：",
        data: "如猫砂、烟蒂、大骨头、硬贝壳、硬果实、毛发、灰土、炉渣、橡皮泥、太空沙、陶瓷花盆、陶瓷制品、成分复杂的制品等。"
      },
    ]
    var garbageData = [{
      data: "一般采取填埋、焚烧、卫生分解等方法处理，部分还可以使用生物分解的方法解决，如放蚯蚓等。包括砖瓦陶瓷、渣土、卫生间废纸、瓷器碎片等难以回收的废弃物，可以采取卫生填埋以有效减少对地下水、地表水、土壤及空气的污染，在当今社会，还无有效化解其他垃圾的好方法，所以需尽量少产生。"
    }]
    this.setData({
      textData: garbageData,
      kindData: garbageKind
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