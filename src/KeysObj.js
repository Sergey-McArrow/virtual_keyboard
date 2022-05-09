import { keys, keys2 } from "./keyboard";
export let buttons = [];
for (let i = 0; i < keys.length; i++) {
  let KeysObj = {
    key: keys2[i],
    keyCode: keys[i],
  };
  buttons.push(KeysObj);
}
