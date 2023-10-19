import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, url, price, name, description } = product || {};
  return (
    <div
      className="bg-gray-100 shadow-md shadow-inner border-2 rounded-md
    "
    >
      <figure className="flex justify-center items-center bg-white rounded-md">
        <img
          className="w-10/12 hover:w-11/12 hover:w-full duration-200 h-[300px] object-contain"
          src={url}
          alt=""
        />
      </figure>

      <div className="p-3">
        <h1 className="text-xl font-semibold text-gray-800">{name}</h1>
        <p className="  whitespace-nowrap overflow-hidden text-ellipsis">
          {description}
        </p>

        <p className="font-bold">{price}</p>
        <div className="flex gap-2">
          <Link
            to={`/product_update/${_id}`}
            className="  btn btn-sm btn-secondary   mt-2"
          >
          Update
          </Link>
          <Link
            to={`/product/${_id}`}
            className="  btn btn-sm btn-secondary mt-2"
          >
            {" "}
            View Details
            <AiOutlineDoubleRight></AiOutlineDoubleRight>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
