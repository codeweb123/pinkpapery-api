import Login from "../../components/log-in/log-in.component";

const Pets = () => {
  const pets = [
    {
      id: 1,
      name: "Alligator",
      imageUrl: "https://i.imgur.com/gKjvhlt.png",
    },
    {
      id: 2,
      name: "Rabbit",
      imageUrl: "https://i.imgur.com/VDOCpoN.png",
    },
    {
      id: 3,
      name: "Leopard",
      imageUrl: "https://i.imgur.com/T8rRf7Z.png",
    },
    {
      id: 4,
      name: "Zebra",
      imageUrl: "https://i.imgur.com/qknAHaC.png",
    },
    {
      id: 5,
      name: "Giraffe",
      imageUrl: "https://i.imgur.com/nf55Ezu.png",
    },
  ];

  return (
    <div>
      <br></br>
      <br></br>
      <Login pets={pets} />
    </div>
  );
};

export default Pets;
