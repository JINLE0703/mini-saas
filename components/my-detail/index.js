// components/my-detail/index.js
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
      console.log(this.data.userInfo)
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
