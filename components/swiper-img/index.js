// components/swiper-img/index.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['item-container-class'],

  properties: {
    list: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentDot: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemChange(e) {
      this.setData({
        currentDot: e.detail.current
      })
    }
  }
})
