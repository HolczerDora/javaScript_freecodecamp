/* const myArray = [];
let i = 10;

do {
    myArray.push(i);
    i++;
}

while (i < 10);

console.log(myArray); */ 

/* function sum(arr, n) {
    if ( n<=0) {
        return 0;
    }
    else {
        return sum(arr, n-1)+ arr[n-1];
    }
} */

const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    for ( let i =0; i < contacts.length; i++) {
        if (contacts[i].firstName === name ) {
            if( prop in contacts[i]) {
                return contacts[i][prop]
            }
            else {
                return "No such property"
            }
        }
    }
    
  
    // Only change code above this line
    return "No such contact"
  }
  
  lookUpProfile("Akira", "likes");