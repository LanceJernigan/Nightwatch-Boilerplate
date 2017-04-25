var selenium = require('selenium-download');

selenium.ensure('./bin', function(err) {
  if (err)
    console.error(err.stack);
    
  process.exit(0);
})