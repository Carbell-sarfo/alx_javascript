// Call me Moby
// this function executes x times a function

function callMeMoby (x, theFunction) {
    for (let i = 0; i < x; i++) {
        theFunction();
    }
}

module.exports = {
    callMeMoby: callMeMoby
}