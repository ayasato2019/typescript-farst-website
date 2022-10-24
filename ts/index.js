"use strict";
class User {
    constructor(familyName, givenName, age) {
        this.age = age;
        this.familyName = familyName;
        this.givenName = givenName;
    }
}
const user = new User('海老原', '賢次', 44); // 名前と年齢は適当に
const contentsElem = document.getElementById('contents');
if (!!contentsElem) {
    contentsElem.innerText = `${user.familyName} ${user.givenName}`;
}
