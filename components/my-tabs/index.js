// components/my-tabs/index.js
Component({
  options: {
    addGlobalClass: true, // 允许外部样式
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  /**
   * 组件的属性列表
   */
  properties: {
    tabs: { type: Array, value: [] }, // 标签栏数据 { title }
    activeTab: { type: Number, value: 0 }, // 当前激活的tab
    tabBarClass: { type: String, value: '' }, // 导航栏样式
    activeClass: { type: String, value: '' }, // 激活tab样式
    activeTabBgColor: { type: String, value: '#ffffff' }, // tab激活背景颜色
    inactiveTabBgColor: { type: String, value: '#eeeeee' }, // tab 未激活背景颜色
    activeTabTextColor: { type: String, value: '#07C160' }, // tab 激活文字颜色
    inactiveTabTextColor: { type: String, value: '#000000' }, // tab 未激活文字颜色
    tabLineColor: { type: String, value: '#07C160' }, // tab 直线颜色
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeTab: 0, // 当前激活的tab
    currentView: 0 // 导航栏滑动当前显示视图
  },

  observers: {
    // 监听 active 用与赋值给 currentView
    activeTab: function (activeTab) {
      const len = this.properties.tabs.length
      if (len === 0) return

      let currentView = activeTab - 1
      if (currentView < 0) currentView = 0
      if (currentView > len - 1) currentView = len - 1
      this.setData({ currentView })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 处理点击 tab 标签
    handleTapTab(e) {
      const { index } = e.currentTarget.dataset
      this.setData({
        activeTab: index,
      })
    },
    // 处理内容滚动
    handleScrollView(e) {
      const index = e.detail.current
      this.setData({
        activeTab: index,
      })
    }
  }
})
