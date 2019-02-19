import {element, by, browser} from 'protractor';

export class RegisterPagePo {

    static goToLoginPage() {
        return browser.get('/register');
    }

    static setFirstName(firstName: string) {
        return element(by.css('body > app > div.jumbotron > div > div > ng-component > div > form > div:nth-child(1) > input')).sendKeys(firstName);
    }

    static setLastName(lastName: string) {
        return element(by.css('body > app > div.jumbotron > div > div > ng-component > div > form > div:nth-child(2) > input')).sendKeys(lastName);
    }

    static setUsername(username: string) {
        return element(by.css('body > app > div.jumbotron > div > div > ng-component > div > form > div:nth-child(3) > input')).sendKeys(username);
    }

    static setPassword(password: string) {
        return element(by.css('body > app > div.jumbotron > div > div > ng-component > div > form > div:nth-child(4) > input')).sendKeys(password);
    }

    static getRegisterButton() {
        return element(by.css('body > app > div.jumbotron > div > div > ng-component > div > form > div:nth-child(5) > button'));
    }

    static getCancelLink() {
        return element(by.css('body > app > div.jumbotron > div > div > ng-component > div > form > div:nth-child(5) > a'));
    }

}
