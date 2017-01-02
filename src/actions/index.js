export function selectBook(book){
  // selectBook is an ActionCreator that must return an action
  // an object with a "type" property. "type:"" is always upper case
  return{
    type: 'BOOK_SELECTED'
    payload: book
  };
}
