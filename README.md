# Rent3

# Resolve issues for angular-in-memory
Note: Install in memory data
npm install --save angular2-in-memory-web-api@0.0.17

Fix bug in angular2-in-memory-web-api
open file:
node_modules\angular2-in-memory-web-api\index.d.ts,
change the following 
`static forRoot(dbCreator: Type, options?: InMemoryBackendConfigArgs): ModuleWithProviders;`
To
`static forRoot(dbCreator: Type<any>, options?: InMemoryBackendConfigArgs): ModuleWithProviders;`

under the project root folder, run
`npm install`

#DatePicker
npm install mydatepicker --save

https://recordnotfound.com/mydatepicker-kekeh-125715


# Project
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
