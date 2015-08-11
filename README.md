# easicalc
iOS app to calculate EASI scores

[![Build Status](https://travis-ci.org/brownl/easicalc.svg?branch=master)](https://travis-ci.org/brownl/easicalc)

### Building for Android (requires android SDK)
```sh
# I've only tested this on Mac OS X, but it should work on GNU/Linux as well. Just replace 'brew' with 'apt-get', 'yum', etc...
# In theory, you could make it build on Windows but you should probably just upgrade to a better OS.

# set environment variables
export ANDROID_HOME=/path/to/android/sdk

# install npm, imagemagick
brew install npm
brew install imagemagick

# install cordova, cordova-splash, cordova-icon
sudo npm install cordova -g
sudo npm install cordova-splash -g
sudo npm install cordova-icon -g

# use the rounded icon for android
cp icon-round.png icon.png

# build for an android device
cordova platform add android
cordova build android --release
```

### Building for iOS (requires Mac OS X with homebrew and xcode installed)
```sh
# install npm, imagemagick
brew install npm
brew install imagemagick

# install cordova, cordova-splash, cordova-icon
sudo npm install cordova -g
sudo npm install cordova-splash -g
sudo npm install cordova-icon -g

# use the square icon for iOS
cp icon-square.png icon.png

# build for iOS simulator
cordova platform add ios
cordova build ios

# run inside simulator (optional)
cordova emulate
```
#### Building for an iOS device
  * Open `platforms/ios/EASI Calc.xcodeproj` and use Xcode to build
