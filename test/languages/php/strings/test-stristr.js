// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
var XMLHttpRequest = {} // eslint-disable-line no-native-reassign
var window = { // eslint-disable-line no-native-reassign
  window: {},
  document: {
    lastModified: 1388954399,
    getElementsByTagName: function () { return [] }
  },
  location: {
    href: ""
  }
}
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set') // eslint-disable-line no-unused-vars
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get') // eslint-disable-line no-unused-vars
var stristr = require('/Users/kvz/code/phpjs/src/php/strings/stristr.js')

describe('src/php/strings/stristr.js', function () {
  it('should pass example 1', function (done) {
    stristr('Kevin van Zonneveld', 'Van')
    var expected = 'van Zonneveld'
    var result = stristr('Kevin van Zonneveld', 'Van')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    stristr('Kevin van Zonneveld', 'VAN', true)
    var expected = 'Kevin '
    var result = stristr('Kevin van Zonneveld', 'VAN', true)
    expect(result).to.deep.equal(expected)
    done()
  })
})