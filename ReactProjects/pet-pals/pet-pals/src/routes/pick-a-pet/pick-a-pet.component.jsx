import PET_DATA from "../../pet-data.json";

const PickAPet = () => {
  return (
    <div>
      {PET_DATA.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default PickAPet;
