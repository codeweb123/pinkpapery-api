import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/91Szm8FpdfL._AC_UL600_SR600,400_.jpg"
    alt="Spare"
  />
);
const Title = () => <h2>Spare</h2>;
const Author = () => <h4>Prince Harry The Duke of Sussex </h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
