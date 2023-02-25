//console.log("Complex code with array and objects");

/*const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    
    "artist": "Yiruma",
    "title": "Love",
    "release_year": 2010,
    "formats": [
      "CD",
      "MP3",
      "MP4",
      "CD"
    ],
    "gold": true
  }
];*/

//nested object
/*const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents)*/

//nested arrays

/* const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];
console.log(secondTree)*/

/*Your function must always return the entire record collection object.
If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
If value is an empty string, delete the given prop property from the album.*/ 

const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if ( prop !== "tracks" && value !== "") {
        records[id][prop] = value;
    }
    else if ( prop === "tracks" && records[id].hasOwnProperty("tracks") == false) {
        records[id][prop] = [value];
    }
    else if ( prop === "tracks" && value !== "") {
        records[id][prop].push(value);
    }
    else if ( value ==="" ) {
        delete records[id][prop];
    }

    return records;
  }

  updateRecords(recordCollection, 5439, 'artist', 'ABBA');

  

