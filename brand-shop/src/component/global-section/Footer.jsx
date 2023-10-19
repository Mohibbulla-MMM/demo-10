import { NavLink } from "react-router-dom";

const Footer = () => {
  const menu = (
    <>
      {/* ----------home---------- */}
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "btn btn-sm rounded-none capitalize font-semibold text-black bg-gray-100 hover:bg-gray-100 text-sm hover:underline "
              : "btn btn-sm rounded-none capitalize  bg-gray-100 hover:bg-gray-100 text-gray-500 text-sm hover:underline"
          }
        >
          home
        </NavLink>
      </li>

      {/* ----------add product---------- */}
      <li>
        <NavLink
          to="/add_product"
          className={({ isActive }) =>
            isActive
              ? "btn btn-sm rounded-none capitalize font-semibold text-black bg-gray-100 hover:bg-gray-100 text-sm hover:underline"
              : "btn btn-sm rounded-none capitalize   bg-gray-100 hover:bg-gray-100 text-gray-500 text-sm hover:underline"
          }
        >
          Add Product
        </NavLink>
      </li>

      {/* ----------login---------- */}
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "btn btn-sm rounded-none capitalize font-semibold text-black bg-gray-100 hover:bg-gray-100 text-sm hover:underline"
              : "btn btn-sm rounded-none capitalize text-gray-500 bg-gray-100 hover:bg-gray-100 text-sm hover:underline "
          }
        >
          login
        </NavLink>
      </li>

      {/* ----------login---------- */}
      <li>
        <NavLink
          to="/my_card"
          className={({ isActive }) =>
            isActive
              ? "btn btn-sm rounded-none capitalize font-semibold text-black bg-gray-100 hover:bg-gray-100 text-sm hover:underline"
              : "btn btn-sm rounded-none capitalize text-gray-500 bg-gray-100 hover:bg-gray-100 text-sm hover:underline"
          }
        >
          My card
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-gray-100">
      <footer className="max-w-[1200px] mx-auto px-3 sm:px-5 mt-8 py-8 footer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <aside>
          <div>
            <figure>
              <img
                className="w-[150px] rounded-lg"
                src="https://i.ibb.co/0jXq6mn/Screenshot-17.png"
                alt=""
              />
            </figure>
          </div>

          <p>
            We collaborate your shopping experience with m3 store.  
          </p>
        </aside>

        <nav>
          <header className="footer-title text-xl text-gray-700  opacity-100">
            Quick link
          </header>
          <ul>{menu}</ul>
        </nav>

        <nav>
          <header className="footer-title text-xl  text-gray-700  opacity-100">
            Company
          </header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>

        <nav>
          <header className="footer-title text-xl text-gray-700  opacity-100">
            Legal
          </header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>

      <div className="border-t-2 p-8 text-center ">
        © 2023 Your Company Name. All rights reserved. | Designed by{" "}
        <span className="italic">M3 store</span> |
        <span className="hover:underline">Privacy Policy</span>|
        <span className="hover:underline">Terms of Service</span>
      </div>
    </div>
  );
};

export default Footer;
