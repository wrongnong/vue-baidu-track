import bt from '../index'

export default {
  name: 'bt',
  props: {
    events: {
      type: Array,
      default: () => []
    },
    pageviews: {
      type: Array,
      default: () => []
    }
  },
  mounted () {
    this.pageviews.forEach((pv) => {
      let args = null
      if (typeof pv === 'string') {
        args = pv.split(',')
        args.forEach((arg, i) => (args[i] = arg.trim()))
      } else if (typeof pv === 'object') {
        args = pv
      }
      bt.trackPageview(...args)
    })
  }
}
