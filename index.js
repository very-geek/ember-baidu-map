'use strict'

module.exports = {
  name: 'ember-baidu-map',

  isDevelopingAddon() {
    return process.env.EMBER_ENV === 'production'
  },

  contentFor(type, config) {
    return ('head-footer' === type) ? this._contentForBMap(config.BaiduMap) : ''
  },

  _contentForBMap(options) {
    const url = 'https://api.map.baidu.com/getscript'
    const isAsync = options.async ? 'async' : ''
    const timestamp = options.secret ? 't=20161227185926' : 't=20150522093217'
    const protocal = options.secret
          ? `window.HOST_TYPE = '2'` : `window.BMAP_PROTOCOL = 'https'`
    const params = options.secret
          ? `?v=2.0&s=1&ak=${options.secret}&${timestamp}`
          : `?v=1.4&s=1&${timestamp}`

    return [
      `<script id="bmap" type="text/javascript">`,
      `  ${protocal};`,
      `  window.BMap_loadScriptTime = (new Date).getTime();`,
      `  document.getElementById('bmap').remove();`,
      `</script>`,
      `<script ${isAsync} src="${url + params}"></script>`,
    ].join('\n')
  },

  included() {
    this.import('./vendor/shims/baidu-map.js')
  }
}
