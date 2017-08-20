# taco-bell-starter

Demo package for use of [taco-bell](https://www.npmjs.com/package/taco-bell). Clone and use as a template for your project.

This package contains an example project structure when working with taco-bell. The application's function is trivial and 
is only intended to demonstrate an opinionated design pattern.

* src
  * client
    * _App.ts_ -- class for creating the browser application.
    * _Model.ts_ -- class representing the application state
    * _main.ts_ -- startup script which instantiates a singleton model and a singleton App.

### Install
```
npm install -g grunt-cli
npm install
```
### Clean
```
grunt clean
```
### Build
```
grunt
```
### Serve
```
grunt serve
```
### End to end tests
```
# first start the server
grunt serve
# then in a different shell run the tests
grunt end-to-end
```