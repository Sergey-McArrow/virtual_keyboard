import { keyboard } from "./keyboard";

const head = window.document.querySelector("head");

function includeCSS() {
    const style = window.document.createElement("link");
    style.href = "/dist/style.css";
    style.rel = "stylesheet";
    head.append(style);
}
includeCSS();

const renderTextArea = () => {
    const textArea = document.createElement("div");
    textArea.classList.add("input");
    textArea.innerHTML = "<textarea class=\"input_textarea\" id=\"textarea\" ></textarea>";
    // console.log(textArea);
    window.document.querySelector("body").append(textArea);
};
renderTextArea();
