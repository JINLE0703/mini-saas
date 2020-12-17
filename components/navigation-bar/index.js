// components/navigation-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 对齐方式
    align: {
      type: String,
      value: 'center'
    }
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
    async attached() {
      // 获取状态栏高度
      const { statusBarHeight } = await wx.getSystemInfo()
      // 获取胶囊信息
      const { top, height } = await wx.getMenuButtonBoundingClientRect()
      const navHeight = (top - statusBarHeight) * 2 + height
      this.setData({
        statusHeight: statusBarHeight,  // 状态栏高度
        navHeight: navHeight,  // 导航栏高度
        navBarHeight: statusBarHeight + navHeight
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
