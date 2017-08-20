///<reference path="../typings/modules/selenium-webdriver/index"/>
///<reference path="../typings/modules/co/index"/>
import {By, WebElement} from 'selenium-webdriver';
import * as co from 'co';

export interface AppPage {
    helloInput: WebElement;
    helloBtn: WebElement;
    responseText: WebElement;
}

export function AppPage(driver): Promise<AppPage> {
    return co(function *() {
        let page: AppPage = {} as AppPage;
        yield driver.get('http://localhost:8000/index.html');
        yield driver.findElement(By.id('app-root'));
        page.helloInput = yield driver.findElement(By.id('hello-input'));
        page.helloBtn = yield driver.findElement(By.id('hello-btn'));
        page.responseText = yield driver.findElement(By.id('response-text'));
        return page;
    });
}