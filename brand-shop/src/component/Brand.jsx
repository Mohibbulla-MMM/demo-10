import { useEffect, useState } from "react";
import { FaRegHandshake } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const WhoSupportsUs = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("./supporton.json")
      .then((res) => res.json())
      .then((item) => {
        setData(item);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
  const navigate = useNavigate();
  const handleBrandDetails = (id) => {
    console.log(id);
    navigate(`/brand_details/${id}`);
  };
  return (
    <div>
      <div className="space-y-1 my-3">
      
        <h1 className="text-3xl font-semibold my-2">
          Our Supported Brand </h1>
      </div>
      {/* img and details section company */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 cursor-pointer">
        {data &&
          data?.map((item, i) => (
            <div
              key={i}
              onClick={() => handleBrandDetails(item?.name)}
              className="border-2 border-gray-300 rounded-md p-5"
            >
              <figure className="flex justify-center items-center ">
                <img
                  className="max-w-full h-[100px] object-contain"
                  src={item.img}
                  alt=""
                />
              </figure>
              <h1 className="text-center text-2xl mt-3">{item?.name}</h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WhoSupportsUs;
