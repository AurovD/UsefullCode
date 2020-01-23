let name = "Dima";
let age = Math.floor(Math.random() *100 +1);
console.log(age);
;//15;//+prompt(`${name}, what's your name?`, "18");
if (age > 0 && !isNaN(age)) {
    if (age < 18) {
        console.log(`${name}, you're too young for that!`);
    } else if (age > 59) {
        console.log(`${name}, you're retired, you need a rest!`);
    } else {
        console.log(`${name}, you're good working-age!!!`)
    }    
} else {
    console.log(`${name}, IT'S NOT AN AGE!!!`);
}



let dayOfWeek = Math.floor(Math.random() *7+1); 
console.log(dayOfWeek);
switch (dayOfWeek) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wensday");
        break;
    case 4:
        console.log("Thursday");   
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");   
        break;
    case 7:
        console.log("Sunday"); 
        break;
    default:
        console.log("It's not day of week"); 
} 


let month =  Math.floor(Math.random() *12+1);  //+prompt(`${name}, what month are you were born`, "1"); 
console.log(month);
let day = 6 //+prompt(`${name}, what day are you were born`, "1"); 
switch (month) {
    case 1:
        console.log(`Ты родился ${day} января`);
        break;
    case 2:
        console.log(`Ты родился ${day} февраля`);
        break;
    case 3:
        console.log(`Ты родился ${day} марта`);
        break;
    case 4:
        console.log(`Ты родился ${day} апреля`);   
        break;
    case 5:
        console.log(`Ты родился ${day} мая`);
        break;
    case 6:
        console.log(`Ты родился ${day} июля`);   
        break;
    case 7:
        console.log(`Ты родился ${day} июня`); 
        break;
    case 8:
        console.log(`Ты родился ${day} августа`); 
        break;   
    case 9:
        console.log(`Ты родился ${day} сентября`); 
        break;   
    case 10:
        console.log(`Ты родился ${day} октября`); 
        break;  
    case 11:
        console.log(`Ты родился ${day} ноября`); 
        break;   
    case 12:
        console.log(`Ты родился ${day} декабря`); 
        break;
    default:
        console.log("Это не дата!!!"); 
} 



/*
let n = 7.789;   
undefined
n.toFixed(2); значений после запятой, возвращает строку и округяет
"7.79" 
mdn
*/

//n^3
let n = 3.4789;
console.log(Math.PI);
console.log(Math.E);
console.log(Math.pow(n, 3)); //n^3
console.log(Math.pow(n, 1/3)); //sqrt 3
console.log(Math.round(n)); //sqrt 3
console.log(Math.floor(n)); //sqrt 3
console.log(Math.ceil(n)); //sqrt 3


let a = 128;
let b = 32;
let c = -4;

console.log(Math.max(a, b, c));
console.log(Math.max(a, b));

console.log(Math.random(a, b));




let count = 100;
let k;
let pp = "";

for (let inde=0; inde < count; inde++) {
    k  = Math.floor(Math.random() * 1999 - 999);
    pp = pp + `${k}, `;
}
console.log(pp);

let ranNum = Math.floor(Math.random() * 1999 - 999);
let sum = 0;

for (let i = 0, count = 100; i < count; i++) {
    sum += Math.floor(Math.random() * 1999 - 999);
    //console.log(sum);
}
console.log(sum);
console.log(Math.abs(sum)); //модуль



//let word = prompt(`Введите месяц`);
//if (word.toLowerCase() === `Сентябрь`.toLowerCase() || word == 9 || word.toUpperCase() === "September".toUpperCase()) {
//    console.log(`Брррр, как холодно`);
//}

let figure = prompt(`Введите число от 1 до 5.`);
s = 0;
let check = true;
while(check === true) {
    if (figure >= 0 && figure <= 5 || figure.toLowerCase === `один`.toLowerCase || figure.toLowerCase == `два`.toLowerCase || figure.toLowerCase === `три`.toLowerCase || figure.toLowerCase === `четыре`.toLowerCase || figure.toLowerCase === `пять`.toLowerCase) {
        console.log(typeof(figure)); 
        check = false;
        if (figure === `один`) {
            figure = `1`;
        } else if (figure === `два`) {
            figure = `2`;
        } else if (figure === `три`) {
            figure = `3`;
        } else if (figure === `четыре`) {
            figure = `4`;
        } else if (figure === `пять`) {
            figure = `5`;
        }
        
        switch (figure) {
        case `1`:
            s = Math.pow(23, 2);
            console.log(`Площадь квадрата ${s}`);  
            break;
        case `2`:
            s = Math.pow(34, 2);
            console.log(`Площадь круга ${s}`);
            break;    
        case `3`:
            s = 23 * 34;
            console.log(`Площадь прямоугольника ${s}`);
            break;   
        case `4`:
            s = (1/2) * 34 * 23;
            console.log(`Площадь треугольника ${s}`);
            break;  
        case `5`:
            s = ((34 * 20)/2)*23;
            console.log(`Площадь трапеции ${s}`);
            break;
        default:
            console.log("хм что-то пошло не так."); 
    }
    } else {
        figure = Math.floor(Math.random() * 5 + 1);
        console.log(`Придется выбрать за тебя`);
        figure += "";
    }
}
console.log(figure);

//switch (figure) {
//    case `1` || `один` :
//        s = Math.pow(23, 2);
//        console.log(`Площадь квадрата ${s}`);  
//        break;
//    case `2` || `два`:
//        s = Math.pow(34, 2);
//        console.log(`Площадь круга ${s}`);
//        break;    
//    case `3` || `три`:
//        s = 23 * 34;
//        console.log(`Площадь прямоугольника ${s}`);
//        break;   
//    case `4` || `четыре`:
//        s = (1/2) * 34 * 23;
//        console.log(`Площадь треугольника ${s}`);
//        break;  
//    case `5` || `пять`:
//        s = ((34 * 20)/2)*23;
//        console.log(`Площадь трапеции ${s}`);
//        break;
//    default:
//        console.log("хм что-то пошло не так."); 
//}









