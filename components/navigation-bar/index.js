// components/navigation-bar/index.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    statusHeight: 0,  // 状态栏高度
    navHeight: 0,  // 导航栏高度
    navBarHeight: 0
  },

  lifetimes: {
    attached() {
      // // 获取状态栏高度
      // const { statusBarHeight } = await wx.getSystemInfo()
      // // 获取胶囊信息
      // const { top, height } = wx.getMenuButtonBoundingClientRect()
      // const navigationBarHeight = (top - statusBarHeight) * 2 + height
      // app.globalData.navHeight = statusBarHeight + navigationBarHeight
      // this.setData({
      //   statusHeight: statusBarHeight,
      //   navHeight: navigationBarHeight,
      //   navBarHeight: statusBarHeight + navigationBarHeight
      // })
      this.setData({
        statusHeight: app.globalData.statusHeight,  // 状态栏高度
        navHeight: app.globalData.navHeight,  // 导航栏高度
        navBarHeight: app.globalData.navBarHeight
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
