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
    title: "Atomic Habits",
    author: "James Clear",
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
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <section className="booklist">
      <EventExamples />

      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e);
    console.log(e.target.name);
    console.log(e.target.value);
    console.log("handle form input");
  };

  const handleButtonClick = () => {
    alert("handle button click");
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <section>
      <form>
        <h2>typical form</h2>
        <label>fill me out!</label>
        <input
          type="text"
          name="hello"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        ></input>

        <button onClick={handleFormSubmission} type="submit">
          submit
        </button>
        <div>
          <button onClick={handleButtonClick} type="button">
            click me
          </button>
        </div>
      </form>
    </section>
  );
};

const Book = ({ img, title, author, getBook, id }) => {
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={getSingleBook}>click me</button>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
