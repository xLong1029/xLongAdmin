/*
 * 功能 : 封装一些重要函数
 * 作者 : 罗永梅（381612175@qq.com）
 * 日期 : 2019-4-27
 * 版本 : version 2.0
 */

/**
 * 设置cookie
 *
 * @param {*} cname key名
 * @param {*} cvalue 值
 * @param {*} exdays 过期时间，以毫秒计
 */
export function SetCookie(cname, cvalue, exdays) {
  if (exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  } else {
    document.cookie = cname + "=" + cvalue + "; ";
  }
}

/**
 * 获取cookie
 *
 * @param {*} cname key名
 */
export function GetCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}

/**
 * 删除cookie
 *
 * @param {*} cname  key名
 */
export function DelCookie(cname) {
  document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}

/**
 * localstorage写入本地缓存
 *
 * @param {*} key key名
 * @param {*} value 值
 */
export function SetLocalS(key, value) {
  localStorage.setItem(key, value);
}

/**
 * localstorage获取本地缓存
 *
 * @param {*} key key名
 * @param {*} value 值
 */
export function GetLocalS(key, value) {
  let res = localStorage.getItem(key);
  if (res && res != 'null') return res;
  else return false;
}

/**
 * localstorage删除本地储存
 *
 * @param {*} key key名
 */
export function DelLocalS(key) {
  localStorage.removeItem(key);
}

/**
 * localstorage清空所有本地储存
 */
export function ClearLocalS() {
  localStorage.clear();
}

/**
 * 获取url传值参数
 *
 * @param {*} name 参数名
 * @param {*} thisUrl url地址，若不传则获取当前地址
 */
export function GetUrlQuery(name, thisUrl) {
  let reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i"),
    url = thisUrl || location.href;
  if (reg.test(url)) return decodeURI(RegExp.$2.replace(/\+/g, " "));
  else return false;
}

/**
 * 获取参数值
 *
 * @param {*} params 参数对象
 */
export function GetParams(params) {
  return {
    key: Object.keys(params),
    value: Object.values(params)
  };
}

/**
 * 删除对象指定属性
 *
 * @param {*} obj 对象
 * @param {*} uselessKeys 不需要的属性序列
 */
export function ObjOmit(obj, uselessKeys) {
  uselessKeys.forEach(key => delete obj[key]);
  return obj;
}

/**
 * 加密（简单模拟）
 *
 * @param {*} value 值
 */
export function Encrypt(value) {
  let code = '';
  for (let i = 0; i < value.length; i++) {
    let r = value.charCodeAt(i);
    code += String.fromCharCode(r + 2);
  }
  // 对字符串进行特殊字符编码，分号（;）、逗号（,）、等号（=）以及空格问题
  return escape(code);
}

/**
 * 解密（简单模拟）
 *
 * @param {*} value 值
 */
export function Decrypt(value) {
  // 对字符串进行特殊字符解码，分号（;）、逗号（,）、等号（=）以及空格问题
  value = unescape(value);
  let correct = '';
  for (let i = 0; i < value.length; i++) {
    let r = value.charCodeAt(i);
    correct += String.fromCharCode(r - 2);
  }
  return correct;
}

/**
 * 判断指定节点是否包含某个class类名
 *
 * @param {*} node 节点
 * @param {*} className 类名
 */
export function hasClass(node, className) {
  var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
  return node.className.match(reg);
}


/**
 * 给指定节点添加class类名
 *
 * @param {*} node 节点
 * @param {*} className 类名
 */
export function addClass(node, className) {
  if (!this.hasClass(node, className)) {
    node.className += " " + className;
  }
}

/**
 * 给指定节点移除class类名
 *
 * @param {*} node 节点
 * @param {*} className 类名
 */
export function removeClass(node, className) {
  if (hasClass(node, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
      node.className = node.className.replace(reg, ' ');
  }
}

/**
 * 给指定节点切换class类名，若存在则移除，若不存在则添加
 *
 * @param {*} node 节点
 * @param {*} className 类名
 */
export function toggleClass(node, className){
  if(hasClass(node,className)){
      removeClass(node, className);
  } else {
      addClass(node, className);
  }
}

/**
 * 返回某个节点的所有兄弟节点
 *
 * @param {*} node 节点
 */
export function siblingsNode(node) {
  let a = [];
  let p = node.parentNode.children;
  for (let i = 0, pl = p.length; i < pl; i++) {
    if (p[i] !== node) a.push(p[i]);
  }
  return a;
}

/**
 * 数组深克隆
 *
 * @param {*} arr 操作数组
 */
export function CopyArr(arr) {
  let copy = JSON.stringify(arr);
  return JSON.parse(copy);
}

/**
 * 数组转字符串
 *
 * @param {*} arr 数组
 * @param {*} l 拼接符
 */
export function ArrToAtr(arr, l) {
  return arr.join(l);
}

/**
 * 字符串转数组
 *
 * @param {*} string 字符串
 * @param {*} s 分隔符
 */
export function StrToArr(string, s) {
  return string.split(s);
}

// 删除数组指定某个元素
Array.prototype.remove = function (val) {
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
};
