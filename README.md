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
yarn run eject
```

Initialize pods

```shell
cd ios
pod init
```

Copy the text from Podfile.txt and paste it into the Podfile which is located in the ios folder.

Now you can delete the Podfile.txt.

Change the name on line 4 from "reactNativeStarterKit" to the name of your project.

```shell
pod install
```

Thereafter in Xcode you should use only .xcworkspace

You need to create and set up a firebase project in order to use crashlytics.

To do this, go through all the steps described here https://rnfirebase.io/docs/v5.x.x/crashlytics/ios

After that, uncomment the lines associated with the crashlytics in the file app/components/ErrorBoundary/ErrorBoundary.js

index.js.dist in app/config is example of index.js where you can put some properties (i.e. server/api url).

## For starting the project

android
```shell
yarn run android
```

ios
```shell
yarn run ios
```

For release building on Android use
```shell
yarn run build-release-android
```

For Clean Project in Android run

```shell
yarn run gradle-clean
```

## Tests

Standard is for code style testing
```shell
yarn run standard-test
```
Jest is for unit testing
```shell
yarn test
```
## Style guide

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
