import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";

 

const ProductUpdate = () => {
    const [productType, setProductType] = useState("");
    //   const productTypeRef = useRef()
  const product =useLoaderData()
    console.log(productType);

    // handel update element --------
    const handleUpteProduct = (e) => {
      e.preventDefault();
      const form = e.target;
      // console.log(form);
      const url = form.url.value;
      const name = form.name.value;
      const brand = form.brand.value;
      const price = form.price.value;
      const description = form.description.value;
      const rating = form.rating.value;
      const type = productType;
  
      const createProduct = {
        url,
        name,
        brand,
        price,
        description,
        rating,
        type,
      };
  
      console.log(createProduct);
  
      if (url?.length < 1) {
        toast.error("Please add Produot URL");
        toast.error("");
  
        return;
      }
  
      if (name?.length < 1) {
        toast.error("Please add Product name");
        return;
      }
      if (brand?.length < 1) {
        toast.error("Please add product Brand name");
        return;
      }
      if (price?.length < 1) {
        toast.error("Please add product Price");
        return;
      }
      if (description?.length < 1) {
        toast.error("Please add product shot description");
        return;
      }
      if (rating?.length < 1) {
        toast.error("Please add product Rating");
        return;
      }
      if (type?.length < 1) {
        toast.error("Please add produc type");
        return;
      }
      // return
      fetch(`http://localhost:5000/product/${product?._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(createProduct),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data?.acknowledged) {
            toast.success("Product Uploaded Success");
          }
  
          // form.reset();
        })
        .catch((err) => {
          toast.success(`${err}`);
          console.log(err);
        });
    };

    return (
        <div>
        <div className="max-w-6xl m-auto p-5 bg-gray-100   rounded-lg text-black space-y-4">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-center text-black mb-5">
           Update product
            </h1>
           
          </div>
          <form onSubmit={handleUpteProduct}>
            <div className="flex flex-col     gap-3">
              {/*----------------- row ----------------- */}
              <div className="md:flex gap-6 ">
                {/*  name */}
                <div className="mb-4 flex-1">
                  <label className="ml-1 mb-1 block text-xl font-semibold">
                    {" "}
                    Product Image URL
                  </label>
                  <input
                    className="bg-white border-gray-300 border-2 py-2 px-4 rounded-md outline-none w-full block"
                    type="url"
                    name="url"
                    placeholder="Enter Product Image URL http://img.png"
                    defaultValue={product?.url}
                  />
                </div>
                {/* chef name */}
                <div className="mb-4  flex-1">
                  <label className="ml-1 mb-1 block text-xl font-semibold">
                    Product Name
                  </label>
                  <input
                    className="bg-white border-gray-300 border-2 py-2 px-4 rounded-md outline-none block w-full "
                    type="text"
                    name="name"
                    placeholder="Enter Product Name"
                    defaultValue={product?.name}
                    />
                </div>
              </div>
              {/* ----------------- row 2 -------------------- */}
              <div className="md:flex gap-6 ">
                {/*  supplier */}
                <div className="mb-4 flex-1">
                  <label className="ml-1 mb-1 block text-xl font-semibold">
                    Brand Name
                  </label>
                  <input
                    className="bg-white border-gray-300 border-2 py-2 px-4 rounded-md outline-none w-full block"
                    type="text"
                    name="brand"
                    placeholder="Enter Brand Name"
                    defaultValue={product?.brand}
                    />
                </div>
                {/* test */}
                <div className="mb-4  flex-1">
                  <label className="ml-1 mb-1 block text-xl font-semibold">
                    Price
                  </label>
                  <input
                    className="bg-white border-gray-300 border-2 py-2 px-4 rounded-md outline-none block w-full "
                    type="text"
                    name="price"
                    placeholder="Enter Price $1000"
                    defaultValue={product?.price}
                    />
                </div>
              </div>
              {/* ----------------- row 3 -------------------- */}
              <div className="md:flex gap-6 ">
                {/*  catagory  */}
                <div className="mb-4 flex-1">
                  <label className="ml-1 mb-1 block text-xl font-semibold">
                    Short description
                  </label>
                  <input
                    className="bg-white border-gray-300 border-2 py-2 px-4 rounded-md outline-none w-full block"
                    type="text"
                    name="description"
                    placeholder="Enter Short description (do not use lorem ipsum)"
                    defaultValue={product?.description}
                    />
                </div>
                {/* details */}
                <div className="mb-4  flex-1">
                  <label className="ml-1 mb-1 block text-xl font-semibold">
                    Rating
                  </label>
                  <input
                    className="bg-white border-gray-300 border-2 py-2 px-4 rounded-md outline-none block w-full "
                    type="text"
                    name="rating"
                    placeholder="Product Rating"
                    defaultValue={product?.rating}
                    // defaultValue={product?.rating}
                  />
                </div>
              </div>
              {/* ----------------- row 4 -------------------- */}
              <div className="md:flex gap-6 ">
                {/* Phot url */}
                <div className="mb-4 relative  flex-1">
                  <p className="ml-1 mb-1 block text-xl font-semibold">
                    Product Type
                  </p>
  
                  <div className="  flex justify-between p-0 items-center gap-3 bg-white  border-gray-300 border-2 rounded-md   ">
                    <p className="flex-1  px-3">
                      {productType ? productType : " Choose Product Type"}
                    </p>
  
                    <div className="dropdown  ">
                      <label
                        tabIndex={0}
                        className="btn btn-sm bg-gray-200 hover:bg-gray-200   text-black rounded-none text-xl  outline-none border-none  "
                      >
                        <AiOutlineCaretDown></AiOutlineCaretDown>
                      </label>
  
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box right-0 top-10 w-52"
                      >
                        <li onClick={() => setProductType("Phone")}>
                          <a>Phone</a>
                        </li>
                        <li onClick={() => setProductType("Computer")}>
                          <a>Computer</a>
                        </li>
                        <li onClick={() => setProductType("Laptop")}>
                          <a>Laptop</a>
                        </li>
                        <li onClick={() => setProductType("Camera")}>
                          <a>Camera</a>
                        </li>
                        <li onClick={() => setProductType("Hadphone")}>
                          <a>Headphone</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
  
              <button
                className=" btn   btn-secondary"
                type="submit"
              >
                Add product
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default ProductUpdate;