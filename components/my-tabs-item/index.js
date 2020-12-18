// components/my-tabs-item/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabIndex: { type: Number, value: 0 }, // 对应 tabs 数据索引
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  relations:{
    '../my-vtabs/index': {
      type: 'parent'
    }
  },

  lifetimes: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 计算高度
    calcHeight(cb) {
      this.createSelectorQuery().select('.jinle_tabs_content_item').boundingClientRect((rect) => {
        cb && cb(rect)
      }).exec()
    }
  }
})
