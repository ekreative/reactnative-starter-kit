# React Native Starter Kit

## Installing / Getting started

##### Change name of the project on the one you want in package.json and index.js

For installing dependencies
```shell
npm i
```

For creating ios and android libraries
```shell
react-native upgrade
```

For initializing pods

```shell
cd ios
pod init
pod install
```

index.js.dist in app/config is example of index.js where you can put some properties (i.e. server/api url).

For starting the project

android
```shell
npm run android
```

ios
```shell
npm run ios
```

For release building on Android use
```shell
npm run build-release-android
```

For Clean Project in Android run

```shell
npm run gradle-clean
```

## Tests

Standard is for code style testing
```shell
npm run standard-test
```
Jest is for unit testing
```shell
npm run jest-test
```
## Style guide

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
