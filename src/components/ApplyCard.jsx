import { NavLink } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import { HiCurrencyDollar } from "react-icons/hi";

const ApplyCard = ({ value }) => {
  const {
    job_title,
    job_address,
    salary_range,
    image_link,
    job_type,
    company_name,
  } = value;

  return (
    <>
      <main>
        <section className=" overflow-hidden z-30 flex flex-col md:flex-row  justify-around  items-center border-2 hover:scale-105  px-5 py-4 gap-10 before:transition-all duration-1000 before:ease-linear hover:text-primary  rounded-xl relative  before:absolute before:w-10  before:h-10   hover:before:w-full hover:before:h-full  hover:before:bg-[#dfdfdf]  before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:-z-20 mt-7 group">
          {/* -----company-image---- */}
          <div className=" px-10 py-10 rounded-lg ">
            <img src={image_link} alt={company_name} className="w-36" />
          </div>

          {/* -----job-description----- */}
          <div className=" flex flex-col justify-center items-start   gap-4">
            <h2 className="text-2xl font-bold">{job_title}</h2>
            <p className="text-xl font-semibold ">{company_name}.</p>
            <p className="group-hover:bg-primary group-hover:text-accent bg-accent text-button px-3 py-2 font-bold rounded-md transition-all duration-300 active:scale-95  w-fit shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] capitalize">
              {job_type}
            </p>
            <p className="flex justify-center items-center font-semibold text-xl">
              <ImLocation2 />
              {job_address}
            </p>
            <p className="flex justify-center items-center font-semibold text-xl">
              <HiCurrencyDollar />
              {salary_range}
            </p>
          </div>
          {/* -----details-button----- */}
          <div>
            <NavLink to={`/Jobs/${company_name}`}>
              <button className=" capitalize group-hover:bg-primary group-hover:text-accent bg-accent text-button px-5 py-2 font-bold rounded-md transition-all duration-300 active:scale-95 hover:shadow-[3px_3px_rgba(247,_247,_247,_0.3)] w-fit">
                view details
              </button>
            </NavLink>
          </div>
        </section>
      </main>
    </>
  );
};

export default ApplyCard;
