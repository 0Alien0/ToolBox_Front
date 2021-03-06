# ToolBoxFront

ToolBox Front End repo

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.16.

## framwork

* JS
 - [Angular 2](https://angular.io/) License: [MIT](https://github.com/angular/angular.js/blob/master/LICENSE)
 - [Angular-cli](https://github.com/angular/angular-cli) License: [MIT](https://github.com/angular/angular-cli/blob/master/LICENSE)

* CSS
 - [SASS](http://sass-lang.com/) License: [MIT](http://sass-lang.com/documentation/file.MIT-LICENSE.html)
 - [Angular Material](https://material.angular.io/) License: [MIT](https://github.com/angular/material2/blob/master/LICENSE)
 - [Materialize](http://materializecss.com/) License: [MIT](https://github.com/Dogfalo/materialize/blob/master/LICENSE)
 - [Google fonts](https://fonts.google.com/) Privacy Policy: [Google Privacy Policy](https://www.google.com/policies/privacy)

## How to use

#### Setting up environment

Before Started, install npm:
```
sudo apt install nodejs npm
```

Angular-cli:
```
sudo npm install -g angular-cli
```

And [install watchman](https://facebook.github.io/watchman/docs/install.html) (I suppose using github to install it)
```
git clone https://github.com/facebook/watchman.git
cd watchman
./autogen.sh
./configure
make
sudo make install
cd ..
yes | rm -r watchman
```

SASS:
```
sudo apt install rbenv
sudo su -c "gem install sass"
```

#### npm install

npm (<font color="red">do not use sudo</font>):
```
npm install
```

#### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

#### Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

#### Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
