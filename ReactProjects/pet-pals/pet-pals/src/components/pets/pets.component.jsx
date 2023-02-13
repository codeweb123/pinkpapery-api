import Login from "../../components/log-in/log-in.component";

const Pets = () => {
  const pets = [
    {
      id: 1,
      name: "Bear",
      imageUrl: "https://i.imgur.com/XX6jpgP.png",
    },
    {
      id: 2,
      name: "Bird",
      imageUrl: "https://i.imgur.com/BYvkLgg.png",
    },
    {
      id: 3,
      name: "Cat",
      imageUrl: "https://i.imgur.com/VxhCiq3.png",
    },
    {
      id: 4,
      name: "Rabbit",
      imageUrl: "https://i.imgur.com/8Ey3HCv.png",
    },
    {
      id: 5,
      name: "Dog",
      imageUrl: "https://i.imgur.com/ATz4LYP.png",
    },
  ];

  return (
    <div>
      <h2>Petpal Land</h2>
      <Login pets={pets} />
    </div>
  );
};

export default Pets;
