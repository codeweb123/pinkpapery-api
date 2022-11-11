import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl:
        "https://img.freepik.com/free-vector/stack-books-graphic-illustration_53876-8852.jpg?w=826&t=st=1666122616~exp=1666123216~hmac=02821114f64282fd33ba6954bf65950505156a45cb273ef7170ec32bfa7402f5",
    },
    {
      id: 2, 
      title: "jackets",
      imageUrl:
        "https://img.freepik.com/free-vector/african-girl-with-chalkboard-classroom-character_24877-59351.jpg?w=740&t=st=1666122767~exp=1666123367~hmac=a9a827ee28d4ed4bfabc4b54739f8e3dc03dbe2aacf66f0f88698b0179141946",
    },
    {
      id: 3,
      title: "mens",
      imageUrl:
        "https://img.freepik.com/premium-psd/earth-png_705838-12.jpg?w=740",
    },
    {
      id: 4,
      title: "sneakers",
      imageUrl:
        "https://img.freepik.com/free-vector/egyptian-pyramids-giza-ancient-pharaoh-tombs_107791-14329.jpg?w=740&t=st=1666123089~exp=1666123689~hmac=84fcc78016518f99bb4a456e80a7c97fe1c0683e6f05ad9182a0d94301d9b2f6",
    },
    {
      id: 5,
      title: "womens",
      imageUrl:
        "https://img.freepik.com/free-photo/3d-render-checklist-clipboard-hand-pencil_107791-15683.jpg?w=740&t=st=1666123195~exp=1666123795~hmac=2aea5e2aeccdbdf4bc6b900ed36d3967649d8b153d4f7eda51faadf8b4cc6f10",
    },
  ];

  return <Directory categories={categories} />;
};

export default Home;
