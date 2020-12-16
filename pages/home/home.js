// pages/home/home.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navBarHeight: 0,
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
    // tab 栏数据
    tabsInfo: [
      {
        id: 0,
        title: '大会日程',
      },
      {
        id: 1,
        title: '重磅嘉宾',
      },
      {
        id: 2,
        title: '大会动态',
      }
    ],
    // 日程数据
    scheduleInfo: [
      {
        id: 0,
        title: '2020年数字峰会官方会议报道',
        site: '数字峰会主会场',
        date: '12月24日',
        time: '08:00 - 09:30',
        couldReserve: true,
        guest: {
          name: '刘克鸿',
          status: '腾讯云会展总裁',
          avatar: '/public/images/Oval.png'
        }
      },
      {
        id: 1,
        title: '2020年数字峰会官方会议报道',
        site: '数字峰会主会场',
        date: '12月24日',
        time: '08:00 - 09:30',
        couldReserve: true,
        guest: {
          name: '刘克鸿',
          status: '腾讯云会展总裁',
          avatar: '/public/images/Oval.png'
        },
      },
      {
        id: 2,
        title: '2020年数字峰会官方会议报道',
        site: '数字峰会主会场',
        date: '12月24日',
        time: '08:00 - 09:30',
        couldReserve: true,
        guest: {
          name: '刘克鸿',
          status: '腾讯云会展总裁',
          avatar: '/public/images/Oval.png'
        },
      },
      {
        id: 3,
        title: '2020年数字峰会官方会议报道',
        site: '数字峰会主会场',
        date: '12月24日',
        time: '08:00 - 09:30',
        couldReserve: true,
        guest: {
          name: '刘克鸿',
          status: '腾讯云会展总裁',
          avatar: '/public/images/Oval.png'
        },
      }
    ]
  },

  // 标签栏自动高度
  tabsAutoHeight() {
    this.selectComponent('#tabs').autoHeight()
  },

  handleTapShare() {
    wx.showToast({
      title: '感谢分享',
      mask: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      navBarHeight: app.globalData.navBarHeight
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