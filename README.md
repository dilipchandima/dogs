
# Dogs

  

A react-native mobile application for view Dog Breeds, Sub Breeds and the Images according to Breeds using https://dog.ceo/dog-api/ as the back-end with the following functionalities

* The mobile application shows a list of dog breeds available and provide the ability to navigate into a dog breed.
* The above list should have a text box that allows me to search a breed.
* The dog breed page should display the name of breed and show available sub breeds along with a picture of the dog breed.
* This page should contain a button that allows to change the picture of the dog randomly.
## Demo

### Test Application On your Own Smart Phone

  You can test the application with using Expo Platform. For doing that go through the following  steps
  * Download the Expo Application and Install it on Your Phone
	  *  For Android - https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www
	  * For iOS - https://itunes.apple.com/app/apple-store/id982107779
*	Go to the following link and scan the QR code using Expo and Enjoy !!!
	*	https://exp.host/@dilipchandima/dogs

 ### Screen Shots on Android Mobile ( SAMSUNG S8 - Android Oreo )
 
<img style="border-radius:5px" src="http://eigendemo.info/images/splash.jpg" width="180px"><br> Splash Screen| <img style="border-radius:5px" src="http://eigendemo.info/images/list.jpg" width="180px"><br> Breeds List Screen| <img style="border-radius:5px" src="http://eigendemo.info/images/search.jpg" width="180px"><br> Search Breeds| <img style="border-radius:5px" src="http://eigendemo.info/images/subs.jpg" width="180px"><br> Sub Breeds Screen| <img style="border-radius:5px" src="http://eigendemo.info/images/noSub.jpg" width="180px"><br> Sub Breeds Screen| 
------------ | ------------- | ------------ | -------------| -------------
## Development 

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).


Below you'll find information about performing common tasks. The most recent version of this guide is available [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).

  

## Table of Contents

  

*  [Updating to New Releases](#updating-to-new-releases)

*  [Available Scripts](#available-scripts)

	 *  [npm start](#npm-start)

	*  [npm test](#npm-test)

	*  [npm run ios](#npm-run-ios)

	*  [npm run android](#npm-run-android)

	*  [npm run eject](#npm-run-eject)

*  [Sharing and Deployment](#sharing-and-deployment)

*  [Publishing to Expo's React Native Community](#publishing-to-expos-react-native-community)

*  [Building an Expo "standalone" app](#building-an-expo-standalone-app)

*  [iOS Simulator won't open](#ios-simulator-wont-open)

*  [QR Code does not scan](#qr-code-does-not-scan)

  

## Updating to New Releases

  

You should only need to update the global installation of `create-react-native-app` very rarely, ideally never.

  

Updating the `react-native-scripts` dependency of your app should be as simple as bumping the version number in `package.json` and reinstalling your project's dependencies.

  

Upgrading to a new version of React Native requires updating the `react-native`, `react`, and `expo` package versions, and setting the correct `sdkVersion` in `app.json`. See the [versioning guide](https://github.com/react-community/create-react-native-app/blob/master/VERSIONS.md) for up-to-date information about package version compatibility.

  

## Available Scripts

  

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

  

### `npm start`

  

Runs your app in development mode.

  

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

  

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

  

```

npm start --reset-cache

# or

yarn start --reset-cache

```

  

### `npm test`

  

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

  

### `npm run ios`

  

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

  

### `npm run android`

  

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:

  

#### Using Android Studio's `adb`

  

1. Make sure that you can run adb from your terminal.

2. Open Genymotion and navigate to `Settings -> ADB`. Select “Use custom Android SDK tools” and update with your [Android SDK directory](https://stackoverflow.com/questions/25176594/android-sdk-location).

  

#### Using Genymotion's `adb`

  

1. Find Genymotion’s copy of adb. On macOS for example, this is normally `/Applications/Genymotion.app/Contents/MacOS/tools/`.

2. Add the Genymotion tools directory to your path (instructions for [Mac](http://osxdaily.com/2014/08/14/add-new-path-to-path-command-line/), [Linux](http://www.computerhope.com/issues/ch001647.htm), and [Windows](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/)).

3. Make sure that you can run adb from your terminal.

  

#### `npm run eject`

  

This will start the process of "ejecting" from Create React Native App's build scripts. You'll be asked a couple of questions about how you'd like to build your project.

  

**Warning:** Running eject is a permanent action (aside from whatever version control system you use). An ejected app will require you to have an [Xcode and/or Android Studio environment](https://facebook.github.io/react-native/docs/getting-started.html) set up.

  

## Sharing and Deployment

  

Create React Native App does a lot of work to make app setup and development simple and straightforward, but it's very difficult to do the same for deploying to Apple's App Store or Google's Play Store without relying on a hosted service.

  

### Publishing to Expo's React Native Community

  

Expo provides free hosting for the JS-only apps created by CRNA, allowing you to share your app through the Expo client app. This requires registration for an Expo account.

  

Install the `exp` command-line tool, and run the publish command:

  

```bash

$ npm i -g exp

$ exp publish

```

  

### Building an Expo "standalone" app

  

You can also use a service like [Expo's standalone builds](https://docs.expo.io/versions/latest/guides/building-standalone-apps.html) if you want to get an IPA/APK for distribution without having to build the native code yourself.

  

## Troubleshooting

### iOS Simulator won't open

  

If you're on a Mac, there are a few errors that users sometimes see when attempting to `npm run ios`:

  

* "non-zero exit code: 107"

* "You may need to install Xcode" but it is already installed

* and others

  

There are a few steps you may want to take to troubleshoot these kinds of errors:

  

1. Make sure Xcode is installed and open it to accept the license agreement if it prompts you. You can install it from the Mac App Store.

2. Open Xcode's Preferences, the Locations tab, and make sure that the `Command Line Tools` menu option is set to something. Sometimes when the CLI tools are first installed by Homebrew this option is left blank, which can prevent Apple utilities from finding the simulator. Make sure to re-run `npm/yarn run ios` after doing so.

3. If that doesn't work, open the Simulator, and under the app menu select `Reset Contents and Settings...`. After that has finished, quit the Simulator, and re-run `npm/yarn run ios`.

  

### QR Code does not scan

  

If you're not able to scan the QR code, make sure your phone's camera is focusing correctly, and also make sure that the contrast on the two colors in your terminal is high enough. For example, WebStorm's default themes may [not have enough contrast](https://github.com/react-community/create-react-native-app/issues/49) for terminal QR codes to be scannable with the system barcode scanners that the Expo app uses.

  

If this causes problems for you, you may want to try changing your terminal's color theme to have more contrast, or running Create React Native App from a different terminal. You can also manually enter the URL printed by the packager script in the Expo app's search bar to load it manually.