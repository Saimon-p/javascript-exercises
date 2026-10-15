const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]


const getTheTitles = function(arr) {
    return books.map(element => {
          return element.title;
    })
};

console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
