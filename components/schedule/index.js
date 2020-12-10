// components/schedule/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: [],
      observer: function (newVal, oldVal, change) {
        this.setData({
          scheduleList: newVal
        })
      }
    },
    defaultCount: {
      type: Number,
      value: 2
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showMore: false,
    scheduleList: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 处理点击更多
    handleTapShowMore() {
      this.setData({
        showMore: true
      })
      this.triggerEvent('getMore')
    },
    // 处理收起更多
    handleTapHideMore() {
      this.setData({
        showMore: false,
        scheduleList: this.data.scheduleList.slice(0, this.properties.defaultCount)
      }, () => {
        this.triggerEvent('hideMore')
      })
    }
  }
})
