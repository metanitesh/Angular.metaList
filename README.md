### Angular.metaList [![BuildStatus](https://travis-ci.org/metanitesh/Angular.metaList.svg?branch=master)](https://travis-ci.org/metanitesh/Angular.metaList)

>MetaList is a javascript application designed for sleek content organization. even though it can be used as a product actual purpose of the application is to demonstrate how to craft production ready javascript application in angular. 
- [live demo](http://www.niteshsharma.com/angular.metalist)
- [unit tests ](https://travis-ci.org/metanitesh/Angular.metaList)

####Other version

>without framworks
- [Js.metaList](https://github.com/metanitesh/Js.metaList/)

>with framworks
- [Backbone.metaList](https://github.com/metanitesh/Backbone.metaList/)


####Setup

>*prerequisites*

you need to have node/npm installed in your machine [nodejs.org](http://nodejs.org/) and have navigated inside the cloned application in your machine. 

>*loading dependencies*

```
npm install
npm start (this will also call `bower install` behind the scene)
```
>Now browse to the app at `http://localhost:8000/app/index.html`.

>######Running Tests

>*unit*
```
karma start test/karma-conf.js
```

>*end to end testing* 

```
npm run update-webdriver (only required once);
protractor test/protractor-conf.js
```

####Angular: 
>Angular Js is arguably the best thought out framework for front-end application. the opinionated nature of framework significantly help to do it right way. beside bringing amazing features like DI, directive, two way binding to javascipt community the most incredible feat has to be their out of the box (unit/functional) testing ecosystem.


>MetaList follows TDD approach and uses jasmine to write unit tests. 

- [run unit tests](http://www.niteshsharma.com/backbone.metalist/tests/unit/specrunner.html)


####Build/ Grunt 

>MetaList utilize grunt as a build tool and uses it to runs unit tests and lint Js files. 

####CI/ Travis

>CI system can run application's buildFile on multiple environment with every commit and notify back by email if something goes wrong. Although setting up local CI like jenkins could be a potential  hassle travis makes it a breeze for open source github project like this one.


####SMACSS

>MetaList follows smacss guidelines to architect css in modular fashion and organizes base, layout and module classes separately. Every css module in metalist can be effectively re-used and adopt different layouts.


####DB/ LocalStorage 
>MetaList stores data locally in your browser.

####jQuery/ Underscore
>MetaList uses jquery for Dom and Underscore for utility belt.

