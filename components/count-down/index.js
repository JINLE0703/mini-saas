// components/countdown/index.js
import { formatTime } from '../../utils/util'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    endTime: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _timer: null,
    d: '00',
    h: '00',
    m: '00',
    s: '00',
    timeDiff: 0 // 相差时间
  },

  lifetimes: {
    attached() {
      this.init()
    },
    detached() {
      clearInterval(this.data._timer)
      this.setData({
        _timer: null
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    init() {
      const timeDiff = new Date(this.properties.endTime).getTime() - new Date().getTime()
      // [day, hour, minute, second]
      this.setData({
        timeDiff: timeDiff > 0 ? timeDiff : 0
      }, () => {
        this.tick()
      })
    },
    tick() {
      let { timeDiff } = this.data
      const _timer = setInterval(() => {
        if (timeDiff < 1000) {
          timer = null
          return
        }
        timeDiff -= 1000
        const timeDiffArr = formatTime(new Date(timeDiff))
        this.setData({
          d: timeDiffArr[0],
          h: timeDiffArr[1],
          m: timeDiffArr[2],
          s: timeDiffArr[3]
        })
      }, 1000)
      this.setData({
        _timer
      })
    }
  }

})
