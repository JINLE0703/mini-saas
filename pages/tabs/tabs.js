// pages/tabs/tabs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [],
    _windowHeight: 0,
    type: 'column'
  },

  handleTap() {
    if (this.data.type === 'row') this.setData({ type: 'column' })
    else if (this.data.type === 'column') this.setData({ type: 'row' })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let tabs = []
    let title = '测试标签'
    for (let i = 0; i < 6; i++) {
      tabs.push({
        title: title + i
      })
    }
    this.setData({
      tabs
    })
    wx.getSystemInfo().then((res) => {
      this.setData({
        _windowHeight: res.windowHeight
      })
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