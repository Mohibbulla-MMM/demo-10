import { useEffect, useState } from "react";
import toast from "react-hot-toast";
 
import { Link } from "react-router-dom";

const AddToCartProduct = () => {
  const [product, setProduct] = useState();
 
  useEffect(() => {
    fetch("http://localhost:5000/add_to_cart")
      .then((res) => res.json())
      .then((item) => {
        setProduct(item);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(product);



  const handleDeleteProduct = (id) => {
    console.log(id);
    fetch(
      `http://localhost:5000/add_to_cart/${id}`,

      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then(() => {
        // console.log(item);
        const remainigItem = product?.filter((data) => data?._id !== id);
        setProduct(remainigItem);
        toast.success("Remove item success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative">
        {/* product container */}
        <div className="col-span-3">
          {product?.map((item, i) => (
            <div
              key={i}
              className=" bg-gray-100 shadow-md shadow-inner border-2 rounded-md
              flex  items-center  mb-6"
            >
              <figure className="flex justify-center items-center bg-white rounded-md   ">
                <img
                  className="  min-w-[200px] duration-200 h-[300px] object-contain"
                  src={item?.url}
                  alt=""
                />
              </figure>

              <div className="p-3  ">
                <h1 className="text-xl font-semibold text-gray-800">
                  {item?.name}
                </h1>
                <p className="  whitespace-nowrap overflow-hidden text-ellipsis">
                  {item?.brand}
                </p>
                <p className="font-bold">{item?.price}</p>
                <p className="">{item?.description.slice(0, 200)}</p>

                <div className="flex gap-2 mb-auto mt-2">
                  
                  <span
                    onClick={() => handleDeleteProduct(item?._id)}
                    className="px-6 p-1 cursor-pointer bg-white rounded hover:text-black"
                  >
                  Remove
                  </span>
                  <Link
                    to={`/`}
                    className="px-6 p-1 cursor-pointer bg-white rounded hover:text-black"
                  >
                   Go Home
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* left side bar */}
        <div className="lg:col-span-1  ">
          <div
            className={`  
          lg:w-auto w-[300px]  
          bg-gray-100  `}
          >
            <div
              className={`
          shadow-md     border-2 rounded-md p-3 relative space-y-1 lg:sticky lg:top-2   `}
            >
              <h1 className="text-xl">               
                Total item:
                <span className="text-teal-500">{product?.length}</span>
              </h1>

              {/* vutur container */}
              <div className="flex rounded-md overflow-hidden border">
                <input
                  className="bg-white flex-1 px-3 w-full"
                  type="text"
                  placeholder="Cupon Apply"
                />
                <button className="btn
                 rounded-none btn-secondary text-white p-3 px-5  ">
                  Apply
                </button>
              </div>
              {/* <p>Totla Price: {totalPrice}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartProduct;
