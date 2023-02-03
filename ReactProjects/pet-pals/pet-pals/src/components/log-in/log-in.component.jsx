import PetItem from "../pet-item/pet-item.component";

import "./log-in.styles.scss";

const Login = ({ pets }) => {
  return (
    <div className="login-container">
      {pets.map((pet) => (
        <PetItem key={pet.id} pet={pet} />
      ))}
    </div>
  );
};

export default Login;
