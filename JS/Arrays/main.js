let numbers = [2, 8, 4, 0, 3, 1, 9];
console.log(numbers.length);

numbers[10] = 8;
console.log(numbers);

numbers.push(7); 
numbers.push(3);  //add new value
console.log(numbers);   

let n = numbers.pop(); //удаление последнего значения
console.log(numbers, n);
let m = numbers.shift();


numbers.unshift(n); //add в начало 
console.log(numbers);

numbers.push(m);
console.log(numbers);