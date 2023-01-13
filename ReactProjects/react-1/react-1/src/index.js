import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const firstBook = {
  title: "Spare",
  author: "Prince Harry The Duke of Sussex",
  img: "./images/book-1.jpg",
};

const secondBook = {
  title: "James Clear",
  author: "Atomic Habits",
  img: "./images/book-1.jpg",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
};

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
