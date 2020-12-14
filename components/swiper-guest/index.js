// components/guest/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: [
        {
          cover_img: 'https://yhz-standard-1302848509.cos.ap-guangzhou.myqcloud.com/home/ritazeng.jpg',
          name: "曾佳欣",
          nameEn: "Ritazeng",
          post: ["腾讯副总裁", "腾讯云会展方案总监"],
          postEn: ["Vice President of Tencent"],
        },
        {
          cover_img: 'https://yhz-standard-1302848509.cos.ap-guangzhou.myqcloud.com/home/kelvinsong.png',
          name: "宋可心",
          nameEn: "Kelvinsong",
          post: ["腾讯云会展业务副总裁"],
          postEn: ["Vice President of Tencent Cloud Exhibition Business"],
        },
        {
          cover_img: 'https://yhz-standard-1302848509.cos.ap-guangzhou.myqcloud.com/home/tomiezhang.jpg',
          name: "张耀辉",
          nameEn: "Tomiezhang",
          post: ["腾讯云会展产品副总裁"],
          postEn: ["Vice President of Tencent Cloud Exhibition Products"],
        },
        // {
        //   cover_img: 'https://yhz-standard-1302848509.cos.ap-guangzhou.myqcloud.com/home/taifang.jpeg',
        //   name: "方泰",
        //   nameEn: "Taifang",
        //   post: ["腾讯云会展运营副总裁"],
        //   postEn: ["Vice President of Operations, Tencent Cloud Exhibition"],
        // },
        // {
        //   cover_img: 'https://yhz-standard-1302848509.cos.ap-guangzhou.myqcloud.com/home/yanmin.jpg',
        //   name: "严敏",
        //   nameEn: "Vivianayan",
        //   post: ["腾讯云会展方案总监"],
        //   postEn: ["Director of Tencent Cloud Exhibition Solutions"],
        // }
      ]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  lifetimes: {
    attached() {
      this.setSwiperOffset(this.data.currentIndex)
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 滑动事件
    handleSwiperChange(e) {
      this.setData({
        currentIndex: e.detail.current
      }, () => {
        this.setSwiperOffset(this.data.currentIndex)
      })
    },
    setSwiperOffset(current) {
      const listLength = this.properties.list.length
      const leftSwiper = current > 0 ? current - 1 : listLength - 1
      const rightSwiper = current + 1 === listLength ? 0 : current + 1
      this.setData({
        [`list[${current}].offset`]: 0,
        [`list[${leftSwiper}].offset`]: 600,
        [`list[${rightSwiper}].offset`]: -600
      })
    }
  }
})
