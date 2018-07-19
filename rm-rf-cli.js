#!/usr/bin/env node

const meow = require('meow')

const rimraf = require('rimraf')

const cli = meow(`
  Usage
    $ rm -rf <paths>

  Options
    --verbose, -v show verbose output
`, {
  flags: {
      verbose: {
        alias: 'v',
        type: 'boolean'
      }
  }
})

const verbose = cli.flags.verbose

const paths = cli.input

console.log('verbose: ' + verbose)
console.log('paths: ' + paths)

verbose && console.log('Removing:')

paths.forEach(function(p) {
  verbose && console.log('- ' + p)

  try {
    rimraf.sync(p)
    verbose && console.log('. gone')
  } catch(e) {
    console.error('. remove error for ' + p + ':')
    console.error(e)
  }
})
