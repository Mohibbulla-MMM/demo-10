 

// Import Swiper styles
import "swiper/css";
// import "swiper/css/bundle";

import "swiper/css/navigation";
import "swiper/css/autoplay";

const Banner = () => {
  return (
    <div className="w-full h-[400px]  bg-[url(https://i.ibb.co/CHzxhFv/banner-mockup.webp)] bg-center bg-cover flex   items-center">
      <div className="bg-gray-800 bg-opacity-50 p-5 max-w-2xl mx-auto">
        <h1 className="lg:text-5xl  text-4xl text-white text-left  ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam hic quae  
        </h1>
        <button className="btn rounded-none btn-secondary mt-2">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Banner;
 
