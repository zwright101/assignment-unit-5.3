// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.

// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, 
//   as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

// > When testing your functions, write all tests in the JavaScript file!


console.log('***** Music Collection *****')

let collection = []; 

function addToCollection(title, artist, yearPublished){
    let albumToAdd = {
        albumTitle: title,
        artistName: artist,
        yearPublished: yearPublished,
    } 
    collection.push(albumToAdd);
    return albumToAdd; 
}
addToCollection("The Colour and the Shape", "The Foo Fighters", 1997);
addToCollection("Echoes, Silence, Patience, and Grace", "The Foo Fighters", 2007);
addToCollection("Meteora", "Linkin Park", 2003);
addToCollection("Hybrid Theory", "Linkin Park", 2000);
addToCollection("Woodgate, NY", "Novo Amor", 2014);
addToCollection("Infamous", "Motionless in White", 2012);

console.log(collection);
console.log('Number of items in array:', collection.length);

function showCollection(collection){
    for (let i = 0; i < collection.length; i++){
        console.log(collection[i].albumTitle, "by", collection[i].artistName, "published in", collection[i].yearPublished);
    }
}
showCollection(collection);


function findByArtist(artist) {
    let foundArtist = [];
    for (item of collection) {
        if (`${item.artistName}` === artist) {
            foundArtist.push(`${item.albumTitle} by ${item.artistName}, published in ${item.yearPublished}`);
        }
    } console.log(foundArtist);
}
findByArtist("Linkin Park");
findByArtist("Coldplay");
findByArtist("The Foo Fighters");
