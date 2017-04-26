/*
 *  Export your test as a module for Nightcrawler to use
 *
 *    module.exports = {
 *      { testName }: (client) => { test }
 *    }
 *
 */

module.exports = {
  
  'Demo test Google': function(client) {
    
    client
      .url('www.google.com')                  //  Direct the client to www.google.com
      .waitForElementVisible('body', 1000)    //  Wait for the <body> to load ( timeout after 1000ms )
      .end()                                  //  end() the connection to the client
    
  }
}