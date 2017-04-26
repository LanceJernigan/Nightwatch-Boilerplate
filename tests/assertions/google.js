module.exports = {
  'Demo test Google': function(client) {
    
    client
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .assert.containsText('#main', 'Night Watch')
      .end()
    
  }
}