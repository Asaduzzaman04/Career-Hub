import { NavLink } from "react-router-dom";
import Jobs from './Jobs';
import Category from './../components/Category';


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
            <NavLink >get jobs</NavLink>
            </button>
            </section>

        <section className="relative z-20 flex justify-center items-center  w-[80%] md:w-[100%] lg:w-[70%] xl:w-[40%]  ">
            <img className=" rounded-b-[40%]  drop-shadow-[5px_-2px_3px_#3d1999] w-full
           " src="https://i.postimg.cc/528XPLwV/hero-Image.png" alt="" />

           {/* -----svg----- */}
           <svg className="absolute -z-40 animate-pulse"  viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#3d1999" d="M45.6,-46.4C61.8,-40.8,79.3,-29,83.5,-13.5C87.7,2,78.5,21,66.6,35.3C54.6,49.6,39.8,59.3,24.1,64.1C8.3,69,-8.5,69.2,-22.3,63.3C-36.1,57.4,-47,45.4,-56.3,31.4C-65.7,17.5,-73.5,1.6,-70.6,-12C-67.7,-25.6,-54,-36.9,-40.5,-42.9C-26.9,-48.9,-13.5,-49.7,0.6,-50.5C14.7,-51.3,29.5,-52,45.6,-46.4Z" transform="translate(100 100)" />
</svg>
        </section>
      </header>
     {/* -----main-section----- */}
     <main className="px-[5%] md:px-[3%] lg:px-[2%]">
       {/* -----Category-section----- */}
       <div>
      <Category/>
      </div>
      {/* ------featured-jobs----- */}
      <div>
        <Jobs/>
      </div>
     </main>
      {/* -----footer-section----- */}
      <footer>

      </footer>
      
    </>
  );
};

export default Home;
