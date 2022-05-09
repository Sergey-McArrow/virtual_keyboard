import { keyboard } from "./keyboard";
import { KeysObj } from "./KeysObj";
// import "./scss/style.scss";

const head = window.document.querySelector("head");

function includeCSS() {
  const style = window.document.createElement("link");
  style.href = "/dist/style.css";
  style.rel = "stylesheet";
  head.append(style);
}

window.onload = () => {
  includeCSS();
};
