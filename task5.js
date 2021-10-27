function sortFromBiggerToLowerInt(firstInt, secondInd, thirdInt){
    if(firstInt > secondInd && secondInd > thirdInt){
        return `${firstInt} ${secondInd} ${thirdInt}`
    } else 
    if(firstInt > secondInd && thirdInt > secondInd && firstInt > thirdInt){
        return `${firstInt} ${thirdInt} ${secondInd}`;
    } else 
    if(secondInd > firstInt && firstInt > thirdInt){
        return `${secondInd} ${firstInt} ${thirdInt}`;
    } else 
    if(secondInd > firstInt && thirdInt > firstInt && secondInd > thirdInt){
        return `${secondInd} ${thirdInt} ${firstInt}`;
    } else 
    if(thirdInt > firstInt && firstInt > secondInd){
        return `${thirdInt} ${firstInt} ${secondInd}`;
    } else 
    if(thirdInt > firstInt && secondInd > firstInt){
        return `${thirdInt} ${secondInd} ${firstInt}`;
    } else  if (firstInt == secondInd && firstInt > thirdInt){
        return `${firstInt} ${secondInd} ${thirdInt}`;
    } else  if (firstInt == secondInd && thirdInt > firstInt){
        return `${thirdInt} ${firstInt} ${secondInd}`;
    } else  if (firstInt == thirdInt && thirdInt > secondInd){
        return `${thirdInt} ${firstInt} ${secondInd}`;
    } else  if (firstInt == thirdInt && secondInd > thirdInt){
        return `${secondInd} ${firstInt} ${thirdInt}`;
    } else  if (secondInd == thirdInt && secondInd > firstInt){
        return `${secondInd} ${thirdInt} ${firstInt}`;
    } else {
        return `${firstInt} ${secondInd} ${thirdInt}`;
    }
}

console.log(sortFromBiggerToLowerInt(10, 5, 1));
console.log(sortFromBiggerToLowerInt(10, 1, 5));

console.log(sortFromBiggerToLowerInt(5, 10, 1));
console.log(sortFromBiggerToLowerInt(5, 1, 10));

console.log(sortFromBiggerToLowerInt(1, 5, 10));
console.log(sortFromBiggerToLowerInt(1, 10, 5));

console.log(sortFromBiggerToLowerInt(10, 10, 5));
console.log(sortFromBiggerToLowerInt(5, 5, 10));

console.log(sortFromBiggerToLowerInt(10, 5, 10));
console.log(sortFromBiggerToLowerInt(5, 10, 5));

console.log(sortFromBiggerToLowerInt(5, 10, 10));
console.log(sortFromBiggerToLowerInt(10, 5, 5));

console.log(sortFromBiggerToLowerInt(10, 10, 10));


