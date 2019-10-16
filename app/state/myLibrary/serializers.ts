import config from "../../config";
import BookType from "../../types/book";

export function serializeBook(data): BookType {

  return {
    id: data.book_id,
    status: data.status,
    author: data.book.author,
    cover: `${config.books.baseURL}/${data.book.cover}/small`,
    title: data.book.title,
    description: data.book.description,
    genre: data.book.genre,
    rating: data.globalRating.rating,
    reviews: +data.globalRating.reviews
  };
}

export function serializeBooks(data): BookType[] {
  return data.map(serializeBook);
}
