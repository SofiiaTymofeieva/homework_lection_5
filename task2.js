function checkIfStrEmpty(str) {
    let stringWithoutSpaces = str.split(' ').join('');

    if(stringWithoutSpaces.length == 0){
        return true
    } else{
        return false
    }
}
console.log(checkIfStrEmpty("abracadabra"));
console.log(checkIfStrEmpty(""));
console.log(checkIfStrEmpty(" "));
console.log(checkIfStrEmpty("     "));
console.log(checkIfStrEmpty("    f "));
console.log(checkIfStrEmpty(" !   "));
