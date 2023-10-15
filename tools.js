//measurement converter
function measurement(amount, unit) {

}
//timer
function timer(hr, min, sec) {

}
//temperature converter
function tempConverter(temp, type) {
    if(type == 'celsius' || type == 'c') {
    return((temp* (9/5)) + 32);
    } else if (type == 'fahrenheit' || type == 'f') {
        return((temp -32) * (5/9));
    }
} 
// exporter
module.exports = {
    measurement,
    timer,
    tempConverter
}