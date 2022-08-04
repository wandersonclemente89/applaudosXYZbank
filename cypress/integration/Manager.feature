@XYZ_BANK @MANAGER
Feature: Manager Flow

  Background:
    Given the user is on the home page
    When click on "Bank Manager" login button
    Then it is redirected to the "Bank Manager" page

  Scenario: Add Customer, Open Account and Delete a Customer
    Given the manager wants to "add a new customer"
    When inserts the below data into the customer form
      | First Name | Wanderson |
      | Last Name  | Silva     |
      | Post Code  | 37540000  |
    And click on "submit add customer" button
    Then an alert popup is shown containing the message "Customer added successfully"
    Given the manager wants to "open a new account"
    When selects the customer "Wanderson Silva"
    And selects the currency "Dollar"
    And click on "process" button
    Then an alert popup is shown containing the message "Account created successfully"
    Given the manager wants to "view the customer details"
    When inserts the customer name "Wanderson" into search field
    And click on "delete" button
    Then the customer is not listed anymore