import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineCaretDown } from "react-icons/ai";

const AddProduct = () => {
  const [productType, setProductType] = useState("");
  const [productBrand, setProductBrand] = useState("");
  //   const productTypeRef = useRef()

  console.log(productType);
  // handel create element --------
  const handleCreateElement = (e) => {
    e.preventDefault();
    const form = e.target;
    // console.log(form);
    const url = form.url.value;
    const name = form.name.value;
    const brand = productBrand;
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
      toast.error("Please add product type");
      return;
    }
    // return
    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(createProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.acknowledged) {
          form.reset();
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
      <div className="max-w-6xl m-auto p-5 bg-gray-200   rounded-lg text-black space-y-4">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-black">
            Crate A New product
          </h1>
        </div>
        <form onSubmit={handleCreateElement}>
          <div className="flex flex-col     gap-3">
            {/*----------------- row ----------------- */}
            <div className="md:flex gap-6 ">
              {/*  name */}
              <div className="mb-4 flex-1">
                <label className="ml-1 mb-1 block text-xl font-semibold">
                  Product Image URL
                </label>
                <input
                  className="bg-white border-gray-300 border-2 py-2 px-4 rounded-md outline-none w-full block"
                  type="url"
                  name="url"
                  placeholder="Enter Product Image URL http://img.png"
                />
              </div>

              {/* product name */}
              <div className="mb-4  flex-1">
                <label className="ml-1 mb-1 block text-xl font-semibold">
                  Product Name
                </label>
                <input
                  className="bg-white border-gray-300 border-2 py-2 px-4 rounded-md outline-none block w-full "
                  type="text"
                  name="name"
                  placeholder="Enter Product Name"
                />
              </div>
            </div>

            {/* ----------------- row 2 -------------------- */}
            <div className="md:flex gap-6 ">
              {/* ratting */}
              <div className="mb-4  flex-1">
                <label className="ml-1 mb-1 block text-xl font-semibold">
                  Rating
                </label>
                <input
                  className="bg-white border-gray-300 border-2 py-2 px-4 rounded-md outline-none block w-full "
                  type="number"
                  name="rating"
                  placeholder="Product Rating"
                />
              </div>
              {/* price */}
              <div className="mb-4  flex-1">
                <label className="ml-1 mb-1 block text-xl font-semibold">
                  Price
                </label>
                <input
                  className="bg-white border-gray-300 border-2 py-2 px-4 rounded-md outline-none block w-full "
                  type="number"
                  name="price"
                  placeholder="Enter Price $1000"
                />
              </div>
            </div>

            {/* ----------------- row 3 -------------------- */}
            <div className="md:flex gap-6 ">
              {/*  short description  */}
              <div className="mb-4 flex-1">
                <label className="ml-1 mb-1 block text-xl font-semibold">
                  Short description
                </label>
                <input
                  className="bg-white border-gray-300 border-2 py-2 px-4 rounded-md outline-none block w-full "
                  type="text"
                  placeholder="Enter Short description (do not use lorem ipsum)"
                  name="description"
                />
              </div>
            </div>

            {/* ----------------- row 4 -------------------- */}
            <div className=" md:flex gap-6 ">
              {/*  brand */}

              <div className="mb-4 flex-1 ">
                <label className="ml-1 mb-1 block text-xl font-semibold">
                  Brand Name
                </label>
                <div className="  flex justify-between p-0 items-center gap-3 bg-white  border-gray-300 border-2 rounded-md   ">
                  <p className="flex-1  px-3">
                    {productBrand ? productBrand : " Choose a Brand"}
                  </p>

                  <div className="dropdown ">
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
                      <li onClick={() => setProductBrand("Apple")}>
                        <a>Apple</a>
                      </li>
                      <li onClick={() => setProductBrand("Samsung")}>
                        <a>Samsung</a>
                      </li>
                      <li onClick={() => setProductBrand("Sony")}>
                        <a>Sony</a>
                      </li>
                      <li onClick={() => setProductBrand("Google")}>
                        <a>Google</a>
                      </li>
                      <li onClick={() => setProductBrand("Intel")}>
                        <a>Intel</a>
                      </li>
                      <li onClick={() => setProductBrand("Vivo")}>
                        <a>Vivo</a>
                      </li>
                      <li onClick={() => setProductBrand("Oppo")}>
                        <a>Oppo</a>
                      </li>
                      <li onClick={() => setProductBrand("Nokia")}>
                        <a>Nokia</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* product type */}
              <div className="mb-4 relative  flex-1">
                <p className="ml-1 mb-1 block text-xl font-semibold">
                  Product Type
                </p>

                <div className="  flex justify-between p-0 items-center gap-3 bg-white  border-gray-300 border-2 rounded-md    ">
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
                      <li onClick={() => setProductType("Watch")}>
                        <a>Watch</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="btn
              btn-secondary"
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
export default AddProduct;
