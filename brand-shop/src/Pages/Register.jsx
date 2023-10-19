import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DynamicAuthProvaider from "../Utility/DynamicAuthProvaider";
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import MediaLogin from "../Utility/MediaLogin";


const Register = () => {

  const [show, setShow] = useState(true);
  // const state = useState
  const location = useLocation();
  const navigate = useNavigate();

  const { userCreate } = DynamicAuthProvaider();
  // ----- -----------handler  submit ------ ------
  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(userCreate);

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email, password);

    // email validation
    const emailCheker = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailCheker.test(email)) {
      toast.error("This email not valid.");
      return;
    }
    // password lengtn cheker
    if (password?.length < 6) {
      // console.log(password);
      toast.error("Password must be 6 characters or upper ");
      return;
    }
    // password upper case cheker
    const upperCase = /[A-Z]/;
    if (!upperCase.test(password)) {
      toast.error("Password must be used at least one upper letter.");
      // console.log(password);
      return;
    }
    // password specialCharacter validation
    const specialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
    if (!specialCharacter.test(password)) {
      toast.error("Password must be used at least one special character.");
      // console.log(password);
      return;
    }
    // console.log("under");

    userCreate(email, password)
      .then(() => {
        toast.success("Account Create Success");
        navigate(location?.state ? location?.state : "/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="  px-3 md:px-4 text-gray-600">
      <div className="bg-gray-200 p-4 rounded-lg">
        <h1 className="text-4xl my-4   ">Create an account</h1>
        <form onSubmit={handleRegister}>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="p-2 px-3 w-full block bg-white rounded outline-none  border-b-2 border-gray-400"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter Your Email"
              className="p-2 px-3 w-full block bg-white rounded outline-none  border-b-2 border-gray-400"
            />
            {/* password container */}
            <div className="relative bg-red-300">
              <input
                type={show ? "password" : "text"}
                name="password"
                placeholder="Enter Your Password"
                className="p-2 px-3 w-full block bg-white rounded outline-none  border-b-2 border-gray-400"
              />
              {show ? (
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-2 top-2 cursor-pointer p-1"
                >
                  <FaRegEyeSlash></FaRegEyeSlash>
                </span>
              ) : (
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-2 top-2 cursor-pointer p-1"
                >
                  <FaRegEye></FaRegEye>
                </span>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="checkbox" />
              <p>Accept Our Terms and Conditions</p>
            </div>

            <button
              type="submit"
              className="p-2 px-3 w-full  file: rounded outline-none  btn btn-secondary border-none   text-lg"
            >
              Register
            </button>
            {/* dont have an account */}
          </div>
        </form>
        <div className="flex items-center justify-center gap-2 my-4">
          <p>Allready have an account?</p>
          <p className="text-pink-600 hover:underline">
            <Link to="/login">Login</Link>
          </p>
        </div>
        <div>
          <div className="flex justify-center items-center relative">
            <b className="w-full block border-b-2 border-white absolute"></b>
            <p className=" absolute z-10 p-2 bg-gray-200 text-center">Or</p>
          </div>
          <div className="flex gap-3 items-center justify-center my-5">
            <p className="text-2xl ">Login With:</p>
            <MediaLogin></MediaLogin>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
