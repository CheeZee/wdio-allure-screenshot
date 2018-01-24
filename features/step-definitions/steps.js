import { defineSupportCode } from 'cucumber'
import Page from '../support/page'

export default defineSupportCode(function ({Given, When, Then}) {
  When('I open the {url}', (url) => {
    Page.open(url)
  })

  Then('I should be on the repo page', () => {
    // this is set intentionally to fail so that we can test the allure report screenshot
    expect(browser.getUrl()).to.not.contain('wdio-allure-reporter')
  })
})
