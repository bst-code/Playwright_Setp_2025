Feature: Login testcases

  Background: Do some pre condition before each Scenario in the feature file
    Given i Delete data from DB

  Scenario: Validate with invalid data
    Given I login to Product login page
    When I enter userName as "admin" and password as "pwd"
    Then I Validate error message

  Scenario: Validate with Empty data
    Given I login to Product login page
    When I enter userName as "" and password as ""
    Then I Validate error message