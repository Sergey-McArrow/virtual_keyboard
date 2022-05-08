export class Keys {
    constructor(key, code, keyCode, ...rest) {
        this.key = key;
        this.code = code;
        this.keyCode = keyCode;
    }

    craeteKey(key, code, keyCode) {
        let temp = "";
        let strTemp = "";
        key = document.createElement("div");
        key.classList.add("key");
        if (this.key || this.code || this.keyCode) strTemp += String.fromCodePoint(this.keyCode);
        temp += `${strTemp}`;
        key.innerHTML = temp;
        console.log(key);
        return key;
    }
}
