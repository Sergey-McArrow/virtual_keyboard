import { keyboard } from "./keyboard";

const head = window.document.querySelector("head");

function includeCSS() {
    const style = window.document.createElement("link");
    style.href = "/dist/style.css";
    style.rel = "stylesheet";
    head.appendChild(style);
}
includeCSS();
