import { Map } from "immutable";

let book = { title: "harry potter" };
function publish(book) {
  book.isPublished = true;
}

publish(book);
console.log(book);

let immuteableBook = Map({ title: "harry potter" });

console.log(immuteableBook);
console.log(immuteableBook.get("title"));
console.log(immuteableBook.toJS());

function immutablePublish(book) {
  return book.set("isPublished", true);
}

immuteableBook = immutablePublish(immuteableBook);
console.log(immuteableBook.toJS());
