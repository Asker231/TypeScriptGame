"use strict";
const men = "https://www.dmarge.com/wp-content/uploads/2021/01/mens-short-hairstyles-crew-cut.jpg";
const women = "https://cdn.thetealmango.com/wp-content/uploads/2022/02/Yael-Shelbia.jpg";
const inp = document.querySelector('input');
const btn = document.querySelector('button');
const image = document.querySelector('img');
var Person;
(function (Person) {
    Person["MEN"] = "Men";
    Person["WOMEN"] = "Women";
})(Person || (Person = {}));
const Question = () => {
    switch (inp.value) {
        case Person.MEN: return image.src = men;
        case Person.WOMEN: return image.src = women;
    }
    if ((typeof inp.value) !== 'string') {
        console.log('error');
    }
    return false;
};
btn.addEventListener('click', Question);
