// components/my-detail/index.js
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
    userInfo: {}
  },

  lifetimes: {
    attached() {
      this.setData({
        userInfo: wx.getStorageSync('user_info')
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTapLogout() {
      wx.removeStorage({
        key: 'user_info',
        success(res) {
          app.globalData.isLogin = false
        }
      })
    }
  }
})
