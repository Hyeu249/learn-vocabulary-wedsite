"use strict";
//Import
import { namE } from "../vocabularyJson/vocabulary.js";

//Declaration variable
let boxVocab = document.querySelector(".boxVocab");
let fakeTag = document.querySelector(".fakeTag");
let fakeTag2 = document.querySelector(".fakeTag2");
let fakeTag3 = document.querySelector(".fakeTag3");
let showCurrentlyVocab = document.querySelector(".currentlyRight");
let buttonVocabShow = document.querySelector(".buttonVocabShow");

let arrayImg = [];
let arrayImg2 = [];
// display Sử dụng Y / Chỉ làm việc với 1 function duy nhất
let y = 0;
// Function addHourglass Sử dụng / Chỉ làm việc với 1 function duy nhất
let y2 = 0;
let y3 = 0;
let margin = 0;

// Hàm có chức năng FilterData
function filterData() {
  let data = document.querySelector(".dataVoca");

  let filter_1 = data.textContent;

  let filter_2 = filter_1.replace(/"/g, "");
  let filter_3 = filter_2.replace(/,/g, "");
  let filter_4 = filter_3.replace("{", "");
  let filter_5 = filter_4.replace("}", "");
  let filterDone = filter_5.split("\n");
  let filterDone1 = filterDone.pop();
  let filterDone2 = filterDone.shift();
  let filterDone3 = filterDone.shift();
  let object = {};

  // for (let i = 0; i < filterDone.length; i++) {

  //     let number = filterDone[i].indexOf(" (");
  //     let nameDone = filterDone[i].slice(2, number);
  //     object[nameDone] = filterDone[i]

  // }
  // return object

  for (let i = 0; i < namE.length; i++) {
    let number = namE[i].indexOf(" (");
    let nameDone = namE[i].slice(0, number);
    object[nameDone] = namE[i];
  }
  return object;
}

let vocabulary = filterData();

// Đưa dataVocab vào local storage, và lấy ra

localStorage.setItem("vocabulary", JSON.stringify(vocabulary));

let vocabOut = localStorage.getItem("vocabulary");
let storeVocabOut = JSON.parse(vocabOut);
let vocabArray = Object.values(storeVocabOut);
// Các lệnh send vocabulary

let form = document.querySelector("#typeVocab");

form.addEventListener("keyup", (e) => {
  const formValueTrim = form.value.trim();
  if (e.keyCode == 13) {
    if (storeVocabOut[formValueTrim] == undefined) {
      // Khắc phục dấu cách
      if (formValueTrim == "") {
        formValueTrim = " ";
      }
      // Gửi từ vựng Sai đi
      wrongWordFunction(formValueTrim);
      // Tắt hiển thị từ vựng đúng ở đầu bảng
      let showCurrentlyVocab = document.querySelector(".currentlyRight");
      // showCurrentlyVocab.innerHTML = "";
      showCurrentlyVocab.classList.add("red");
      showCurrentlyVocab.textContent = formValueTrim;
      form.value = "";
    } else if (storeVocabOut[formValueTrim].includes(formValueTrim)) {
      // gửi từ vựng Đúng đi
      let currentVocabRight = storeVocabOut[formValueTrim];

      // Function for API 1
      async function callAudio(i) {
        if (i > 30) {
          console.log("overstack warning!");
          return;
        }
        const api =
          "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron";
        const paramVoca = formValueTrim + "__gb";
        const one = paramVoca[0];
        const three = paramVoca.slice(0, 3);
        const five = paramVoca.slice(0, 5);

        await new Audio(
          // `http://localhost:3000/sound/${formValueTrim}__gb_${i}.mp3`
          `${api}/${one}/${three}/${five}/${formValueTrim}__gb_${i}.mp3`
        )
          .play()
          .then(() => console.log("sounding"))
          .catch(() => {
            new Audio(
              `${api}/x/x${three.slice(0, 2)}/x${five.slice(
                0,
                4
              )}/x${formValueTrim}__gb_${i}.mp3`
            )
              .play()
              .then(() => console.log("sounding have x"))
              .catch(() => callAudio(++i));
          });
      }
      callAudio(1);

      // Function for API 2:
      // const API = "https://www.collinsdictionary.com/sounds/hwd_sounds/en_us_";
      // new Audio(`${API}${formValueTrim}.mp3`)
      //   .play()
      //   .then(() => console.log("sound"))
      //   .catch(() => console.log("Err Audio"));

      rightWord(currentVocabRight);

      // Hiển thị từ vựng đúng hiện tại
      showCurrentlyVocab.classList.remove("red");

      let RighWords = localStorage.getItem("RighWords");
      RighWords = JSON.parse(RighWords);

      let indexShowVocab = RighWords[currentVocabRight].index;

      let showCurrentVOcab =
        currentVocabRight.charAt(0).toUpperCase() + currentVocabRight.slice(1);

      let answer = showCurrentVOcab.includes(".");
      let locationPThree;
      if (!answer) {
        showCurrentVOcab = findParenthesis3(showCurrentVOcab);
      } else {
        showCurrentVOcab = subtractP5(showCurrentVOcab);
      }

      showCurrentlyVocab.innerHTML = `${showCurrentVOcab}`;

      // Đặt giá trị input về 0
      form.value = "";
    }
  }
});
// Lưu data từ thẻ input vào local storage

function rightWord(right) {
  let RighWords = localStorage.getItem("RighWords");
  RighWords = JSON.parse(RighWords);
  if (RighWords != null) {
    if (RighWords[right] == undefined) {
      disPlayCurrently(10, right);
      let childTextVocab = document.querySelectorAll(".child-textVocab");
      RighWords = {
        ...RighWords,
        [right]: {
          name: right,
          wordR: 1,
          wordW: 0,
          index: childTextVocab.length,
        },
      };
    }
  } else if (right) {
    RighWords = {
      [right]: {
        name: right,
        wordR: 1,
        wordW: 0,
        index: 1,
      },
    };
    disPlayCurrently(10, right);
  }

  localStorage.setItem("RighWords", JSON.stringify(RighWords));

  cartVocab();
}
// rightWord
function wrongWordFunction(wrong) {
  let WrongWords = localStorage.getItem("WrongWords");
  WrongWords = JSON.parse(WrongWords);

  if (WrongWords != null) {
    if (WrongWords[wrong] == undefined) {
      WrongWords = {
        ...WrongWords,
        [wrong]: {
          wrong: wrong,
          wordW: 1,
          wordR: 0,
        },
      };
      disPlayCurrently(5, wrong);
    }
  } else {
    WrongWords = {
      [wrong]: {
        wrong: wrong,
        wordW: 1,
        wordR: 0,
      },
    };
    disPlayCurrently(5, wrong);
  }

  localStorage.setItem("WrongWords", JSON.stringify(WrongWords));

  VocabWrong();
}

// Display Vocabulary

function displayVocab() {
  let iconResultVocab = document.querySelector(".iconResult-vocab");
  iconResultVocab.innerHTML = "";
  let sendVocab = document.querySelector(".textVocab");
  let RighWords = localStorage.getItem("RighWords");
  RighWords = JSON.parse(RighWords);
  if (RighWords) {
    var allItem = Object.values(RighWords);
  }

  sendVocab.innerHTML = "";
  let myScores = 0;

  if (RighWords) {
    let forLength = allItem.length;

    for (let i = 0; i < forLength; i++) {
      if (allItem[i].name && myScores >= 0) {
        sendVocab.innerHTML += `    
                <div class="child-textVocab"><span class="black_C">${
                  y++ + 1
                }</span>. ${
          allItem[i].name.charAt(0).toUpperCase() + allItem[i].name.slice(1)
        }</div>
                 `;
        myScores++;
      }
      if (allItem[i].wrong) {
        sendVocab.innerHTML += `    
                <div class="text-2-Vocab">${allItem[i].wrong}</div>
                `;
      }
    }
    // show vocab hiện tại
    let theLastVocab = allItem[allItem.length - 1].name;

    let answer = theLastVocab.includes(".");
    let locationPThree;
    if (!answer) {
      theLastVocab = findParenthesis3(theLastVocab);
    } else {
      theLastVocab = subtractP5(theLastVocab);
    }
    showCurrentlyVocab.innerHTML = `${theLastVocab}`;
  }

  // chỉnh màu thanh đồng hồ cát bằng giá trị vocab hiện tại
  let childTextVocab = document.querySelectorAll(".child-textVocab");
  let timeCountHourglass = document.querySelector(".timeCountHourglass");

  timeCountHourglass.classList.add("orange");
  let numVocab = vocabArray.length;

  timeCountHourglass.style.width = `${
    (550 / numVocab) * childTextVocab.length
  }px`;
}

displayVocab();

// Button show vocab
buttonVocabShow.addEventListener("click", () => {
  boxVocab.classList.toggle("none");
});
// disPlayVocab trước khi tải lại

function disPlayCurrently(boolean, valueVocab) {
  let sendVocab = document.querySelector(".textVocab");
  let childTextVocab = document.querySelectorAll(".child-textVocab");
  let text2Vocab = document.querySelectorAll(".text-2-Vocab");

  var index = childTextVocab.length + 1;

  if (valueVocab) {
    if (boolean == 10) {
      sendVocab.innerHTML += `    
                    <div class="child-textVocab"><span class="black_C">${index}</span>. ${
        valueVocab.charAt(0).toUpperCase() + valueVocab.slice(1)
      }</div>
                    `;
      fakeTag.click();
      addHourglass();
    }
    // Từ vựng sai
    if (boolean == 5) {
      sendVocab.innerHTML += `    
                    <div class="text-2-Vocab">${valueVocab}</div>
                    `;
    }
  }

  sendVocab.scrollBy(0, 2e4);
}
// Nơi thể hiện số từ vựng đúng
function cartVocab() {
  let storageNumberRight = localStorage.getItem("RighWords");
  let resultNumberRight = JSON.parse(storageNumberRight);
  if (resultNumberRight) {
    let numVocabRight = Object.values(resultNumberRight);
    let cartNumbers = document.querySelector(".cartVocab");
    if (numVocabRight.reduce((a, b) => a + b.wordR, 0) > 0) {
      cartNumbers.classList.add("cartVocab-color");
    }

    cartNumbers.textContent = numVocabRight.reduce((a, b) => a + b.wordR, 0);
  } else {
    let cartNumbers = document.querySelector(".cartVocab");
    cartNumbers.classList.remove("cartVocab-color");
    cartNumbers.textContent = 0;
  }
}
cartVocab();

// Tổng từ vựng cần học
let cartVocabNum = document.querySelector(".cartVocabNum");

cartVocabNum.textContent = Object.values(vocabulary).filter(
  (vocab) => !vocab.includes("_____")
).length;

// Nơi thể hiện số từ vựng sai
function VocabWrong() {
  let storageNumberWrong = localStorage.getItem("WrongWords");
  let resultNumberWrong = JSON.parse(storageNumberWrong);
  if (resultNumberWrong) {
    var numVocabWrong = Object.values(resultNumberWrong);
    var cartNumberWrong = document.querySelector(".cartVocab-wrong");
    if (numVocabWrong.reduce((a, b) => a + b.wordW, 0) > 0) {
      cartNumberWrong.classList.add("VocabWrong-Color");
    }
  }

  if (numVocabWrong) {
    cartNumberWrong.textContent = numVocabWrong.reduce(
      (a, b) => a + b.wordW,
      0
    );
  }
}
VocabWrong();

// Delete Toàn Bộ
let clearVocab = document.querySelector(".clearVocab");

clearVocab.addEventListener("click", () => {
  localStorage.removeItem("vocabulary");
  localStorage.removeItem("RighWords");
  localStorage.removeItem("WrongWords");
});

// Show tất cả từ vựng

let clickAllVucab = document.querySelector(".cliclAllVucab");
function listVocab() {
  let allVocab = document.querySelector(".alLVocab");
  let data = document.querySelector(".dataVoca");
  let filter_1 = data.textContent;

  let filter_2 = filter_1.replace(/'/g, "");
  let filter_3 = filter_2.replace(/,/g, "");
  let filter_4 = filter_3.replace("{", "");
  let filter_5 = filter_4.replace("}", "");
  let filterDone = filter_5.split("\n");
  let filterDone1 = filterDone.pop();
  let filterDone2 = filterDone.shift();
  let filterDone3 = filterDone.shift();

  // let VocaLength = filterDone.length
  // for (let i = 0; i < VocaLength; i++) {
  //     allVocab.innerHTML += `
  //     <div class="allVocab-child">${i + 1}.${filterDone[i]}</div>
  //     `;
  // };

  let VocaLength = filterDone.length;
  let notAVocabLength = 0;
  for (let i = 0; i < namE.length; i++) {
    const y = notAVocabLength;
    if (namE[i].includes("_____") || namE[i] === "") {
      allVocab.innerHTML += `
            <div class="allVocab-child">${namE[i] || "<br/>"}</div>
            `;
      notAVocabLength++;
    } else {
      allVocab.innerHTML += `
            <div class="allVocab-child">${i + 1 - y}.${namE[i]}</div>
            `;
    }
  }

  allVocab.addEventListener("scroll", () => {
    let scrolled = allVocab.scrollTop;
  });
}
listVocab();

let titleListVocab = document.querySelector(".title_listVocab");
let titleListVocabSpan = document.querySelector(".title_listVocab span");

titleListVocabSpan.addEventListener("click", (e) => {
  e.stopPropagation();
  let alLVocab = document.querySelector(".alLVocab");
  alLVocab.scrollBy(0, 3000);
});
titleListVocab.addEventListener("click", () => {
  let alLVocab = document.querySelector(".alLVocab");
  alLVocab.scrollBy(0, -3000);
});

clickAllVucab.addEventListener("click", () => {
  let listVocab = document.querySelector(".listVocab");
  clickAllVucab.classList.toggle("boxShadow_none");
  listVocab.classList.toggle("none");
  buttonVocabShow.classList.toggle("boxShadow");
  boxVocab.classList.add("none");
  let alLVocab = document.querySelector(".alLVocab");
  alLVocab.scrollTo(0, 0);
});

// Bắt đầu đếm giờ luyện từ vựng
let clickHourglass = document.querySelector(".clickHourglass");
let childStartHourglass = document.querySelector(".childStartHourglass");
let hourglass = document.querySelector(".hourglass");

function countVocab(num, YLS, RS, TIME) {
  let iconResultVocab = document.querySelector(".iconResult-vocab");
  let numIconResultVocab = document.querySelector(".numIconResultVocab");
  let childTextVocab = document.querySelectorAll(".child-textVocab");
  let textVocab = document.querySelector(".textVocab");
  setTimeout(() => {
    childStartHourglass.classList.remove("none");
  }, 60);

  childStartHourglass.classList.remove("orange");
  childStartHourglass.classList.remove("red");

  let TIMEAfter = parseInt(TIME);

  // num = 1;
  if (num > 0) {
    // Khai báo function cho eventClick
    function fakeTagClick() {
      childStartHourglass.classList.add("none");
      clearTimeout(setTime1);
      clearTimeout(setTimme1_5);
      clearTimeout(setTime2);
      clearTimeout(setTimme2_5);
      clearTimeout(setTime3);
      countVocab(1, YLS, RS, TIME);
      fakeTag.removeEventListener("click", fakeTagClick);
    }
    // Phần của Set time out
    let setTime1 = setTimeout(function () {
      let currentlyRight = document.querySelector(".currentlyRight");
      let y = 0;
      let YelCountStart = parseInt(YLS);
      let forLength2 = childTextVocab.length;
      iconResultVocab.innerHTML = "";
      numIconResultVocab.innerHTML = "";

      for (let i = forLength2 - 1; i >= 0; i--) {
        if (childTextVocab.length > 0 && y < YelCountStart) {
          textVocab.removeChild(childTextVocab[i]);
          currentlyRight.classList.remove("red");
          // if (childTextVocab[i - 1] === undefined) { showCurrentlyVocab.textContent = "" } else if (childTextVocab[i - 1] !== undefined) { showCurrentlyVocab.textContent = childTextVocab[i - 1].textContent };
        }
        y++;
      }

      childStartHourglass.classList.add("orange");
    }, TIMEAfter + 60);

    let setTimme1_5 = setTimeout(function () {
      let storageNumberAll = localStorage.getItem("RighWords");
      let storageNumber = JSON.parse(storageNumberAll);
      if (storageNumber) {
        var numVocabAll = Object.values(storageNumber);
      } else {
        numVocabAll = 0;
      }
      let forLength = numVocabAll.length;
      let YelCountStart = parseInt(YLS);
      let y = 0;

      for (let i = forLength - 1; i >= 0; i--) {
        if (y < YelCountStart) {
          delete storageNumber[numVocabAll[i].name];
          // show từ vựng hiện tại
          let currentVocab = "";
          if (numVocabAll.length !== YelCountStart)
            currentVocab = numVocabAll[i - 1].name;

          let answer = currentVocab.includes(".");
          let locationPThree;
          if (!answer) {
            currentVocab = findParenthesis3(currentVocab);
          } else {
            currentVocab = subtractP5(currentVocab);
          }
          if (numVocabAll[i - 1] === undefined) {
            showCurrentlyVocab.textContent = "";
          } else if (numVocabAll[i - 1] !== undefined) {
            showCurrentlyVocab.innerHTML = `${currentVocab}`;
          }
        }
        y++;
      }

      localStorage.setItem("RighWords", JSON.stringify(storageNumber));
      if (numVocabAll.length <= YelCountStart)
        localStorage.removeItem("RighWords");
      cartVocab();
    }, TIMEAfter + 60);
    let setTime2 = setTimeout(function () {
      let childTextVocab = document.querySelectorAll(".child-textVocab");
      let textVocab = document.querySelector(".textVocab");
      let currentlyRight = document.querySelector(".currentlyRight");
      let y = 0;
      let RedCountStart = parseInt(RS);
      let forLength2 = childTextVocab.length;
      iconResultVocab.innerHTML = "";
      numIconResultVocab.innerHTML = "";

      for (let i = forLength2 - 1; i >= 0; i--) {
        if (childTextVocab.length > 0 && y < RedCountStart) {
          textVocab.removeChild(childTextVocab[i]);
          currentlyRight.classList.remove("red");
          // if (childTextVocab[i - 1] === undefined) { showCurrentlyVocab.textContent = "" } else if (childTextVocab[i - 1] !== undefined) { showCurrentlyVocab.textContent = childTextVocab[i - 1].textContent }
        }
        y++;
      }

      childStartHourglass.classList.add("red");
    }, TIMEAfter * 2 + 60);

    let setTimme2_5 = setTimeout(function () {
      let storageNumberAll = localStorage.getItem("RighWords");
      let storageNumber = JSON.parse(storageNumberAll);
      if (storageNumber) {
        var numVocabAll = Object.values(storageNumber);
      } else {
        numVocabAll = 0;
      }
      let forLength = numVocabAll.length;
      let RedCountStart = parseInt(RS);
      let y = 0;

      for (let i = forLength - 1; i >= 0; i--) {
        if (y < RedCountStart) {
          delete storageNumber[numVocabAll[i].name];
          // show từ vựng hiện tại
          let currentVocab = "";
          if (numVocabAll.length !== RedCountStart)
            currentVocab = numVocabAll[i - 1].name;

          let answer = currentVocab.includes(".");
          let locationPThree;
          if (!answer) {
            currentVocab = findParenthesis3(currentVocab);
          } else {
            currentVocab = subtractP5(currentVocab);
          }
          if (numVocabAll[i - 1] === undefined) {
            showCurrentlyVocab.textContent = "";
          } else if (numVocabAll[i - 1] !== undefined) {
            showCurrentlyVocab.innerHTML = `${currentVocab}`;
          }
        }
        y++;
      }

      if (numVocabAll.length <= RedCountStart) {
        localStorage.removeItem("RighWords");
      } else {
        localStorage.setItem("RighWords", JSON.stringify(storageNumber));
      }
      cartVocab();
    }, TIMEAfter * 2 + 60);

    let setTime3 = setTimeout(function () {
      location.reload();
    }, TIMEAfter * 3 + 60);
    fakeTag.addEventListener("click", fakeTagClick);
  }
}

// Chỉnh tốc độ Coutdown

let modeLowerCount = document.querySelector(".modeLowerCount");
let modeLowCount = document.querySelector(".modeLowCount");
let modeHighCount = document.querySelector(".modeHighCount");

function modeLowerActEvent() {
  childStartHourglass.classList.add("modeLowerAct");
  modeLowerCount.classList.add("boxShadow_none");
  startTest();
  modeLowerCount.removeEventListener("click", modeLowerActEvent);
  modeLowCount.removeEventListener("click", modeLowActvent);
  modeHighCount.removeEventListener("click", modeHighActEvent);
}
modeLowerCount.addEventListener("click", modeLowerActEvent);

function modeLowActvent() {
  childStartHourglass.classList.add("modeLowAct");
  modeLowCount.classList.add("boxShadow_none");
  startTest();
  modeLowerCount.removeEventListener("click", modeLowerActEvent);
  modeLowCount.removeEventListener("click", modeLowActvent);
  modeHighCount.removeEventListener("click", modeHighActEvent);
}
modeLowCount.addEventListener("click", modeLowActvent);

function modeHighActEvent() {
  childStartHourglass.classList.add("modeHighAct");
  modeHighCount.classList.add("boxShadow_none");
  startTest();
  modeLowerCount.removeEventListener("click", modeLowerActEvent);
  modeLowCount.removeEventListener("click", modeLowActvent);
  modeHighCount.removeEventListener("click", modeHighActEvent);
}
modeHighCount.addEventListener("click", modeHighActEvent);
// Nút start bắt đầu đếm giờ điền từ vựng
let yellowCountStart = document.querySelector(".yellowCount");
let redCountStart = document.querySelector(".redCount");
let modeLowerAct = document.querySelector(".modeLowerAct");

yellowCountStart.addEventListener("keyup", () => {});
redCountStart.addEventListener("keyup", () => {});

function startTest() {
  function startTestEvent() {
    clickHourglass.classList.add("boxShadow_none");
    let timeCountHourglass = document.querySelector(".timeCountHourglass");
    timeCountHourglass.classList.add("none");

    if (yellowCountStart.value == "") {
      yellowCountStart.value = 0;
    }
    if (redCountStart.value == "") {
      redCountStart.value = 0;
    }

    if (document.querySelector(".modeLowerAct")) {
      countVocab(1, yellowCountStart.value, redCountStart.value, 5000);
    }
    if (document.querySelector(".modeLowAct")) {
      countVocab(1, yellowCountStart.value, redCountStart.value, 4000);
    }
    if (document.querySelector(".modeHighAct")) {
      countVocab(1, yellowCountStart.value, redCountStart.value, 3000);
    }

    clickHourglass.removeEventListener("click", startTestEvent);
  }
  clickHourglass.addEventListener("click", startTestEvent);
}

// Tăng dần màu cam khi hoàn thành 1 từ vựng đúng

function addHourglass() {
  let timeCountHourglass = document.querySelector(".timeCountHourglass");
  let childTextVocab = document.querySelectorAll(".child-textVocab");

  timeCountHourglass.classList.add("orange");
  let numVocab = vocabArray.length;

  timeCountHourglass.style.width = `${
    (550 / numVocab) * childTextVocab.length
  }px`;
}

// Tìm dấu ngoặc đơn thứ 3
function findParenthesis3(showCurrentVOcab) {
  let locationPThree = showCurrentVOcab.indexOf(
    "(",
    showCurrentVOcab.indexOf("(") + 1
  );

  if (locationPThree === -1) {
    return showCurrentVOcab;
  } else {
    showCurrentVOcab = showCurrentVOcab.slice(0, locationPThree);
  }
  return showCurrentVOcab;
}
// function subtractP5(showCurrentVOcab){
//     let locationPThree;
//     let firstPiece;
//     let secondPiece;

//     if(showCurrentVOcab.includes(").")){
//         firstPiece = showCurrentVOcab.slice(0, showCurrentVOcab.indexOf("<"));
//         secondPiece = showCurrentVOcab.slice(showCurrentVOcab.indexOf("<"));

//         // First piece
//         if(firstPiece.includes(")‚")){
//             locationPThree = firstPiece.lastIndexOf("(");
//             firstPiece = firstPiece.slice(0, locationPThree);
//         }

//         locationPThree = secondPiece.lastIndexOf("(");
//         secondPiece = secondPiece.slice(0, locationPThree);

//         showCurrentVOcab = firstPiece + secondPiece
//         console.log(firstPiece);
//         console.log(secondPiece);
//     }else{
//         showCurrentVOcab = showCurrentVOcab.lastIndexOf(".")
//     }
//     return showCurrentVOcab
// }

function subtractP5(showCurrentVOcab) {
  const pieces = showCurrentVOcab.split("<br>+ ");
  const piecesLength = pieces.length;

  let locationPThree;
  let vocab = "";
  for (let i = 0; i < piecesLength; i++) {
    let piece = pieces[i].trim();
    if (piece.includes(").")) {
      locationPThree = piece.lastIndexOf("(");
      piece = piece.slice(0, locationPThree);
    } else if (piece.includes(".")) {
      locationPThree = piece.lastIndexOf(".");
      piece = piece.slice(0, locationPThree);
    }
    vocab += piece + "<br>";
  }
  return vocab;
}
