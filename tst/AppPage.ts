///<reference path="../typings/modules/selenium-webdriver/index"/>
///<reference path="../typings/modules/co/index"/>
import {By, WebElement, promise} from 'selenium-webdriver';
import * as co from 'co';

export class AppPage {
    helloInput: WebElement;
    helloBtn: WebElement;
    responseText: WebElement;
    visitorList: WebElement;

    getVisitors(): promise.Promise<WebElement[]> {
        return this.visitorList.findElements(By.css('li'));
    }
}

export function getAppPage(driver): Promise<AppPage> {
    return co(function *() {
        let page = new AppPage();
        yield driver.get('http://localhost:8000/index.html');
        yield driver.findElement(By.id('app-root'));
        page.helloInput = yield driver.findElement(By.id('hello-input'));
        page.helloBtn = yield driver.findElement(By.id('hello-btn'));
        page.responseText = yield driver.findElement(By.id('response-text'));
        page.visitorList = yield driver.findElement(By.id('visitor-list'));
        return page;
    });
}