/*

    Copyright (C) 2015 Lawrence Brown

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along
    with this program; if not, write to the Free Software Foundation, Inc.,
    51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

*/

// I'm already ashamed of this file
// please don't read it

document.addEventListener('deviceready', function () {
  if (navigator.notification) { // Override default HTML alert with native dialog
      window.alert = function (message) {
          navigator.notification.alert(
              message,    // message
              null,       // callback
              "Result",   // title
              'OK'        // buttonName
          );
      };
  }
  FastClick.attach(document.body);
  console.log("initalized app");
}, false);

// variables
var oneOneElement = document.getElementById("oneOne");
var oneTwoElement = document.getElementById("oneTwo");
var oneThreeElement = document.getElementById("oneThree");
var oneFourElement = document.getElementById("oneFour");
var oneAreaElement = document.getElementById("oneArea");
var twoOneElement = document.getElementById("twoOne");
var twoTwoElement = document.getElementById("twoTwo");
var twoThreeElement = document.getElementById("twoThree");
var twoFourElement = document.getElementById("twoFour");
var twoAreaElement = document.getElementById("twoArea");
var threeOneElement = document.getElementById("threeOne");
var threeTwoElement = document.getElementById("threeTwo");
var threeThreeElement = document.getElementById("threeThree");
var threeFourElement = document.getElementById("threeFour");
var threeAreaElement = document.getElementById("threeArea");
var fourOneElement = document.getElementById("fourOne");
var fourTwoElement = document.getElementById("fourTwo");
var fourThreeElement = document.getElementById("fourThree");
var fourFourElement = document.getElementById("fourFour");
var fourAreaElement = document.getElementById("fourArea");
var patientIsChild = false;
var oneOne;
var oneTwo;
var oneThree;
var oneFour;
var oneArea;
var twoOne;
var twoTwo;
var twoThree;
var twoFour;
var twoArea;
var threeOne;
var threeTwo;
var threeThree;
var threeFour;
var threeArea;
var fourOne;
var fourTwo;
var fourThree;
var fourFour;
var fourArea;
var a1;
var a2;
var a3;
var a4;
var b1;
var b2;
var b3;
var b4;
var aScore1;
var aScore2;
var aScore3;
var aScore4;
var c1;
var c2;
var c3;
var c4;
var inputCurrentlyGood = true;
var easi;

// functions
function calculate() {
  checkInput();
  if (inputCurrentlyGood == true) {
    // calculate 'a*'
    a1 = parseFloat(oneOne) + parseFloat(oneTwo) + parseFloat(oneThree) + parseFloat(oneFour);
    a2 = parseFloat(twoOne) + parseFloat(twoTwo) + parseFloat(oneThree) + parseFloat(oneFour);
    a3 = parseFloat(threeOne) + parseFloat(threeTwo) + parseFloat(threeThree) + parseFloat(threeFour);
    a4 = parseFloat(fourOne) + parseFloat(fourTwo) + parseFloat(fourThree) + parseFloat(fourFour);
    // calculate 'b*'
    if (patientIsChild == true)
    {b1 = parseFloat(a1) * 0.2;}
    else {b1 = parseFloat(a2) * 0.1;};
    b2 = parseFloat(a2) * 0.2;
    b3 = parseFloat(a3) * 0.3;
    if (patientIsChild == true)
    {b4 = parseFloat(a4) * 0.3;}
    else {b4 = parseFloat(a4) * 0.4;};
    // calculate area scores for each region
    if (parseFloat(oneArea) == 0) {aScore1 = 0}
      else if (oneArea >= 1 && oneArea <= 9) {aScore1 = 1;}
      else if (oneArea >= 10 && oneArea <= 29) {aScore1 = 2;}
      else if (oneArea >= 30 && oneArea <= 49) {aScore1 = 3;}
      else if (oneArea >= 50 && oneArea <= 69) {aScore1 = 4;}
      else if (oneArea >= 70 && oneArea <= 89) {aScore1 = 5;}
      else if (oneArea >= 90 && oneArea <= 100) {aScore1 = 6;};
    if (parseFloat(twoArea) == 0) {aScore2 = 0}
      else if (twoArea >= 1 && twoArea <= 9) {aScore2 = 1;}
      else if (twoArea >= 10 && twoArea <= 29) {aScore2 = 2;}
      else if (twoArea >= 30 && twoArea <= 49) {aScore2 = 3;}
      else if (twoArea >= 50 && twoArea <= 69) {aScore2 = 4;}
      else if (twoArea >= 70 && twoArea <= 89) {aScore2 = 5;}
      else if (twoArea >= 90 && twoArea <= 100) {aScore2 = 6;};
    if (parseFloat(threeArea) == 0) {aScore3 = 0}
      else if (threeArea >= 1 && threeArea <= 9) {aScore3 = 1;}
      else if (threeArea >= 10 && threeArea <= 29) {aScore3 = 2;}
      else if (threeArea >= 30 && threeArea <= 49) {aScore3 = 3;}
      else if (threeArea >= 50 && threeArea <= 69) {aScore3 = 4;}
      else if (threeArea >= 70 && threeArea <= 89) {aScore3 = 5;}
      else if (threeArea >= 90 && threeArea <= 100) {aScore3 = 6;};
    if (parseFloat(fourArea) == 0) {aScore4 = 0}
      else if (fourArea >= 1 && fourArea <= 9) {aScore4 = 1;}
      else if (fourArea >= 10 && fourArea <= 29) {aScore4 = 2;}
      else if (fourArea >= 30 && fourArea <= 49) {aScore4 = 3;}
      else if (fourArea >= 50 && fourArea <= 69) {aScore4 = 4;}
      else if (fourArea >= 70 && fourArea <= 89) {aScore4 = 5;}
      else if (fourArea >= 90 && fourArea <= 100) {aScore4 = 6;};
    c1 = parseFloat(b1) * parseFloat(aScore1);
    c2 = parseFloat(b2) * parseFloat(aScore2);
    c3 = parseFloat(b3) * parseFloat(aScore3);
    c4 = parseFloat(b4) * parseFloat(aScore4);
    easi = +(parseFloat(c1) + parseFloat(c2) + parseFloat(c3) +
    parseFloat(c4)).toFixed(1);
    if (isNaN(easi) == true || allFieldsFilledIn() == false) {
      alert("Please fill in all the fields.");
    } else {
      // calculate band
      var band;
      switch (true) {
        case (easi === 0):
          band = "None (that was a waste of time!)";
          break;
        case (easi <= 1):
          band = "Almost clear (0.1 to 1.0)";
          break;
        case (easi <= 7):
          band = "Mild (1.1 to 7.0)";
          break;
        case (easi <= 21):
          band = "Moderate (7.1 to 21.0)";
          break;
        case (easi <= 50):
          band = "Severe (21.1 to 50.0)";
          break;
        case (easi <= 72):
          band = "Very severe (50.1 to 72.0)";
          break;
        case (easi > 72):
          band = "Error. (Please send an email to bugs@easicalc.uk letting us know what numbers you inputted. Thanks!)";
          break;
      }
      alert("EASI = " + easi + "\n" + band);
    }
  } else {
    alert("Please correct the fields marked in red.");
  }
}
function checkInput() {
  inputCurrentlyGood = true;
  getInput();
  if (oneOne > 3 || oneOne < 0 || oneOne % 0.5 != 0)
  {oneOneElement.classList.add("badInput"); inputCurrentlyGood = false;}
  else {oneOneElement.classList.remove("badInput");};
  if (oneTwo > 3 || oneTwo < 0 || oneTwo % 0.5 != 0)
  {oneTwoElement.classList.add("badInput"); inputCurrentlyGood = false;}
  else {oneTwoElement.classList.remove("badInput");};
  if (oneThree > 3 || oneThree < 0 || oneThree % 0.5 != 0)
  {oneThreeElement.classList.add("badInput"); inputCurrentlyGood = false;}
  else {oneThreeElement.classList.remove("badInput");};
  if (oneFour > 3 || oneFour < 0 || oneFour % 0.5 != 0)
  {oneFourElement.classList.add("badInput"); inputCurrentlyGood = false;}
  else {oneFourElement.classList.remove("badInput");};
  if (twoOne > 3 || twoOne < 0 || twoOne % 0.5 != 0)
  {twoOneElement.classList.add("badInput"); inputCurrentlyGood = false;}
  else {twoOneElement.classList.remove("badInput");};
  if (twoTwo > 3 || twoTwo < 0 || twoTwo % 0.5 != 0)
  {twoTwoElement.classList.add("badInput"); inputCurrentlyGood = false;}
  else {twoTwoElement.classList.remove("badInput");};
  if (twoThree > 3 || twoThree < 0 || twoThree % 0.5 != 0)
  {twoThreeElement.classList.add("badInput"); inputCurrentlyGood = false;}
  else {twoThreeElement.classList.remove("badInput");};
  if (twoFour > 3 || twoFour < 0 || twoFour % 0.5 != 0)
  {twoFourElement.classList.add("badInput"); inputCurrentlyGood = false;}
  else {twoFourElement.classList.remove("badInput");};
  if (threeOne > 3 || threeOne < 0 || threeOne % 0.5 != 0)
  {threeOneElement.classList.add("badInput"); inputCurrentlyGood = false;}
  else {threeOneElement.classList.remove("badInput");};
  if (threeTwo > 3 || threeTwo < 0 || threeTwo % 0.5 != 0)
  {threeTwoElement.classList.add("badInput"); inputCurrentlyGood = false;}
  else {threeTwoElement.classList.remove("badInput");};
  if (threeThree > 3 || threeThree < 0 || threeThree % 0.5 != 0)
  {threeThreeElement.classList.add("badInput"); inputCurrentlyGood = false;}
  else {threeThreeElement.classList.remove("badInput");};
  if (threeFour > 3 || threeFour < 0 || threeFour % 0.5 != 0)
  {threeFourElement.classList.add("badInput"); inputCurrentlyGood = false;}
  else {threeFourElement.classList.remove("badInput");};
  if (fourOne > 3 || fourOne < 0 || fourOne % 0.5 != 0)
  {fourOneElement.classList.add("badInput"); inputCurrentlyGood = false;}
  else {fourOneElement.classList.remove("badInput");};
  if (fourTwo > 3 || fourTwo < 0 || fourTwo % 0.5 != 0)
  {fourTwoElement.classList.add("badInput"); inputCurrentlyGood = false;}
  else {fourTwoElement.classList.remove("badInput");};
  if (fourThree > 3 || fourThree < 0 || fourThree % 0.5 != 0)
  {fourThreeElement.classList.add("badInput"); inputCurrentlyGood = false;}
  else {fourThreeElement.classList.remove("badInput");};
  if (fourFour > 3 || fourFour < 0 || fourFour % 0.5 != 0)
  {fourFourElement.classList.add("badInput"); inputCurrentlyGood = false;}
  else {fourFourElement.classList.remove("badInput");};
  if (oneArea > 100 || oneArea < 0 || oneArea % 1 != 0)
  {oneAreaElement.classList.add("badInput"); inputCurrentlyGood = false;}
  else {oneAreaElement.classList.remove("badInput");};
  if (twoArea > 100 || twoArea < 0 || twoArea % 1 != 0)
  {twoAreaElement.classList.add("badInput"); inputCurrentlyGood = false;}
  else {twoAreaElement.classList.remove("badInput");};
  if (threeArea > 100 || threeArea < 0 || threeArea % 1 != 0)
  {threeAreaElement.classList.add("badInput"); inputCurrentlyGood = false;}
  else {threeAreaElement.classList.remove("badInput");};
  if (fourArea > 100 || oneArea < 0 || fourArea % 1 != 0)
  {fourAreaElement.classList.add("badInput"); inputCurrentlyGood = false;}
  else {fourAreaElement.classList.remove("badInput");};
};
function allFieldsFilledIn() {
  var x = true;
  getInput();
  if (oneOne == "" || isNaN(oneOne) == true) {x = false};
  if (oneTwo == "" || isNaN(oneTwo) == true) {x = false};
  if (oneThree == "" || isNaN(oneThree) == true) {x = false};
  if (oneFour == "" || isNaN(oneFour) == true) {x = false};
  if (oneArea == "" || isNaN(oneArea) == true) {x = false};
  if (twoOne == "" || isNaN(twoOne) == true) {x = false};
  if (twoTwo == "" || isNaN(twoTwo) == true) {x = false};
  if (twoThree == "" || isNaN(twoThree) == true) {x = false};
  if (twoFour == "" || isNaN(twoFour) == true) {x = false};
  if (twoArea == "" || isNaN(twoArea) == true) {x = false};
  if (threeOne == "" || isNaN(threeOne) == true) {x = false};
  if (threeTwo == "" || isNaN(threeTwo) == true) {x = false};
  if (threeThree == "" || isNaN(threeThree) == true) {x = false};
  if (threeFour == "" || isNaN(threeFour) == true) {x = false};
  if (threeArea == "" || isNaN(threeArea) == true) {x = false};
  if (fourOne == "" || isNaN(fourOne) == true) {x = false};
  if (fourTwo == "" || isNaN(fourTwo) == true) {x = false};
  if (fourThree == "" || isNaN(fourThree) == true) {x = false};
  if (fourFour == "" || isNaN(fourFour) == true) {x = false};
  if (fourArea == "" || isNaN(fourArea) == true) {x = false};
  return x;
}
function getInput() {
  oneOne = document.regionOneForm.one.value;
  oneTwo = document.regionOneForm.two.value;
  oneThree = document.regionOneForm.three.value;
  oneFour = document.regionOneForm.four.value;
  oneArea = document.regionOneForm.area.value;
  twoOne = document.regionTwoForm.one.value;
  twoTwo = document.regionTwoForm.two.value;
  twoThree = document.regionTwoForm.three.value;
  twoFour = document.regionTwoForm.four.value;
  twoArea = document.regionTwoForm.area.value;
  threeOne = document.regionThreeForm.one.value;
  threeTwo = document.regionThreeForm.two.value;
  threeThree = document.regionThreeForm.three.value;
  threeFour = document.regionThreeForm.four.value;
  threeArea = document.regionThreeForm.area.value;
  fourOne = document.regionFourForm.one.value;
  fourTwo = document.regionFourForm.two.value;
  fourThree = document.regionFourForm.three.value;
  fourFour = document.regionFourForm.four.value;
  fourArea = document.regionFourForm.area.value;
};
function isNumberKey(evt) {
  var charCode = (evt.which) ? evt.which : event.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    // is not a number, don't allow it
    if (charCode == 46) {
      // is a '.', allow it
      return true;
    } else {
      return false;
    }
  } else {
    // is a number, allow it
    return true;
  }
}
function isIntegerKey(evt) {
  var charCode = (evt.which) ? evt.which : event.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    // is not a number, don't allow it
    return false;
  } else {
    // is a number, allow it
    return true;
  }
}
function clearInput() {
  document.regionOneForm.reset();
  document.regionTwoForm.reset();
  document.regionThreeForm.reset();
  document.regionFourForm.reset();
  checkInput();
}

document
.querySelector('#myToggle')
.addEventListener('toggle', function (e) {
  patientIsChild = e.detail.isActive;
});
function browser(url) {
  window.open(url, '_system');
};
