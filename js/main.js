var array = [];

function fillingArray(minNumber , maxNumber) {
    for (var i = minNumber; i <= maxNumber; i++) {
        array.push(i);
    }
}

fillingArray(100 , 102);
console.log(array);
