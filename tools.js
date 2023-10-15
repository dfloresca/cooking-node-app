//temperature converter
function toFahrenheit(temp) {
    return ((temp * (9 / 5)) + 32);
}
function toCelsius(temp) {
    return ((temp - 32) * (5 / 9));
}
// exporter
module.exports = {
    toFahrenheit,
    toCelsius
}