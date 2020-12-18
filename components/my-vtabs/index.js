// components/my-vtabs/index.js
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
    inactiveTabBgColor: { type: String, value: '#eeeeee' }, // tab未激活背景颜色
    activeTabTextColor: { type: String, value: '#07C160' }, // tab激活文字颜色
    inactiveTabTextColor: { type: String, value: '#000000' }, // tab未激活文字颜色
    tabLineColor: { type: String, value: '#07C160' }, // tab侧边直线颜色
  },

  /**
   * 组件的初始数据
   */
  data: {
    scrollTop: 0, // 被激活 content 相对滚动高度
    _contentHeight: [], // 每个 content 的高度集合
    _heightRecords: [], // 记录每个 content 的相对高度
  },

  relations: {
    '../my-tabs-item/index': {
      type: 'child', // 关联的目标节点应为子节点
      linked: function (target) { // 每次被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
        // 计算每个 content 的高度存进 _contentHeight
        target.calcHeight((rect) => {
          this.setData({
            [`_contentHeight[${target.data.tabIndex}]`]: rect.height
          }, () => {
            this.recordHeight()
          })
        })
      },
      unlinked: function (target) { // 每次被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
        delete this.data._contentHeight[target.data.tabIndex]
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 记录每个content的相对高度
    recordHeight() {
      const len = this.properties.tabs.length
      const { _contentHeight } = this.data
      const _heightRecords = []
      let temp = 0
      for (let i = 0; i < len; i++) {
        _heightRecords[i] = temp + (_contentHeight[i] || 0)
        temp = _heightRecords[i]
      }
      this.setData({
        _heightRecords
      })
    },
    // 处理点击tab标签
    handleTapTab(e) {
      const { index } = e.currentTarget.dataset
      const { _heightRecords } = this.data
      const scrollTop = _heightRecords[index - 1] || 0
      this.setData({
        activeTab: index,
        scrollTop
      })
    }
  }
})
