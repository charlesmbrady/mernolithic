# MERN-jwt-auth-starter

This is a starter MERN project.
- has CI config setup that will run frontend unit tests (jest), backend unit tests (mocha/chai), API/integration tests (mocha/chai), and UI tests (cypress.io)
- JWT Authentication

***Getting Started***

    1. to use, first clone the repo with `git clone` ...

    2. then use command `npm install` in the root folder, and then 'cd client' and 'npm install' there too which will install dependencies for all parts of the project

    3. then you can run `npm run start:dev` in the root, which will start the frontend and backend.  If you want the database to run you also have to run your mongo database locally by using the `mongod` command in another terminal and connecting the database (ex. using Robo3T) the database name gets updated with your project name automatically, so just make sure the project name in your package.json is correct

    4. (optional) After you have installed all the dependencies, you can run the ./initialize.sh script by typing the command `./initialize.sh` in the terminal from the root of the project.  If you get an error, you may have to run `chmod 755 initialize.sh` in the root first.  Also, make sure you have the heroku-cli installed globally and you have logged in with your username and password.  This script will automatically create and deploy a heroku app for your 'staging' environment and 'production' environment, as well as provision a database for each.  When you want to push changes to these environments later, you can do so for staging using the command `git push staging master` and for production using the command `git push production master`

**Frontend** (runs on port 3000):
- can run just the front end by doing `npm run frontend` in the root or `npm start` from the `client/` folder

**Backend** (runs on port 3001):
- can run just the front end by doing `npm run backend` in the root or `nodemon server/src/server.js` from the root

**CircleCI**
- to get this running in CI, login to CircleCI and start the project, then future PullRequests will be run in CI

**TESTING**

*Frontend unit tests*
- testing the React UI components with Jest
- here is a useful article for getting started with Jest https://medium.com/rate-engineering/jest-testing-your-front-end-code-c73079269e8d
- basically it will run all `*.test.js`, `*.spec.js` files found in the client/ directory or files in a `__test__` folder
- to keep things organized, the react component tests should be kept alongside its respective component
- to run the tests, either run them with the command `npm test` from the client/ directory or `npm run frontend-unit-tests` from the project root

*Backend unit tests*
- testing any backend functions with mocha/chai
- these should just be placed as *.test.js files in the test/utils/ folder
- to run the regular function tests, run the command `yarn backend-unit-tests`

*API tests*
- testing APIs with mocha/chai
- to run API tests, use the command `npm run api-tests`, which run in the NODE_ENV=local by default
- put api tests in the _test/api_ folder  and name like *.spec.js

*UI tests*
- end-to-end testing the UI with Cypress.io
- to run ui tests, use the command `npm run ui-tests` in the root, which will run any of the *.spec.js files in the cypress/integrations/ directory

**CI notes**
- every once in awhile, might wanna manually increment the "v1-" part of the caching steps in the .circleci/config.yml file.  This makes sure the Master branch has a nice cache in case any major changes were made since the project was added to CI