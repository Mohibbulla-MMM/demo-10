import { useLocation, useNavigate } from "react-router-dom";
import DynamicAuthProvaider from "./DynamicAuthProvaider";
import { toast } from "react-hot-toast";

const MediaLogin = () => {
  const { user, loginGoogle, loginGithub } = DynamicAuthProvaider();
  console.log(user);
  const location = useLocation();
  const navigate = useNavigate();
  // ---------- handle login ---------------
  const handleMediaLogin = (media) => {
    media()
      .then((data) => {
        console.log(data);

        toast.success("Login Success");
        navigate(location?.state ? location?.state : "/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Login Faild");
      });
  };

  return (
    <div>
      <div className="flex gap-3">
        {/* google login popup */}
        <button
          onClick={() => handleMediaLogin(loginGoogle)}
          className="btn btn-sm btn-circle bg-white border-none outline-none overflow-hidden"
        >
          <img src="https://i.ibb.co/9t5N5H3/download.png" alt="" />
        </button>
        {/* github login popup */}
        <button
          onClick={() => handleMediaLogin(loginGithub)}
          className="btn btn-sm btn-circle bg-white border-none outline-none overflow-hidden"
        >
          <img src="https://i.ibb.co/2cpZ1H2/download-1.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default MediaLogin;
