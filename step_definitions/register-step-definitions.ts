import {browser} from "protractor";
import {Given, When, Then, Before} from "cucumber";
import {RegisterPagePo} from "../pages/register-page.po";
import {Actor, getActor} from "../data/user.data";


const EC = browser.ExpectedConditions;

let testActor:Actor;

Before(function () {
    testActor = null;
});

Given('I go to the Sample Register Page', function () {
    return RegisterPagePo.goToLoginPage();
});

When('I try to create a new account as {string}', function (key: string) {
    testActor = getActor(key);
    console.log('Loading Testing Actor..', testActor);
    return browser.waitForAngular();
});

When('I enter my first name', function () {
    return RegisterPagePo.setFirstName(testActor.actorData.register.firstName);
});

When('I enter my last name', function () {
    return RegisterPagePo.setLastName(testActor.actorData.register.lastName);
});

When('I enter my username', function () {
    return RegisterPagePo.setUsername(testActor.actorData.register.userName);
});

When('I enter my password', function () {
    return RegisterPagePo.setPassword(testActor.actorData.register.password);
});

When('I click the Register button', function () {
   return RegisterPagePo.getRegisterButton().click();
});

Then('I should see success notification on login page', function () {
    return browser.wait(EC.urlContains('/login'), 2000);
});

