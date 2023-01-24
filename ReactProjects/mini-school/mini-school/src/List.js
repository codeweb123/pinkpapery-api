import React from "react";

const List = ({ people }) => {
  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div key={id} className="person">
            <img src={image} alt={name}></img>
            <div>
              <h4>{name}</h4>
              <h6>{age} years old</h6>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default List;
