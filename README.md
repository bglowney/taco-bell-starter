# taco-bell-starter

Demo package for use of [taco-bell](https://www.npmjs.com/package/taco-bell). Clone and use as a template for your project.

This package contains an example project structure when working with taco-bell. The application's function is trivial and 
is only intended to demonstrate an opinionated design pattern.

* __dist__ -- compiled files are copied here
* __src__
  * __client__ -- files bundled and sent to the browser
    * _App.ts_ -- class for creating the browser application.
    * _Model.ts_ -- class representing the application state
    * _main.ts_ -- startup script which instantiates a singleton model and a singleton App.
  * __server__ -- files are NOT sent to browser
    * _server.ts_ -- server configuration. This is the script executed when running the server with `grunt serve`  
  * __static__ -- contains web resources served to the browser
  * _models.ts_ -- script shared by client and server
* __tst__
  * _AppPage.ts_ -- selenium style page model
  * _end-to-end.ts_ -- end to end test script executed with `grunt end-to-end`. Depends on _server.ts_   

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
These tests are configured to run in a local headless Chrome browser.
First update the `tst.browserLocation` environment variable in Gruntfile.coffee to point to the location of
your chrome installation.

```
# first start the server
grunt serve
# then in a different shell run the tests
grunt end-to-end
```