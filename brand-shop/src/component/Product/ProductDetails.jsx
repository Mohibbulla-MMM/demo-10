import toast from "react-hot-toast";
import {
  AiFillStar,
  AiOutlineDoubleRight,
  AiOutlineStar,
} from "react-icons/ai";
import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  // console.log(product);
  const handleAddToCart = (id) => {
    const url = product?.url;
    const name = product?.name;
    const brand = product?.brand;
    const price = product?.price;
    const description = product?.description;
    const rating = product?.rating;
    const type = product?.type;
    const addToCart = {
      url,
      name,
      brand,
      price,
      description,
      rating,
      type,
    };
    // console.log(id);
    fetch(`http://localhost:5000/add_to_cart`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addToCart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.acknowledged) {
          toast.success("Product add success");
        }

        // form.reset();
      })
      .catch((err) => {
        toast.error(`${err}`);
        console.log(err);
      });
  };
  return (
    <div>
      <div
        className="bg-gray-100 shadow-md shadow-inner border-2 rounded-md sm:flex 
    "
      >
        <figure className=" flex-1 max-w-md flex justify-center items-center bg-white rounded-md">
          <img
            className="w-full duration-200 h-[300px] object-contain"
            src={product?.url}
            alt=""
          />
        </figure>

        <div className="p-3 flex-1 flex flex-col ">
          <h1 className="text-xl font-semibold text-gray-800">
            <span className="font-bold">NAME:</span> {product?.name}
          </h1>
          <p className="font-bold">PRICE: {product?.price}</p>
          <p>
            <span className="font-bold">RATING: </span>
            <span className="font-bold ">{product?.rating}</span>
          </p>
          <p>
            <span className="font-bold">BRAND: </span>
            <span className="font-bold ">{product?.brand}</span>
          </p>
          <p className="">
            <span className="font-bold">FEATURCH:</span> {product?.description}
          </p>

          <div className=" mt-auto flex gap-2">
            <button
              onClick={handleAddToCart}
              className="text-teal-600 btn btn-sm bg-gray-300 hover:bg-gray-400 hover:text-teal-800 my-2"
            >
              Add to Cart
            </button>

            <Link
              to={`/product_update/${product?._id}`}
              className="text-teal-600 btn btn-sm bg-gray-300 hover:bg-gray-400 hover:text-teal-800 my-2"
            >
              Update
              <AiOutlineDoubleRight></AiOutlineDoubleRight>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
