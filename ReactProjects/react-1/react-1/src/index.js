import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    title: "Spare",
    author: "Prince Harry The Duke of Sussex",
    img: "./images/book-1.jpg",
    id: 1,
  },
  {
    title: "James Clear",
    author: "Atomic Habits",
    img: "./images/book-1.jpg",
    id: 2,
  },
];

//const names = ["jo", "su", "fe"];
//const newNames = names.map((name) => {
//  return <h1>{name}</h1>;
//});
//console.log(newNames);
//place key - usually id in Main Return where you render out the component. Usually the "mainList".

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author, id } = book;
        return <Book img={img} title={title} author={author} key={id} />;
      })}
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
