# Nightwatch Boilerplate

A simple boilerplate that allows you to quickly get setup with a Nightwatch testing environment without any configuration.  The latest versions of chromedriver and the selenium.jar files will be downloaded upon the initial setup so you're ready to go with minimal effort.

# Setup

    1. `git clone https://github.com/LanceJernigan/Nightwatch-Boilerplate.git`
    2. cd Nightwatch-Boilerplate
    3. yarn install
    
# Adding tests

Simply add your tests to the `/tests/` folder in the root of this boilerplate and run `yarn test`.  Nightwatch will run all the tests within the `/tests/` folder and output the results in the console.

# Miscellaneous

Running `yarn install` should download the latest selenium.jar and chromedriver files to the `/bin/` folder.