@XYZ_BANK @LOGIN
Feature: Login

  @SMOKE
  Scenario Outline: Login as a <userType>
    Given the user is on the home page
    When click on "<userType>" login button
    Then it is redirected to the "<userType>" page
    Examples:
      | userType     |
      | Bank Manager |
      | Customer     |