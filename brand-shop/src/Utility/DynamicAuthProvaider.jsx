import { useContext } from "react";
import { AuthContext } from "../component/AuthProvaider";

const DynamicAuthProvaider = () => {
  const all = useContext(AuthContext);
  return all;
};

export default DynamicAuthProvaider;
