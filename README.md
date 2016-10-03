# Rails with React and Webpack

## A simple example to demonstrate a Rails application using React with Webpack.

The rails project is an API application that will be used to serve the data in a Json format.
The view was made in react, using babel to transpile and webpack to bundle / manager the modules.
The database used is Postgres.

The transpiler used to generate javascript is Babel.

Webpack is used to create the javascript bundle of the project (see webpack.config.js).

Foreman is used to start two services: 
```
    - Web, that's responsible to run Sinatra.
    - Pack, that's responsible for watch changes and recompile code .
```

To get the code:

`git clone https://github.com/QuickMonkeys/rails-react-webpack.git`

`cd rails-react-webpack`

run `npm i` to install node_modules

run `npm run devstart` to start the application using Foreman.

You can see a live [Demo](https://rails-react-webpack-quick.herokuapp.com/) here.
