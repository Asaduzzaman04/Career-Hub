import { ImLocation2 } from "react-icons/im";
import { HiCurrencyDollar } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
const JobsCard = ({ value }) => {

  const {
    company_name,
    image_link,
    job_address,
    job_title,
    job_type,
    salary_range, 
  } = value;
  

  return (
    <>
      <section className=" lg:max-w-[70%] cursor-pointer rounded-lg bg-[#d3d1d8] text-primary   px-[10%] md:px-[6%] py-[7%] md:py-[5%] flex flex-col justify-center items-start gap-3 b shadow-[3px_3px_5px_0px_rgba(109,40,217)] hover:-translate-y-2 transition-all duration-700  md:mx-4 group">
        <img src={image_link} alt={company_name} className=" w-32" />
        <h2 className="font-bold text-2xl capitalize ">{job_title}</h2>
        <button className="border px-2 py-1 rounded-md font-semibold my-2   bg-primary text-accent group-hover:border-none   ">
          {job_type}
        </button>
        <div className="flex flex-col gap-4 mt-5 justify-center items-start">
          <div className="flex  gap-2 justify-center text-center">
            <ImLocation2 className="text-xl " />
            <h3 className="font-medium">{job_address} </h3>
          </div>
          <div className="flex gap-2 justify-center text-center">
            <HiCurrencyDollar className="text-xl" />
            <h3 className="font-medium">{salary_range}</h3>
          </div>
          {/* -----job-details-button----- */}
          <NavLink to={`/Jobs/${company_name}`}>
            <button className="  border px-2 py-1 rounded-md font-semibold my-2 text-xl flex justify-center items-center group transition-all duration-200 ease-linea bg-primary text-accent group-hover:border-none group-hover:shadow-[2px_2px_0px_0px_rgba(109,40,217)]">
              view details
            </button>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default JobsCard;

//     company_name,
//     image_link,
//     id,
//     job_address,
//     job_title,
//     job_type,
//   salary_range,
