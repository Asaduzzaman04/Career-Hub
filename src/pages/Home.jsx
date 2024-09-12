import { NavLink } from "react-router-dom";
import Category from './Category';
import Jobs from './Jobs';
const text = {
    textOne : 'one step closer to your',
    spanText : 'dream job',
    description : 'Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.'
}

const Home = () => {
  return (
    <>
      {/* -----hero-section----- */}
      <header className="flex  flex-col-reverse  md:flex-row  justify-end items-center md:justify-center px-[5%] md:px-[3%] lg:px-[2%]  gap-10 py-10 md:py-0">

        <section className=" font-bold py-10 flex flex-col  justify-center items-start  gap-10 md:basis-[90%]  lg:basis-[60%] xl:basis-[50%] pl-3 " >
            <h2 className="text-5xl md:text-6xl lg:text-6xl capitalize ">{text.textOne} <span className="text-secondary drop-shadow-[1px_1px_1px_#dfdfdf] ">{text.spanText}</span></h2>
            <p className="font-semibold lg:pr-[15%] text-xl leading-9">{text.description}</p>

            <button className="capitalize bg-secondary text-accent px-6 py-3 text-xl  rounded-md transition-all duration-300 active:scale-95 hover:shadow-[4px_4px_rgba(88,_14,_246,_0.3),_6px_6px_rgba(88,_14,_246,_0.3)] w-fit">
            <NavLink to="/Jobs">get jobs</NavLink>
            </button>
            </section>

        <section className=" flex justify-center items-center  w-[80%] md:w-[100%] lg:w-[70%] xl:w-[40%] ">
            <img className="drop-shadow-[5px_5px_3px_#dfdfdf] w-full
           " src="https://i.postimg.cc/528XPLwV/hero-Image.png" alt="" />
        </section>
      </header>
      {/* -----Category-section----- */}
      <div>
        <Category/>
      </div>
      {/* ------featured-jobs----- */}
      <div>
        <Jobs/>
      </div>
      {/* -----footer-section----- */}
      <footer></footer>
    </>
  );
};

export default Home;
