Feature: Logging to the webapp

  Scenario Outline: With Invalid credentials, I cannot log in

    Given I am on the login page
    When I login with <user> and <pass>
    Then I should see a flash message for <errorType>

    Examples:
    |user|pass|errorType|
    |""|""|"usernameRequired"|
    |"standard_user"|""|"passwordRequired"|
    |"locked_out_user"|"secret_sauce"|"lockedUser"|



