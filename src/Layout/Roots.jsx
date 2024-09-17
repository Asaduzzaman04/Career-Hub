import Navbar from "./../components/Navbar";
import { Outlet } from "react-router-dom";

const Roots = () => {
 

  return (
    <>
      <div className="bg-primary text-accent w-full">
        <Navbar/>
        <Outlet/>
      </div>
    </>
  );
};

export default Roots;
