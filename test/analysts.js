module.exports = function generator(func) {
    if ("undefined" === typeof func) {
        console.log("Хорошая попытка, бро. Но тебе придется передать в меня функцию ;)")
        setTimeout(() => console.error("ps: Не забудь - передавая функцияю не делай вызов"), 3000)
        setTimeout(() => console.error("pss: Если вдруг не понял то это значит не ставить скобочки - ()"), 10000)
    } else if ("function" !== typeof func) {
        console.log("Чел, то что ты мне дал не функция проверь себя")
    } else {
        if (!func.toString().match(/console.log\(.+\)/)) {
            console.error("Функция должна содержать console.log() для вывода информации на экран");
        } else {
            setInterval(() => func(extracted()), 1000);
        }
    }
}

function extracted() {
    let random = Math.trunc(Math.random() * 10);
    return input[random]
}

let empty = function empty() {
};
let input = [null, 'string', null, 1, undefined, 0.1, 999n, true, empty, {}, Symbol]

