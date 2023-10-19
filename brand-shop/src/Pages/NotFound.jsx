import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex  flex-col justify-center items-center gap-4 w-full h-screen p-4">
      <figure>
        <img src="https://i.ibb.co/RzFbyb7/oppx.png" alt="" />
      </figure>
      <h1 className="text-3xl -mt-16">This URL not valid</h1>
      <p className="text-xl ">No content here</p>
      <div>
        <Link className="btn btn-secondary outline-none border-none">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
