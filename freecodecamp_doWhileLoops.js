/* const myArray = [];
let i = 10;

do {
    myArray.push(i);
    i++;
}

while (i < 10);

console.log(myArray); */ 

function sum(arr, n) {
    if ( n<=0) {
        return 0;
    }
    else {
        return sum(arr, n-1)+ arr[n-1];
    }
}