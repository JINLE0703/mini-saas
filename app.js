// app.js
App({
  globalData: {
    statusHeight: 'auto',
    navHeight: 'auto',
    navBarHeight: 'auto'
  },

  async initNavBar() {
    // 获取状态栏高度
    const { statusBarHeight } = await wx.getSystemInfo()
    // 获取胶囊信息
    const { top, height } = wx.getMenuButtonBoundingClientRect()
    const navHeight = (top - statusBarHeight) * 2 + height
    // 获取导航栏高度
    this.globalData.statusHeight = statusBarHeight
    this.globalData.navHeight = navHeight
    this.globalData.navBarHeight = navHeight + statusBarHeight
  },

  onLaunch(options) {
    // 加载字体
    wx.loadFontFace({
      global: true,
      family: 'tx-font',
      source: 'https://6465-demo-1gkm3ya7d1739416-1304452149.tcb.qcloud.la/font/%E8%85%BE%E8%AE%AF%E4%BD%93-W7.otf?sign=907e67c2f16bfcae108b66d8f9565cbb&t=1607946452',
    })
    wx.loadFontFace({
      global: true,
      family: 'iconfont',
      source: 'https://at.alicdn.com/t/font_2270683_wwbl563nu39.woff2',
    })
    this.initNavBar()
  },
  onShow(options) {
    // Do something when show.
  },
  onHide() {
    // Do something when hide.
  },
  onError(msg) {
    console.log(msg)
  }
})