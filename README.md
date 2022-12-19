# MySite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Publishing website to git hub pages
1. Run `npm install -g angular-cli-ghpages` to Install the git hub pages using command 
2. Run `ng build --prod --base-href "https://<user-name>.github.io/<repo>/` to build the application which is used to deploy on ghPages
3. Run `ngh --dir dist/<distFolderName>` to publish the application. In some cases we have to navigate to dist folder if it's not created on the project directory and later we have to execute step 3
4. Go to setting step of reprositiory and find the application URL under GitHub Page section

