// components/schedule/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 传入列表数据
    list: {
      type: Array,
      value: []
    },
    // 默认显示条数
    defaultCount: {
      type: Number,
      value: 2
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showMore: false, // 展开
    scheduleList: [], // 渲染列表数据
    windowHeight: 0,
    containerHeight: 0
  },

  observers: {
    'list': function (list) {
      this.setData({
        scheduleList: list
      })
    },
    'showMore': function (showMore) {
      if (!showMore) {
        // 不显示全部数据
        this.setData({
          windowHeight: 352 * this.properties.defaultCount,
          containerHeight: 352 * this.properties.defaultCount
        })
      } else {
        // 显示全部数据
        this.setData({
          windowHeight: 352 * this.properties.list.length,
          containerHeight: 352 * this.properties.list.length
        })
      }
    }
  },

  lifetimes: {
    attached() {
      this.setData({
        windowHeight: 352 * this.properties.defaultCount,
        containerHeight: 352 * this.properties.defaultCount
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 处理点击更多
    handleTapShowMore() {
      this.setData({
        showMore: true
      }, () => {
        this.triggerEvent('tabsAutoHeight')
      })
    },
    // 处理收起更多
    handleTapHideMore() {
      this.setData({
        showMore: false,
      }, () => {
        this.triggerEvent('tabsAutoHeight')
      })
    },
  }
})
