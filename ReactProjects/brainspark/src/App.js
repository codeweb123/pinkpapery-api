const App = () => {
  const categories = [
    {
      id: 1,
      title: "Reading",
    },
    {
      id: 2,
      title: "Math",
    },
    {
      id: 3,
      title: "Science",
    },
    {
      id: 4,
      title: "Social Studies",
    },
    {
      id: 5,
      title: "Writing",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title }) => (
        <div className="category-container">
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
