import { produce } from "immer";

let book = { title: "harry potter" };
function publish(book) {
  book.isPublished = true;
}

publish(book);
console.log(book);

let immuteableBook = { title: "harry potter" };
console.log(immuteableBook);
function immutablePublish(book) {
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
}

const immuteableBook2 = immutablePublish(immuteableBook);
console.log(immuteableBook);
console.log(immuteableBook2);
