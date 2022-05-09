// import { Keys } from "./Keys";
console.log("Running");

document.querySelector("body").innerHTML =
  '<h3 class="text"> Переключение раскладки: ctrl+shift </h3> <div class="keyboard" id="keyboard"> </div>';
let temp = "",
  temp1 = "",
  temp2 = "",
  temp3 = "",
  temp4 = "",
  tempShift = "";
export const keys = [
  192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82,
  84, 89, 85, 73, 79, 80, 219, 221, 220, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76,
  186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 91,
  18, 32, 18, 17, 18, 37, 40, 39,
];
export const keys2 = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Backspace",
  "Tab",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "[",
  "]",
  "\\",
  "CapsLock",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  ";",
  "'",
  "Enter",
  "Shift",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  ",",
  ".",
  "/",
  "ArrowUp",
  "Shift",
  "Control",
  "Win",
  "Alt",
  "Space",
  "Alt",
  "Control",
  "ArrowLeft",
  "ArrowDown",
  "ArrowRight",
];
const keysShift = [
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "Backspace",
];
let capsLock = false;
const toLowerCaseLetter = () => {
  for (let i = 0; i < keys2.length; i++) {
    if (keys2[i].length < 2) keys2[i] = keys2[i].toLowerCase();
  }
};

let count = 0;
const renderTextArea = () => {
  const textArea = document.createElement("div");
  textArea.classList.add("input");
  textArea.innerHTML =
    '<textarea class="input_textarea" id="textarea" ></textarea>';
  window.document.querySelector("body").append(textArea);
};
renderTextArea();
const textArea = document.querySelector(".input_textarea");

const createLine = () => {
  const line = document.createElement("div");
  line.classList.add(`line`);
  line.id = `line_${count}`;
  document.querySelector("#keyboard").append(line);
};

const renderKeys = () => {
  for (let i = 0; i < keys2.length; i++) {
    if (i < 14)
      temp += `<div id="${keys2[i]}" class="key" data ="${keys2[i]}">${keys2[i]}</div>`;
    else if ((i > 13) & (i <= 27))
      temp1 += `<div id="${keys2[i]}" class="key" data ="${keys2[i]}">${keys2[
        i
      ].toUpperCase()}</div>`;
    else if ((i > 27) & (i < 41))
      temp2 += `<div id="${keys2[i]}" class="key" data ="${keys2[i]}">${keys2[
        i
      ].toUpperCase()}</div>`;
    else if ((i >= 41) & (i < 54))
      temp3 += `<div id="${keys2[i]}" class="key" data ="${keys2[i]}">${keys2[
        i
      ].toUpperCase()}</div>`;
    else if (i >= 54)
      temp4 += `<div id="${keys2[i]}" class="key" data ="${keys2[i]}">${keys2[
        i
      ].toUpperCase()}</div>`;
  }
  for (let j = 0; j < 5; j++) {
    createLine();
    count++;
  }

  document.querySelector("#line_0").innerHTML = temp;
  document.querySelector("#line_1").innerHTML = temp1;
  document.querySelector("#line_2").innerHTML = temp2;
  document.querySelector("#line_3").innerHTML = temp3;
  document.querySelector("#line_4").innerHTML = temp4;
};
renderKeys();
let space = document.querySelector("#Space");
space.textContent = " ";
let spaceAtt = document.createAttribute("data");
spaceAtt.value = " ";
space.setAttributeNode(spaceAtt);
let control = document.querySelectorAll("#Control");
control.forEach((el) => (el.innerText = "Ctrl"));

let arrowUp = document.querySelector("#ArrowUp");
arrowUp.innerText = "⇧";
arrowUp.classList.add("arrow");

let arrowDown = document.querySelector("#ArrowDown");
arrowDown.innerText = "⇩";
arrowDown.classList.add("arrow");
let arrowLeft = document.querySelector("#ArrowLeft");
arrowLeft.innerText = "⇦";
arrowLeft.classList.add("arrow");
let arrowRight = document.querySelector("#ArrowRight");
arrowRight.innerText = "⇨";
arrowRight.classList.add("arrow");

let keyButton = document.querySelectorAll(".key");
const lineZero = document.querySelector("#line_0");
const addClassNameToSpecial = () => {
  for (let spec of keyButton) {
    if (spec.innerText.length > 1) {
      spec.className += " special";
    }
  }
};
addClassNameToSpecial();

const clicHandler = () => {
  keyButton.forEach((el) => {
    el.onclick = (e) => {
      keyButton.forEach((element) => element.classList.remove("active"));
      let data = el.getAttribute("data");
      document.querySelector(`[data = "${data}"]`).classList.add("active");
      console.log(el.textContent);
      if (el.textContent.length < 2) {
        textArea.insertAdjacentHTML(
          "beforeend",
          `${el.textContent.toLowerCase()}`
        );
      }
    };
  });
};
clicHandler();
document.onkeydown = function (e) {
  console.log(e.key);

  let key = document.querySelector(`[data="${e.key}"]`);
  key.className += " active";
  toLowerCaseLetter();
  if (e.key.length < 2)
    textArea.insertAdjacentHTML(
      "beforeend",
      `${key.textContent.toLowerCase()}`
    );
};
const pressShift = () => {
  document.onkeydown = (e) => {
    if (e.key === "Shift") {
      lineZero.innerHTML = "";
      for (let i = 0; i < keysShift.length; i++) {
        tempShift += `<div id="${keysShift[i]}" class="key" data ="${keys2[i]}">${keysShift[i]}</div>`;
      }
      lineZero.innerHTML = tempShift;
      if (e.key != "Shift") {
      }
    }
  };
};

document.onkeyup = (e) => {
  document
    .querySelectorAll(".key")
    .forEach((el) => el.classList.remove("active"));
};

// console.log(textArea);
window.addEventListener("DOMContentLoaded", function () {});
