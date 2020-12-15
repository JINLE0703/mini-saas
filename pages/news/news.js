// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 标签栏数据
    tabsInfo: [
      {
        id: 0,
        title: '全部',
      },
      {
        id: 1,
        title: '行业趋势',
      },
      {
        id: 2,
        title: '案例分析',
      },
      {
        id: 3,
        title: '行家观点',
      }
    ],
    // 滚动图片数据
    imgInfo: [
      {
        id: 0,
        image: '/public/images/jump_fly.png',
        content: '如何在不确定的时代找到正确的方向'
      },
      {
        id: 1,
        image: '/public/images/jump_fly.png',
        content: '如何在不确定的时代找到正确的方向'
      },
      {
        id: 2,
        image: '/public/images/jump_fly.png',
        content: '如何在不确定的时代找到正确的方向'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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