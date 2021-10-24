'use strict'

const path = require('path');

module.exports = {
  normalize: (abspath, ext) => {
    return '/' + abspath.replace(ext, '').split(path.sep).join('/')
  }
}
