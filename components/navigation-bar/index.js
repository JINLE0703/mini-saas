// components/navigation-bar/index.js
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
    statusBarHeight: 0,  // 状态栏高度
    navigationBarHeight: 0  // 导航栏高度
  },

  lifetimes: {
    async created() {
      // 获取状态栏高度
      const { statusBarHeight } = await wx.getSystemInfo()
      // 获取胶囊信息
      const { top, height } = wx.getMenuButtonBoundingClientRect()
      const navigationBarHeight = (top - statusBarHeight) * 2 + height
      this.setData({
        statusBarHeight,
        navigationBarHeight
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
