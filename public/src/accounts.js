//function that returns the account object with the matching id
function findAccountById(accounts, id) {
  //compare if input id matches account id
  //if it does, return account object
  const findAccount = accounts.find((account) => account.id === id, {});
  return findAccount;
}

//function to return a sorted array of the provided account objects. The objects are sorted alphabetically by last name.
function sortAccountsByLastName(accounts) {
  let lastName = accounts.sort(function(a,b){
    if(a.name.last > b.name.last) return 1;
    else if  (b.name.last > a.name.last) return -1;
    else return 1;
  })
  return lastName
}


//returns a _number_ that represents the number of times the account's ID appears in any book's `borrows` array.
function getTotalNumberOfBorrows(account, books) {
  //loop through borrows array and accumulate number of borrows that include given account ID
  let result = books.reduce((acc, book) => {
    for(let i = 0; i < book.borrows.length; i++) 
    {
      if(book.borrows[i].id === account.id) 
      {
      acc++
    }}
    return acc
  },0)
  return result
}


function getBooksPossessedByAccount(account, books, authors) {
  return books.filter((book) => book.borrows.some(acc => acc.id === account.id && acc.returned === false))
              .map(book => { let author = authors.find(author => author.id === book.authorId)
                book.author = author; return book         
              })

}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};


