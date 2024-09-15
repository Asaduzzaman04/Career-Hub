import Navbar from "./../components/Navbar";
import { Outlet } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const Roots = () => {
  const handleScroll = (target) => {
    gsap.to(window, { duration: 1.5, scrollTo: target });
  };

  return (
    <>
      <div className="bg-primary text-accent w-full ">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default Roots;
