export class Keys {
  constructor(key, code, keyCode, ...rest) {
    this.key = key;
    this.code = code;
    this.keyCode = keyCode;
  }

  craeteKey(key, code, keyCode) {
    let temp = "";
    let key = document.createElement("div");
    key.classList.add("key");
    if (this.key || this.code || this.keyCode)
      temp += `String.fromCodePoint(${this.keyCode}`;
    key.innerHTML = temp;
  }
}
