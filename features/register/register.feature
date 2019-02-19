Feature: Register a new customer

  Scenario: Register a new customer with valid first name, last name, username and password
    Given I go to the Sample Register Page
    When I try to create a new account as "mockCustomerA"
    And I enter my first name
    And I enter my last name
    And I enter my username
    And I enter my password
    And I click the Register button
    Then I should see success notification on login page

