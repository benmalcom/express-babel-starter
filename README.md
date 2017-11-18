## Express Babel Starter
A starter scaffold for your express projects using babel so you can take advantage of es6+ features in a nodejs environment
This scaffold does not in anyway enforce how you should structure your project. You can tweak it to suit your needs.

Project generated with [express-generator](https://expressjs.com/en/starter/generator.html).

It's a small improvement over [babel's official guide](https://github.com/babel/example-node-server) and [vmasto's express-babel](https://github.com/vmasto/express-babel)


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
`cd express-babel-starter`

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

##### Disclosure
There has always been debates online whether to use babel-transpilled codes on the server
or not. Personally, I think it's fine and I've found this setup to be a sensible approach in doing so.
That said, I'd suggest to take anything you read online with a grain of salt and refrain from blindly using boilerplates without first investigating personally.
Node is very rapidly converging with the latest ECMAScript specification, and there's mostly full native support for ES2015 and ES2016. The need to transpile on the server is way smaller nowadays, albeit the language is constantly improving and transpiling will probably always be a part of our workflow. At the time of this writing the main benefits are mainly ES6 module syntax and async/await without flags.

>This opinion is adapted from [vmasto](https://github.com/vmasto) in his [express-babel](https://github.com/vmasto/express-babel) project
>because I agree with it.

In any case, you can simply remove transpilation and keep everything else that this kit has to offer.
If you see anything that needs improvement feel free to open an issue for discussion!
