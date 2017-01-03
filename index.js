'use strict'

module.exports = {
  name: 'ember-baidu-map',

  isDevelopingAddon() {
    return process.env.EMBER_ENV === 'production'
  },

  contentFor(type, config) {
    return ('body-footer' === type) ? this._contentForBMap(config.BaiduMap) : ''
  },

  _contentForBMap(options) {
    const url = 'https://api.map.baidu.com/getscript'
    const timestamp = options.secret ? 't=20161227185926' : 't=20150522093217'
    const params = options.secret
          ? `?v=2.0&s=1&ak=${options.secret}&${timestamp}`
          : `?v=1.4&s=1&${timestamp}`
    const protocalStatement = options.secret
          ? 'window.HOST_TYPE = \'2\''
          : 'window.BMAP_PROTOCOL = \'https\''

    return [
      `<script id="bmap" type="text/javascript">`,
      `window.addEventListener('DOMContentLoaded', function(e) {`,
      `  ${protocalStatement};`,
      `  window.BMap_loadScriptTime = (new Date).getTime();`,
      `  var script = document.createElement('script');`,
      `  script.async = ${options.async};`,
      `  script.type = 'text/javascript';`,
      `  script.src = '${url + params}';`,
      `  document.body.appendChild(script);`,
      `  e.target.getElementById('bmap').remove();`,
      `});`,
      `</script>`
    ].join('\n')
  }
}
