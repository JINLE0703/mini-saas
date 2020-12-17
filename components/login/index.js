// components/login/index.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTapWX(e) {
      const { userInfo } = e.detail
      if (userInfo) {
        console.log(userInfo)
        wx.setStorage({
          key: 'user_info',
          data: userInfo
        })
        .then(() => {
          app.globalData.isLogin = true
        })
      } else {
        // 授权失败
      }
    }
  }
})
