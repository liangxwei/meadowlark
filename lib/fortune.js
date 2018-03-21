var fortuneCookies = [
    "A",
    "B",
    "C",
    "D",
    "E"
];

exports.getFortune = function() {
    var idx = Math.floor(Math.random() * fortuneCookies.length);
    return fortuneCookies[idx];
};