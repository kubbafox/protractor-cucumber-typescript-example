import {element, by} from 'protractor';

export class LoginPagePo {

    static setUsername() {
        return element(by.css('body > app > div.jumbotron > div > div > ng-component > div > form > div:nth-child(1) > input'));
    }

    static setPassword() {
        return element(by.css('body > app > div.jumbotron > div > div > ng-component > div > form > div:nth-child(2) > input'));
    }

    static getNotification() {
        return element(by.css('body > app > div.jumbotron > div > div > alert > div'));
    }

    static getLoginButton() {
        return element(by.css('body > app > div.jumbotron > div > div > ng-component > div > form > div:nth-child(3) > button'));
    }

    static getRegisterLink() {
        return element(by.css('body > app > div.jumbotron > div > div > ng-component > div > form > div:nth-child(3) > a'));
    }

}
