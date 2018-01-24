Feature: open wdio-allure-reporter repo

  Scenario Outline:
    When I open the <url>
    Then I should be on the repo page

    Examples:
      | url |
      | https://github.com/webdriverio/wdio-allure-reporter |
