// components/data-item/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgUrl: ''
  },

  observers: {
    'item': function (item) {
      const { type } = item
      let imgUrl
      switch (type) {
        case 'img':
          imgUrl = 'https://6465-demo-1gkm3ya7d1739416-1304452149.tcb.qcloud.la/images/icon-img.png?sign=eb3f31388031cf56e780001a9ea1cd84&t=1608114632'
          break
        case 'word':
          imgUrl = 'https://6465-demo-1gkm3ya7d1739416-1304452149.tcb.qcloud.la/images/icon-word.png?sign=9fce04386d80a2f80b764d3fc0c5df18&t=1608114654'
          break
        case 'ppt':
          imgUrl = 'https://6465-demo-1gkm3ya7d1739416-1304452149.tcb.qcloud.la/images/icon-ppt.png?sign=c962d0b340c0ede53d00fb0b8076fb56&t=1608114669'
          break
        case 'pdf':
          imgUrl = 'https://6465-demo-1gkm3ya7d1739416-1304452149.tcb.qcloud.la/images/icon-pdf.png?sign=b488677189777271516a7f8132d38481&t=1608114687'
          break
      }
      this.setData({
        imgUrl
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
