
//функция метод глобального обьекта
let foo = function() {
    return "lololo";
};
//=

function foo1() {
    return "trolololo";
}


console.log(foo());
console.log(foo1());

let getRandom = function(n = 10) {
    return Math.floor(Math.random() * n);
};
console.log(getRandom());

let arr = [];

for (let i = 0; i < getRandom(100); i++) {
    arr.push(getRandom());

}
console.log(arr.length, arr);



//varient 1
let summ =0;
for (let i = 0; i < arr.length; i++) {
    summ += arr[i];
}
console.log(summ);


//variant 2
summ = 0;
for (let k in arr) {
    summ += arr[k];
}
console.log(summ);



//var 3

summ = 0;
for(let val of arr) {
    summ += val;
}
console.log(summ);


//var 4
summ = 0;
arr.forEach(function(value){
    summ += value;
});
console.log(summ);

