// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Product from "../component/Product/Product";
import Banner from "../component/Banner";
import WhoSupportsUs from "../component/Brand";

const Home = () => {
  // store controlled swiper instance

  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <WhoSupportsUs></WhoSupportsUs>
      </div>
      <div>
        <Product></Product>
      </div>
 
    </div>
  );
};

export default Home;
