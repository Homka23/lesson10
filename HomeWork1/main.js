// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

function srt_array(a) {
    for (const aElement of a) {
        console.log(aElement);
    }
};
srt_array(str1);
srt_array(str2);
srt_array(str3);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(str1.toLowerCase());
console.log(str2.toLowerCase());
console.log(str3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str4 = ' dirty string   ';

console.log(str4.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str5 = 'Ревуть воли як ясла повні';

function stringtoarray(str) {
    console.log(str.split(' '));
}

console.log(stringtoarray(str5));


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let array_number = [10,8,-7,55,987,-1011,0,1050,0];

const arrOfStr = array_number.map(num => {
    return String(num);
});

console.log(arrOfStr);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//

let nums = [11,21,3];

function sortNums(array, text) {
    if(text === 'ascending') {
        array.sort((a, b) => a - b);
    }
    if (text === 'descending') {
        array.sort((a, b) => b - a);
    }
    return array;
};

console.log(sortNums(nums, 'descending'));

// let sortNums = (array) => array.sort((num1,num2)=> num1 - num2);
// console.log(sortNums(nums));
// let sortNums = (array) => array.sort((num1,num2) => num2 - num1);
// console.log(sortNums(nums));






//
// - є масив

// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let coursesAndDurationArraySortNum = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)

console.log(coursesAndDurationArraySortNum);

let coursesAndDurationArraySortStr = coursesAndDurationArray.sort(function (a, b) {
    if(a.title < b.title) {
        return 1;
    }
    if(a.title > b.title) {
        return -1;
    }
    if(a.title === b.title) {
        return 0;
    }
});

console.log(coursesAndDurationArraySortStr);


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let carts = [
    {cardSuit: 'diamond', color: 'red', value: 6},
    {cardSuit: 'diamond', color: 'red', value: 7},
    {cardSuit: 'diamond', color: 'red', value: 8},
    {cardSuit: 'diamond', color: 'red', value: 9},
    {cardSuit: 'diamond', color: 'red', value: 10},
    {cardSuit: 'diamond', color: 'red', value: 'jack'},
    {cardSuit: 'diamond', color: 'red', value: 'queen'},
    {cardSuit: 'diamond', color: 'red', value: 'king'},
    {cardSuit: 'diamond', color: 'red', value: 'ace'},
    {cardSuit: 'heart', color: 'red', value: 6},
    {cardSuit: 'heart', color: 'red', value: 7},
    {cardSuit: 'heart', color: 'red', value: 8},
    {cardSuit: 'heart', color: 'red', value: 9},
    {cardSuit: 'heart', color: 'red', value: 10},
    {cardSuit: 'heart', color: 'red', value: 'jack'},
    {cardSuit: 'heart', color: 'red', value: 'queen'},
    {cardSuit: 'heart', color: 'red', value: 'king'},
    {cardSuit: 'heart', color: 'red', value: 'ace'},
    {cardSuit: 'spade', color: 'black', value: 6},
    {cardSuit: 'spade', color: 'black', value: 7},
    {cardSuit: 'spade', color: 'black', value: 8},
    {cardSuit: 'spade', color: 'black', value: 9},
    {cardSuit: 'spade', color: 'black', value: 10},
    {cardSuit: 'spade', color: 'black', value: 'jack'},
    {cardSuit: 'spade', color: 'black', value: 'queen'},
    {cardSuit: 'spade', color: 'black', value: 'king'},
    {cardSuit: 'spade', color: 'black', value: 'ace'},
    {cardSuit: 'clubs', color: 'black', value: 6},
    {cardSuit: 'clubs', color: 'black', value: 7},
    {cardSuit: 'clubs', color: 'black', value: 8},
    {cardSuit: 'clubs', color: 'black', value: 9},
    {cardSuit: 'clubs', color: 'black', value: 10},
    {cardSuit: 'clubs', color: 'black', value: 'jack'},
    {cardSuit: 'clubs', color: 'black', value: 'queen'},
    {cardSuit: 'clubs', color: 'black', value: 'king'},
    {cardSuit: 'clubs', color: 'black', value: 'ace'}
];

// let spade_ace = carts.filter(function (cart) {
//     return cart.value === 'ace' && cart.cardSuit === 'spade';
// });
// console.log(spade_ace);
//
// let six_cart = carts.filter(cart => cart.value === 6);
// console.log(six_cart);
//
// let red_cart = carts.filter(cart => cart.color === 'red');
// console.log(red_cart);
//
// let diamond_cart = carts.filter(cart => cart.cardSuit === 'diamond');
// console.log(diamond_cart);
//
// let clubs_cart = carts.filter(function (cart) {
//     return cart.cardSuit === 'clubs' && cart.value > 8 || cart.cardSuit === 'clubs' && typeof cart.value === "string";
// });
// console.log(clubs_cart);


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let new_arrays = carts.reduce((accumulator, cart) => {
    if (cart.cardSuit === 'spade') {
        accumulator.spades.push(cart)
    };
    if (cart.cardSuit === 'diamond') {
        accumulator.diamonds.push(cart)
    };
    if (cart.cardSuit === 'heart') {
        accumulator.hearts.push(cart)
    };
    if (cart.cardSuit === 'clubs') {
        accumulator.clubs.push(cart)
    };
    return accumulator;
},{spades:[], diamonds:[], hearts:[], clubs:[]});

console.log(new_arrays);