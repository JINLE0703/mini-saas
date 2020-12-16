// pages/guide/guide.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [
      {
        id: 0,
        name: '数字峰会资料介绍.ppt',
        size: '28M',
        type: 'img'
      }, {
        id: 1,
        name: '数字峰会资料介绍.ppt',
        size: '28M',
        type: 'img'
      }, {
        id: 2,
        name: '数字峰会资料介绍.ppt',
        size: '28M',
        type: 'word'
      }, {
        id: 3,
        name: '数字峰会资料介绍.ppt',
        size: '28M',
        type: 'ppt'
      }, {
        id: 4,
        name: '数字峰会资料介绍.ppt',
        size: '28M',
        type: 'pdf'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      navBarHeight: app.globalData.navBarHeight,
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