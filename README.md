# MERNolithic
Note: the mern-auth-cra is a better starter file, but doesn't have the CI and testsuites bootstrapped yet
**Description**:
This is a monolithic MERN starter project. Here are some of the main features of this starter template:

- **Utilizes JWT authentication (local storage method)** : _This allows you to protect routes on the backend pretty easily._
- **Test Suites** : _Comes completely bootstrapped with test suites for frontend/backend unit tests, integration/api tests, and UI/E2E tests_
- **Continuous Integration**
  : _Comes with a CI config complete with build and testing jobs that will run whenever a PR is made and whenever a PR is merged to the master branch_
- **Easy Heroku Deployment** : _comes with a script that easily deploys a staging and production environment for your app to Heroku_

---

## Getting Started

1. Install Dependencies

   > `npm install`

   > `cd client && npm install`

2. Make sure database is running (use `mongod` or a docker container running `mongod`)
   - the database name gets updated with your project name in package.json automatically, so just make sure you go to package.json and rename your project so it isn't the template name
3. To run locally, you can use `npm run start:dev` which will start the frontend React app (port 3000) and backend Express server (port 3001)
4. Set up CI (optional) : With a CircleCI account, all you have to do is go to the Dashboard > click "add project > select your project repo > and click "start building".
   - FIRST: open `.circleci/config.yml` and change the name on lines 8 and 63 from the template name to your project name
   - consider setting up branch protection rules in GitHub for your project after you set this up
5. Deploy : use command `./initialize.sh` to run the script that will provision databases and deploy a staging and production environment of your app to Heroku
   - (Note: must have `herokucli` installed and logged in before). If you get a permissions error, you may have to run `chmod 755 initialize.sh` first.
   - after successfully running the `./initialize.sh` script, you can use the commands below to deploy the master branch to the respective heroku environment
     - > `git push staging master`
     - > `git push production master`

---

## Testing

_Frontend unit tests_

- testing the React UI components with Jest
- here is a useful article for getting started with Jest https://medium.com/rate-engineering/jest-testing-your-front-end-code-c73079269e8d
- basically it will run all `*.test.js`, `*.spec.js` files found in the client/ directory or files in a `__test__` folder
- to keep things organized, the react component tests should be kept alongside its respective component
- to run the tests, either run them with the command `npm test` from the client/ directory or `npm run frontend-unit-tests` from the project root

_Backend unit tests_

- testing any backend functions with mocha/chai
- these should just be placed as \*.test.js files in the test/utils/ folder
- to run the regular function tests, run the command `yarn backend-unit-tests`

_API tests_

- testing APIs with mocha/chai
- to run API tests, use the command `npm run api-tests`, which run in the NODE_ENV=local by default
- put api tests in the _test/api_ folder and name like \*.spec.js

_UI tests_

- end-to-end testing the UI with Cypress.io
- to run ui tests, use the command `npm run ui-tests` in the root, which will run any of the \*.spec.js files in the cypress/integrations/ directory
