# Easy rm-rf CLI

**Author:** [@brodybits (Christopher J. Brody)](github.com/brodybits)

**License:** ISC OR MIT

Status: initial proof-of-concept for testing

Quick and easy rm -rf CLI tool for Node.js

## Usage

```sh
easy-rm-rf [-v] path [another-path ...]
```

or simply:
```sh
rm-rf [-v] path [another-path ...]
```

## Design

Conceptually based on: <https://github.com/MatthewNPM/rm-rf>

CLI part is extremely easy due to `meow` package.

Wrapper around `rimraf.sync` call

In the future this CLI may be reworked to use something like `fs-extra`
instead of `rimraf`.

## Use case

npm cli project has a number of dependencies included (committed) in git,
including `rimraf`, with `rimraf` but no `rimraf.cmd` in its
`node_modules/.bin` directory

This causes `npm run prepare` in npm cli project to fail on Windows cmd shell.

This CLI is the quick and easy solution.

## TODO items

- automatic testing
- rm -rf options
- AppVeyor CI & Travis CI
- rework to use asynchronous API calls
- improve documentation
