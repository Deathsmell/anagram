"use strict"

let string = "cat js atc tac sj d"

// Принимает строку с различными анаграмами разделенные пробелом.
// Нужно вернуть количество анограм первого встречного слова
function howManyAnagrams(string){
    // твой код
    return 0;
}

function valid(num){
    if (num === 3) {
        console.log("Первосходно котов и правда трое")
    } else {
        let number = num - 3;
        let message = "Чето не то ты сделал котов на " + number;
        if (num > 3){
            message += " больше"
        } else {
            message += " меньше"
        }
        console.log(message)
    }
}

valid(howManyAnagrams(string))