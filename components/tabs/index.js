// components/tabs/index.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 导航栏渲染列表
    list: {
      type: Array,
      value: []
    },
    // 整个tabs的高度（用于固定的导航栏，主体内容滚动）
    tabsHeight: {
      type: String,
      value: null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0, // 当前轮播index
    swiperHight: 'auto' // 主题内容高度
  },

  lifetimes: {
    attached: function () {
      this.autoHeight()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 处理点击tab栏
    handleTapHeader(e) {
      const currentIndex = e.currentTarget.dataset.index
      this.setData({
        currentIndex
      }, () => {
        this.autoHeight()
      })
    },
    // 处理swiper滑动
    handleSwiperChange(e) {
      const currentIndex = e.detail.current
      this.setData({
        currentIndex
      }, () => {
        this.autoHeight()
      })
    },
    // 禁止滑动
    // catchTounchMove() {
    //   return false
    // },
    // 自动设置swiper高度
    autoHeight() {
      const index = this.data.currentIndex
      this.createSelectorQuery()
        .select('#end' + index).boundingClientRect()
        .select('#start' + index).boundingClientRect()
        .exec(res => {
          let _space = res[0].top - res[1].top
          _space = _space + 'px'
          this.setData({
            swiperHight: _space
          })
        })
    },
  }
})
