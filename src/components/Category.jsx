import useCategory from "./../hooks/useCategory";

const Category = () => {
  const [category] = useCategory();

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
        <section className="w-full ">
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4  gap-7  px-[10%]  md:px-[5%]  ">
            {category.map((el) => {
              return (
                <>
                  <div className="cursor-pointer rounded-lg   w-full px-[10%] md:px-[6%] py-[5%] md:py-[10%] flex flex-col justify-center items-start gap-4 bg-[#3d1999] shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:-translate-y-2 transition-all duration-500  md:mx-4 hover:bg-primary">
                    <img src={el.icon} alt={el.alt} />
                    <h2 className="capitalize text-2xl font-bold">{el.title}</h2>
                    <p className="font-semibold">{el.jobs}</p>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default Category;
