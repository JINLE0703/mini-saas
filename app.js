// app.js
App({
  globalData: {
    statusHeight: 'auto', // 状态栏高度
    navHeight: 'auto', // 导航栏高度
    navBarHeight: 'auto', // 导航栏整体高度
    isLogin: false
  },
  
  // 监听属性
  $watch(key, cb) {
    const obj = this.globalData
    let val = obj[key]
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      get: () => {
        return val
      },
      set: (value) => {
        console.log('set')
        val = value
        cb(value)
      }
    })
  },

  // 初始化导航栏高度
  async initNavBar() {
    // 获取状态栏高度
    const { statusBarHeight } = await wx.getSystemInfo()
    // 获取胶囊信息
    const { top, height } = await wx.getMenuButtonBoundingClientRect()
    const navHeight = (top - statusBarHeight) * 2 + height

    this.globalData.statusHeight = statusBarHeight
    this.globalData.navHeight = navHeight
    this.globalData.navBarHeight = navHeight + statusBarHeight
  },

  // 判断登录状态
  checkLogin() {
    if (wx.getStorageSync('user_info')) {
      this.globalData.isLogin = true
    } else {
      this.globalData.isLogin = false
    }
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
    // 初始化导航栏高度
    this.initNavBar()
    // 判断登录状态
    this.checkLogin()
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