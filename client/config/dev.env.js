'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
useEslint: false

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
})
