///<reference path="../typings/globals/node/index"/>
import 'mocha';
import {Builder, until, Capabilities, By} from 'selenium-webdriver';
import 'chromedriver';
import * as test from 'selenium-webdriver/testing';
import {AppPage, getAppPage} from './AppPage';

import assert = require('assert');

const browserLocation = process.env['tst.browserLocation'];
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', {
    binary: browserLocation,
    args: ['--headless']
});

describe('Application end to end', function() {

    let driver;

    test.before(function*() {
        driver = yield new Builder()
            .forBrowser('chrome')
            .withCapabilities(capabilities)
            .build();
    });

    test.it('should be able to load the page and find the elements', function*() {
        const page: AppPage = yield getAppPage(driver);
        let visitors = yield page.getVisitors();
        assert.equal(visitors.length, 0, "Initially no one has visited the page");
        yield page.helloInput.sendKeys('Alexis');
        yield page.helloBtn.click();
        yield driver.wait(until.elementTextContains(page.responseText, 'Alexis'), 1000);
        visitors = yield page.getVisitors();
        assert.equal(visitors.length, 1, "One person has visited the page");
    });

    test.after(function*() {
        yield driver.quit();
    });

});