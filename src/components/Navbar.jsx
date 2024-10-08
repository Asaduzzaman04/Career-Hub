import { NavLink } from "react-router-dom";
import { IoCloseCircle } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  let [open, setOpen] = useState(false);

  const links = [
    {
      id: 1,
      path: "/",
      name: "home",
      class: "bdr",
    },
    {
      id: 2,
      path: "/AppliedJobs",
      name: "applied jobs",
      class: "bdr",
    },
    {
      id: 3,
      path: "/Blogs",
      name: "blog",
      class: "bdr",
    },
  ];

  return (
    <>
      <nav className=" w-full shadow-2xl shadow-blue-500/20 overflow-hidden bg-[#3d1999] flex justify-between lg:justify-around items-center text-2xl md:text-xl  px-4 py-6 capitalize font-semibold ">
       
          {/* -----icon----- */}
          <div className="logo ">
            <span className="text-3xl text-">c</span>areer{" "}
            <span className="text-3xl text-">h</span>ub
          </div>

          {/* -----NavLinks----- */}
          <ul className=" hidden md:flex justify-between items-center gap-16  ">
            {links.map((e) => (
              <button
                key={e.id}
                type="button"
                className={`${e.class} capitalize `}
              >
                <NavLink to={e.path}>{e.name}</NavLink>
              </button>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button />
          </div>
    
        {/* -----sm:device-hambarger----- */}
        <div className="md:hidden text-4xl" onClick={() => setOpen(!open)}>
          <RxHamburgerMenu className=" transition-all duration-300 active:scale-50 " />
        </div>

        <ul
          className={`flex flex-col bg-[#3d1999] transition-all ease-linear duration-300  justify-center items-center md:hidden absolute  left-0 z-50  w-full h-full gap-16 ${
            open ? "top-[0%]" : "top-[-100%]"
          } `}
        >
          <div
            className="text-5xl   rounded-full transition-all duration-300 active:scale-50"
            onClick={() => setOpen(!open)}
          >
            <IoCloseCircle className="bg-transparent text-accent" />
          </div>
          {links.map((e) => (
            <NavLink
              key={e.id}
              to={e.path}
              className={e.class}
              onClick={() => setOpen(!open)}
            >
              {e.name}
            </NavLink>
          ))}
          <div onClick={() => setOpen(!open)}>
            <Button />
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
