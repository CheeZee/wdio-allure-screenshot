class Page {
  open (path) {
    browser.url(path)
  }

  getTitle () {
    return browser.getTitle()
  }

  getUrl () {
    return browser.getUrl()
  }
}

export default new Page()
