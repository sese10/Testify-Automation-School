/*You now have more books in your library. You should manage them all in one place. Any idea how you can achieve that?... Arrays!
Create a books array. 
Each element of this array will be a book object. 
Each book object will have the following properties
title (string)
description (string)
numberOfPages (number)
authour (string)
reading (boolean)
Use a for-loop to loop through the books array and log all books where the reading status is true to the console*/


const books = [
{
    book: 'Story Book',
    title: 'My Story',
    description: 'The Story of My Life',
    numberOfPages: 20,
    author: 'Rita',
    reading: false,
},
{
    book: 'Love Life',
    title: 'My Love Life',
    description: 'How Love Life Started',
    numberOfPages: 50,
    author: 'Rita Marley',
    reading: false,
},
{
    book: 'Children Story',
    title: 'My Children Story',
    description: 'How Children Grow Up Successful',
    numberOfPages: 100,
    author: 'Rita Chimamanda',
    reading: true,
}
]

    //console.log('Looping through to print book reading as true')
    for(const book of books){
        if(book.reading === true){
            console.log(book)
        }
    }

   /* console.log('Method 2 Looping through to print books reading as true')
    for (let book=0; book<books.length; book++)
    {
        console.log(books[book])
    }
    */