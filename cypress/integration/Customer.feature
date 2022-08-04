@XYZ_BANK @CUSTOMER
Feature: Customer Flow

  Background:Login
    Given the user is on the home page
    When click on "Customer" login button
    Then it is redirected to the "Customer" page
    When selects the customer "Harry Potter"
    And click on "login" button

  Scenario: Customer Deposit & Withdraw
    Given click on "Deposit" button
    And inserts the amount "10"
    When click on "Submit Deposit" button
    Then message "Deposit Successful" is shown
    And the account balance is updated to "10"
    Given click on "Withdraw" button
    And inserts the amount "10"
    When click on "Submit Withdraw" button
    Then message "Transaction successful" is shown
    And the account balance is updated to "0"

  Scenario: withdraw for insufficient funds
    Given click on "Withdraw" button
    And inserts the amount "10"
    When click on "Submit Withdraw" button
    Then message "Transaction Failed. You can not withdraw amount more than the balance." is shown
    And the account balance is updated to "0"