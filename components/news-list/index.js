// components/news-list/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 数据列表
    list: {
      type: Array,
      value: []
    },
    // 图片列表
    imgList: {
      type: Array,
      value: []
    },
    // 判断第几个导航标签
    listId: {
      type: Number,
      value: null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes: {
    attached() {

    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
