function defineBiggerInteger(firsInt, secondInt) {
    if(firsInt > secondInt){
        return firsInt;
    } else if(secondInt > firsInt) {
        return secondInt;
    } else {
        return `Two integers are equal and = ${firsInt}`;
    }
}

console.log(defineBiggerInteger(3, 5));
console.log(defineBiggerInteger(10, 100));
console.log(defineBiggerInteger(35, 6));
console.log(defineBiggerInteger(-4, 5));
console.log(defineBiggerInteger(-2, -8));
console.log(defineBiggerInteger(15, 15));
