import useCategory from "../hooks/useCategory";
import Categorycomp from "../components/categorycomp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


gsap.registerPlugin(ScrollTrigger)

const Category = () => {
  const [category] = useCategory();
 useGSAP(() =>{
  gsap.from(".category-anime",{
    y:500,
    delay: 0.5,
   scrollTrigger: {
      trigger: "category-anime",
      scroller: "body",
      scrub: 3,
      start: "top 5%",
      end: "top -100%",
    },

  })
 })

  return (
    <>
      <main className=" flex flex-col justify-center items-center  overflow-hidden gap-10 px-[2%] md:py-[5%] py-6">
        <section className="flex flex-col gap-6 justify-center items-center flex-wrap">
          <h2 className="text-4xl capitalize font-semibold">
            Job Category List
          </h2>
          <p className="font-semibold text-lg text-center">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </section>
        <section className="w-full mt-16">
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4  gap-7  px-[10%]  md:px-[5%]  category-anime ">
            {category.map((el) => <Categorycomp key={el.id} value={el}/>)}
          </div>
        </section>
      </main>
    </>
  );
};

export default Category;
