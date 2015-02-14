# easicalc
iOS app to calculate EASI scores

[![Build Status](https://travis-ci.org/brownl/easicalc.svg?branch=master)](https://travis-ci.org/brownl/easicalc)

### Building (requires Mac OS X with homebrew and xcode installed)
```sh
# install npm, imagemagick
brew install npm
brew install imagemagick

# install cordova, cordova-splash
npm install cordova -g
npm install cordova-splash -g

# build for iOS simulator
cordova platform add ios
cordova build

# run inside simulator (optional)
cordova emulate
```
#### Building for an iOS device
  * Open `platforms/ios/EASI Calc.xcodeproj` and use Xcode to build
