import { Outlet } from "react-router-dom";
import NavBar from "./global-section/NavBar";
import Footer from "./global-section/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div className="bg-white   text-gray-500">
      <NavBar></NavBar>
      <div className="max-w-[1200px] mx-auto px-3 sm:px-5 ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Root;
