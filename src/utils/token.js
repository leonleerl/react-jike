// 封装和token相关的方法 存 删 取
const TOKENKEY = "token_key";
function setToken(token) {
  localStorage.setItem(TOKENKEY, token);
}

function getToken() {
  return localStorage.getItem(TOKENKEY);
}

function removeToken() {
  localStorage.removeItem(TOKENKEY);
}

export { setToken, getToken, removeToken };
