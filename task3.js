function abbrev(fullName) {
    let arr = fullName.split(' ');
    let firstNameCapitalLetter = arr[0][0].toUpperCase();
    let secondNameCapitalLetter = arr[1][0].toUpperCase(); 
    return `${firstNameCapitalLetter}.${secondNameCapitalLetter}.`
}

console.log(abbrev('sofiia tymofeieva'));
console.log(abbrev('John Doe'));