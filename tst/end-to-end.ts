// import fs from 'fs';
import 'mocha';
import {Builder, until, Capabilities} from 'selenium-webdriver';
import 'chromedriver';
import * as test from 'selenium-webdriver/testing';
import {AppPage} from './AppPage';

import assert = require('assert');

const browserLocation = '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome';
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
        const page = yield AppPage(driver);
        yield page.helloInput.sendKeys('Alexis');
        yield page.helloBtn.click();
        yield driver.wait(until.elementTextContains(page.responseText, 'Alexis'), 1000);
    });

    test.after(function*() {
        yield driver.quit();
    });

});