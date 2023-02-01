import PetItem from "../pet-item/pet-item.component";

const Login = ({ pets }) => {
  return (
    <div className="pets-choice-container">
      {pets.map((pet) => (
        <PetItem key={pet.id} pet={pet} />
      ))}
    </div>
  );
};
