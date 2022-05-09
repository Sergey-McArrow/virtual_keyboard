// import { Keys } from "./Keys";
console.log("Running");
document.querySelector("body").innerHTML =
  '<div class="keyboard" id="keyboard"> </div>';
const keys = [
  192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82,
  84, 89, 85, 73, 79, 80, 219, 221, 220, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76,
  186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 91,
  18, 32, 18, 17, 18, 37, 40, 39,
];
const keys2 = [
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
const keyArr = [];
let count = 0;
const renderTextArea = () => {
  const textArea = document.createElement("div");
  textArea.classList.add("input");
  textArea.innerHTML =
    '<textarea class="input_textarea" id="textarea" ></textarea>';
  // console.log(textArea);
  window.document.querySelector("body").append(textArea);
};
renderTextArea();
const textArea = document.querySelector(".input_textarea");
console.log(textArea);

const createLine = () => {
  const line = document.createElement("div");
  line.classList.add(`line`);
  line.id = `line_${count}`;
  document.querySelector("#keyboard").append(line);
};

const renderKeys = () => {
  let temp = "",
    temp1 = "",
    temp2 = "",
    temp3 = "",
    temp4 = "";
  for (let i = 0; i < keys2.length; i++) {
    if (i < 14)
      temp += `<div id="${keys2[i]}" class="key" data ="${keys[i]}">${keys2[i]}</div>`;
    else if ((i > 13) & (i <= 27))
      temp1 += `<div id="${keys2[i]}" class="key" data ="${keys[i]}">${keys2[i]}</div>`;
    else if ((i > 27) & (i < 41))
      temp2 += `<div id="${keys2[i]}" class="key" data ="${keys[i]}">${keys2[i]}</div>`;
    else if ((i >= 41) & (i < 54))
      temp3 += `<div id="${keys2[i]}" class="key" data ="${keys[i]}">${keys2[i]}</div>`;
    else if (i >= 54)
      temp4 += `<div id="${keys2[i]}" class="key" data ="${keys[i]}">${keys2[i]}</div>`;
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
let keyButton = document.querySelectorAll(".key");
console.log(keyButton);

document.onkeydown = function (e) {
  document.querySelector(`[data="${e.keyCode}"]`).classList.add("active");
  console.log(e.key);
  textArea.insertAdjacentHTML("beforeend", `${e.key}`);
};
document.onkeyup = function (e) {
  keyButton.forEach((el) => el.classList.remove("active"));
};
// keyButton.forEach((el) =>
//   el.addEventListener("keydown", (e) =>
//     textArea.insertAdjacentHTML("beforeend", `${el.textContent}`)
//   )
// );
keyButton.forEach((el) => {
  el.onclick = (e) => {
    keyButton.forEach((element) => element.classList.remove("active"));
    let data = el.getAttribute("data");
    document.querySelector(`[data = "${data}"]`).classList.add("active");
    console.log(el.textContent);
    textArea.insertAdjacentHTML("beforeend", `${el.textContent}`);
  };
});
// document.addEventListener("mouseup", (e) => {
//   keyButton.forEach((el) => {
//     el.classList.remove("active");
//     console.log(el);
//   });
// });

const printKeys = () => {};

const addClassNameToSpecial = () => {
  for (let spec of keyButton) {
    if (spec.innerText.length > 1) {
      spec.className += " special";
    }
  }
};
addClassNameToSpecial();
