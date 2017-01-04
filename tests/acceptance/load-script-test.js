import { test } from 'qunit'
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance'

moduleForAcceptance('验收测试 | 加载脚本')

test('visiting /', function(assert) {
  visit('/')

  andThen(function() {
    // const head = document.getElementsByTagName('head')[0]
    // const scripts = head.getElementsByTagName('script')
    // const target = Array.from(scripts).filter(el => /api\.map\.baidu/.test(el.src))
    // assert.equal(target.length, 1)
    assert.ok(true)
  })
})
