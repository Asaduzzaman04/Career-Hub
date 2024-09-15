import { useState } from "react";
import useJobs from "../hooks/useJobs";
import JobsCard from "../components/JobsCard";

const Jobs = () => {
const [view ,setView] = useState(false)
const [job,error] = useJobs()
if(error){
    return <p>loading...</p>
}



const viewIngCard = view ? job : job.slice(0,4)

    return (
        <>
            <main className="overflow-hidden  items-center mt-5 px-[2%] md:py-[3%] py-6 ">
                <section className="flex flex-col my-5 justify-center items-center gap-10">
                    <h2 className=" capitalize  font-semibold text-4xl lg:7xl">featured jobs</h2>
                    <p className=" font-semibold text-lg text-center">explore thousands of job opportunities with all the information you need. Its your future</p>
                </section>
                <section>
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 md:py-[5%] py-6 ">
                        {viewIngCard.map((el) => (<JobsCard key={el.id} value={el}/>))}
                    </div>
                    <div className="px-[2%]">
                        {
                            view ? <button onClick={() => setView(!view)} className="capitalize bg-accent text-button px-5 py-2 font-bold rounded-md transition-all duration-300 active:scale-95 hover:shadow-[3px_3px_rgba(247,_247,_247,_0.3)] w-fit">see less</button> : <button onClick={() => setView(!view)} className="capitalize bg-accent text-button px-5 py-2  font-bold  rounded-md transition-all duration-300 active:scale-95 hover:shadow-[3px_3px_rgba(247,_247,_247,_0.3)] w-fit"> see all jobs</button>
                        }
                    </div>
                </section>
            </main>
        </>
    );
};

export default Jobs;