import { useEffect, useState } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";

const BrandDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((item) => {
        setProduct(item);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    const filter = product && product?.filter((item) => item?.brand === id);
    setProduct(filter);
    // console.log(filter);
  }, [id, product]);
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product &&
          product?.map((item, i) => (
            <div
              key={i}
              className="bg-gray-100  shadow-inner border-2 rounded-md
        "
            >
              <figure className="flex justify-center items-center bg-white rounded-md">
                <img
                  className="w-10/12 hover:w-11/12 hover:w-full duration-300 h-[300px] object-contain"
                  src={item?.url}
                  alt=""
                />
              </figure>

              <div className="p-3">
                <h1 className="text-xl font-semibold text-gray-800">
                  {item?.name}
                </h1>
                <p className="  whitespace-nowrap overflow-hidden text-ellipsis">
                  {item?.description}
                </p>

                <p className="font-bold">{item?.price}</p>
                <div className="flex gap-2">
                  <Link
                    to={`/product_update/${item?._id}`}
                    className="btn btn-sm btn-secondary mt-2"
                  >
                    Update
                  </Link>
                  <Link
                    to={`/product/${item?._id}`}
                    className="  btn btn-sm btn-secondary mt-2"
                  >
                    {" "}
                    View Details
                    <AiOutlineDoubleRight></AiOutlineDoubleRight>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BrandDetails;
