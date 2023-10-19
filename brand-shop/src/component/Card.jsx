import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="text-2xl lg:text-3xl">
      <Link to={"/my_card"}>
        <BsCart2></BsCart2>
      </Link>
    </div>
  );
};

export default Card;
