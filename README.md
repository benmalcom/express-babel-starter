## Express Babel Starter
A starter scaffold for your express projects using babel so you can take advantage of es6+ features in a nodejs environment
This scaffold does not in anyway enforce how you should structure your project. You can tweak it to suit your needs.

It's a small improvement over [vmasto's express-babel](https://github.com/vmasto/express-babel)
#### What's Included?
* [Expressjs](https://expressjs.com) as the web framework
* Support for es6+(es2015, es2016, es2017....) features thanks to [Babel](https://babeljs.io)
* Your codes are automatically polyfilled based on your run time environment by [babel-preset-env](https://github.com/babel/babel/tree/master/experimental/babel-preset-env)
* There's linting option with [ESlint](https://eslint.org)
* Testing with [Mocha](https://mochajs.org)
* [Config](http://lorenwest.github.io/node-config/) module to store simple project configurations

#### Getting Started



<span style="color:gray"># Clone the project</span>
```
git clone https://github.com/benmalcom/express-babel-starter.git
```
<span style="color:blue">cd</span> express-babel-starter

<span style="color:gray"># Make it your own</span>
```
rm -rf .git && git init (for windows users, delete .git folder)
```
<span style="color:gray"># Install dependencies</span>
```
npm install
``` 
 If you use [Yarn](https://yarnpkg.com), just replace `npm` with `yarn` in the commands.
##### Start Your development
```
npm run start:dev
```
This command starts a [nodemon](https://nodemon.io) process for your server restart when a code change happens.
### Linting
This scaffold uses [ESlint](https://eslint.org). 
It extends [google's eslint config](https://github.com/google/eslint-config-google). Feel
free to use your own rules or extend any other desirable rule(e.g [airbnb](https://www.npmjs.com/package/eslint-config-airbnb))
You can run linting in watch mode with:
```
npm run lint
```
Note: `npm run start:dev` starts the server with linting in watch mode, you can remove it if need be.
### Testing
This scaffold uses [Mocha](https://mochajs.org). It also uses [Supertest](https://github.com/visionmedia/supertest) to demonstrate a simple routing test suite.
Feel free to remove the supertest if you don't wish to use it.
You can start the test runner in watch mode with:
```
npm test
```
##### Todo
* Environment Variables
* Deployment
* FAQs?