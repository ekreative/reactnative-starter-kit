# React Native Starter Kit

Read react-native guide https://hello.ekreative.com/js/overview.html

## Installing

Change name of the project on the one you want in package.json and app.json

Install dependencies
```shell
yarn install
```

Create ios and android libraries
```shell
yarn run upgrade
```

Go to ios folder and run
```shell
pod install
```

In Xcode you should use only .xcworkspace

index.ts.dist in app/config is example of index.ts where you can put some properties (i.e. server/api url).

## For starting the project

android
```shell
yarn run android
```

ios
```shell
yarn run ios
```

## Tests

Lint your code
```shell
yarn run lint
```
Jest is for unit testing
```shell
yarn test
```
