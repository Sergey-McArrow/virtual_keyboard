import { Keys } from "./Keys";

const keys = [
    192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82,
    84, 89, 85, 73, 79, 80, 219, 221, 220, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76,
    186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 91,
    18, 32, 18, 17, 18, 37, 40, 39,
];

// console.log(keys.length);
document.onkeydown = function (e) {
    keys.push(e);
    console.log(e);
};
const renderKeys = () => {
    key = "";
    keys.forEach(() => {
        key += "<div class=\"key\"></div>";
    });
};
