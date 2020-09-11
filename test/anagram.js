module.exports = function valid(num){
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