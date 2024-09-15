import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { SiGlassdoor } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <section className="px-[2%] md:px-[8%] md:py-[3%] py-6 bg-primary text-accent gray-50 sm:pt-16 lg:pt-24">
        <div className=" mx-auto sm:px-6  ">
          <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
              <h1 className=" capitalize text-xl font-bold">
                <span className="text-3xl">c</span>areer{" "}
                <span className="text-3xl">h</span>ub
              </h1>

              <p className="text-base  leading-relaxed text-accent mt-7">
                There are many variations of passages of Lorem Ipsum , but the
                majority have suffered alteration in some form.
              </p>

              <ul className="flex items-center space-x-3 mt-9">
                <li>
                  <a
                    href="#"
                    title=""
                    className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-10 h-10 hover:bg-blue-600 focus:bg-blue-600"
                  >
                    <FaSquareXTwitter className="text-xl" />
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-10 h-10 hover:bg-blue-600 focus:bg-blue-600"
                  >
                    <FaFacebook className="text-xl" />
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-10 h-10 hover:bg-blue-600 focus:bg-blue-600"
                  >
                    <SiGlassdoor className="text-xl" />
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-10 h-10 hover:bg-blue-600 focus:bg-blue-600"
                  >
                    <FaLinkedinIn className="text-xl" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold tracking-widest text-accent uppercase">
                Company
              </p>

              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-gray-400 transition-all duration-200 hover:text-blue-600 focus:text-blue-600 capitalize"
                  >
                    {" "}
                    About us{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-gray-400 transition-all duration-200 hover:text-blue-600 focus:text-blue-600 capitalize"
                  >
                    {" "}
                    works{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-gray-400 transition-all duration-200 hover:text-blue-600 focus:text-blue-600 capitalize"
                  >
                    {" "}
                    latest news{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-gray-400 transition-all duration-200 hover:text-blue-600 focus:text-blue-600 ca"
                  >
                    {" "}
                    Career{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold tracking-widest text-accent uppercase">
              Support
              </p>

              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-gray-400 transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {" "}
                    Help Desk{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-gray-400 transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {" "}
                    Become a Partner{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-gray-400 transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {" "}
                    Sales{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-gray-400 transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {" "}
                    Developers{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Subscribe to newsletter
              </p>

              <form className="mt-6">
                <div>
                  
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="block w-full p-4 bg-accent placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md focus:outline-none text-primary focus:border-blue-600 caret-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  className=" mt-4 capitalize bg-accent text-button px-5 py-2  font-bold  rounded-md transition-all duration-300 active:scale-95 hover:shadow-[3px_3px_rgba(247,_247,_247,_0.3)] w-fit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <hr className="mt-16 mb-10 border-gray-200" />

          <p className="text-sm text-center text-gray-600">
            © Copyright 2021, All Rights Reserved by Career Hub
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
