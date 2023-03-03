/*const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}*/ 

/* task: Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.*/

/*const myArray = [];
let i = 5;

while ( i >= 0) {
    myArray.push (i);
    i--;
} */

/* for loop
const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);

  ourArray will now have the value [0, 1, 2, 3, 4].
} */

/*const myArray = [];
for ( let i = 1; i <= 5; i++) {
    myArray.push(i);
}
//[1,2,3,4,5] */

//task: Push the odd numbers from 1 through 9 to myArray using a for loop. [1,3,5,7,9]

/*const myArray = [];
for (let i = 1; i <= 9; i+=2) {
  myArray.push(i);
}*/

//Push the odd numbers from 9 through 1 to myArray using a for loop. [9,7,5,3,1]

/*const myArray = [];
for ( let i = 9; i >= 1; i-=2) {
  myArray.push(i);
}*/

/*const arr = [10,9,8,7,6];
 for (let i = 0; i < arr.lenght; i++) {
  console.log(arr[i]);
 }
*/

//Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.

/* const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;

for (let i = 0; i < myArr.length; i++) {

  total += myArr[i];

   console.log(myArr[i]);
}
*/

/* const arr = [
  [ 1, 2 ],
  [ 3, 4 ],
  [ 5, 6 ]
];
for ( let i = 0; i < arr.length; i++) {
  for ( let j = 0; j < arr[i].length; j++) {
    console.log( arr[i][j]);
  }
}
*/

//Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

function multiplyAll(arr) {
  var product = 1;
  for (let i = 0; i < arr.length; i++) {
      for ( let j = 0; j < arr[i].length; j++) {
         console.log(arr[i][j]) 
         product *= arr[i][j];
          
      }
  }
  

  return product;
}

multiplyAll([[1, 2],[3, 4],[5, 6]]); 