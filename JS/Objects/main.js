//object
let capitals = {
    "Рос Фед": "Moscow",
    //"Рос Фед": "Moscow",
    "UK": "London",
    "France": "Paris",
    "China": "Beijing",
    "Armenia": "Erevan" //хэш таблица неупорядоченная последовательность страны можно без кавычек
};

let razrabi = {
    "Фамилия": "Имя",
    "Аюров": "Дмитрий",
    "Баулин": "Макс",
    "Камышев": "Влад",
    "Котоман": "Карнелиу",
    "Ленник": "Павел",
    "Мирзоян": "Даниил",
    "Шишкарев": "Алексей",
    "Ярмагомедов": "Эльдар"
};

let rus = "Рос Фед";
//capitals.Armenia вызов ключа 
capitals.Russia = "Ulan-Ude"; //замена
capitals.Germany /* или ["Germany"]*/ = "Berlin";
//capitals."Рос Фед" = "kjhkhl"; ошибка
capitals[rus] = "Novosibirsk";



function createTable(obj) {
    let table  = `<table style="border-collapse: collapse;">`;
    for (let key in obj) {
        table += `<tr">
                    <td style="border: solid;">${key}</td>
                    <td style="border: solid;">${obj[key]}</td>
                </tr>`;
//        console.log(key);
//        console.log(capitals[key]);
    }
    table += "</table><br>";
    return table;
}
document.write(createTable(capitals));
document.write(createTable(razrabi));


let auto = {
    Russia: "VAZ 2109",
    //"Рос Фед": "Moscow",
    UK: "Bentley",
    France: "Renault",
    China: "Cherry",
    Armenia: "Eraz", 
    Japan: "Mazda"
};
document.write(createTable(auto));


let book1 = {
    author: "D.Flanagan",
    title: "Learn JavaScript",
    year: 2012,
    pagesCount: 1080,
    price: 1000,
    available: true
};
let book2 = {
    author: "Franz Kafka",
    title: "Школьный учитель",
    year: 1915,
    pagesCount: 578,
    price: 500,
    available: false
};
let book3 = {
    author: "Франц Перлз",
    title: "Гештальт",
    year: 1978,
    pagesCount: 854,
    price: 800,
    available: true
};
let book4 = {
    author: "Пушкин",
    title: "Онегин",
    year: 1833,
    pagesCount: 85,
    price: 300,
    available: true
};
let book5 = {
    author: "Фрейд",
    title: "Толклвание сновидений",
    year: 1914,
    pagesCount: 467,
    price: 450,
    available: true
};
/* две книги и 2000 тыс рублей купить самую дорогую книгу или все если получиться */
let money = 9000;
function tryToBuy(book) {  
        if(book.price <= money && book.available) {
            console.log("I have bought " + book.title);
            money -= book.price;
            console.log("I have " + money);
        }  else {
            console.log("Can't buy " + book.title);
        }
        countBook--;
        book.price = 0;
}

function buyBook(a/*, b*/) {
//    if(a.price <= money) {
//        console.log("I have bought " + a.title);
//        money -= a.price;
//    }   
//    if(b.price <= money) {
//        console.log("I have bought " + a.title);
//        money -= a.price;
//    }
    tryToBuy(a);
//    tryToBuy(b);
    console.log("У меня осталось " + money )
}

//if(book1.price >= book2.price) {
//    buyBook(book1, book2);
//} else if (book2.price > book1.price) {
//    buyBook(book2, book1);      
//}
let countBook = 5;


while(countBook !== 0 ) {
    let maxNum = Math.max(book1.price, book2.price, book3.price, book4.price, book5.price);
    if (maxNum === book1.price) {
        tryToBuy(book1);
//        book1.price = 0;
    } else if (maxNum === book2.price) {
        tryToBuy(book2);
//        book2.price = 0;
    } else if (maxNum === book3.price) {
        tryToBuy(book3);
//        book3.price = 0;
    } else if (maxNum === book4.price) {
        tryToBuy(book4);
//        book4.price = 0;
    } else if (maxNum === book5.price) {
        tryToBuy(book5);
//        book5.price = 0;
    } 
}

let msgs = {
    young: "Вам еще рано работать",
    work:"Вам еще работать и работать",
    old:"Вам пора на пенсию",
    err:"Неизвестный возраст"
};

let age = 45;

/* switch (age) {
    case age <= 17: 
        console.log(msgs.young);
        break;;
    case age > 17 && age <= 59: 
        console.log(msgs.work);   
        break;
    case age > 59: 
        console.log(msgs.old);
        break
    default:
        console.log(msgs.err);
} */

if (age <= 17) {
    console.log(msgs.young);
} else if (age > 17 && age <= 59) {
    console.log(msgs.young);
} else if (age > 59) {
    console.log(msgs.old);
} else {
    console.log(msgs.err);
}






