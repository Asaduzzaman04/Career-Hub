import { useParams } from "react-router-dom";
import Data from "./../hooks/Data";
import Footer from "./../components/Footer";
import useApply from "../hooks/useApply";

import { ToastContainer, toast , } from 'react-toastify';


const JobDet = () => {
  const { companyName } = useParams();
  const addJobsApply = useApply((state)=> state.addJobsApply)
  
  const items = Data.filter((e) => e.company_name === companyName);


  const [data] = items;
  const {
    experiences,
    educational_requirement,
    job_title,
    job_description,
    job_responsibility,
    job_address,
    salary_range,
    image_link,
    job_type,
    company_name,
  } = data;
  const handleApplied = (data) => {
    addJobsApply(data)
    toast("Application submitted")
  }
  return (
    <>
      <main>
        <div className=" py-16 w-full">
          <div className="container flex items-center justify-center px-4 text-center md:px-6">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {job_title}
              </h1>
              <div className="inline-flex items-center gap-2 text-sm font-medium md:gap-4">
                <p className="text-gray-500">at</p>
                <img
                  src={image_link}
                  width="120"
                  height="40"
                  alt={companyName}
                  className="aspect-[3/1] overflow-hidden rounded-lg object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container grid gap-10 px-4 py-8 text-base md:gap-16 md:px-6 lg:grid-cols-4 lg:gap-12 xl:gap-20">
          <div className="space-y-4 lg:col-start-2 lg:col-span-3 xl:space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                {job_title}
              </h2>
              <p className="text-gray-400 border w-fit px-2 py-1 rounded-md  ">
                {job_type}
              </p>
            </div>
            <div className="space-y-4 text-lg/relaxed lg:space-y-6 xl:text-xl/relaxed">
              <div>
                <h3 className="text-xl font-semibold">Description</h3>
                <p className="mt-4">{job_description}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Educational Requirements:
                </h3>
                <p className="mt-4">{educational_requirement}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Requirements</h3>
                <ul className="list-disc list-inside mt-4">
                  <li>{experiences}</li>
                  <li>Proficient in software </li>
                  <li>Experience with user interface design</li>
                  <li>Strong understanding of usability principles</li>
                  <li>{job_responsibility}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-4 border-gray-200  border-4    rounded-lg  lg:col-start-1 lg:row-start-1 lg:space-y-6 dark:border-gray-800">
            <div className="p-4">
              <h3 className="text-xl font-semibold">Location</h3>
              <p className="text-sm font-normal">{job_address}</p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Salary Range</h3>
              <p className="text-sm font-normal">{salary_range}</p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Application Deadline</h3>
              <p className="text-sm font-normal">{`10 nov 2024`}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row lg:col-start-4 lg:gap-4 justify-center">

            <button onClick={() => handleApplied(data)}
              className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-bold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 bg-gray-50 text-gray-900 hover:bg-gray-50/90  active:scale-95 transition-all duration-200 
          hover:shadow-[3px_3px_rgba(247,_247,_247,_0.3)] "
            >
              Apply for this job
            </button>
            <ToastContainer/>
       
          </div>
        </div>
        <div className="container grid gap-10 px-4 py-8 text-base md:gap-16 md:px-6 lg:grid-cols-4 lg:gap-12 xl:gap-20">
          <div className="space-y-4 lg:col-start-1 lg:col-span-3 xl:space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                {company_name} .
              </h2>
              <div className="inline-flex items-center gap-2 text-sm font-medium md:gap-4">
                <img
                  src={image_link}
                  width="150"
                  height="50"
                  alt="Logo"
                  className="aspect-[3/1] overflow-hidden rounded-lg object-contain object-center"
                />


                <button className="text-gray-500 underline dark:text-gray-400">
                  {" "}
                  Visit Website..
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* -----footer-section----- */}
        <div className="mt-4">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default JobDet;
