// components/my-tabs-item/index.js
Component({
  options: {
    addGlobalClass: true, // 允许外部样式
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
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
    title: '', // 标签标题
    showTitle: false, // 显示标题
    titleClass: '', // 标题样式
  },

  relations: {
    '../my-tabs/index': {
      type: 'parent',
      linked: function (target) {
        setTimeout(() => {
          const { title } = target.properties.tabs[this.properties.tabIndex]
          const { showTitle, titleClass } = target.properties
          this.setData({
            title,
            showTitle,
            titleClass
          })
        }, 0)
      }
    }
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
