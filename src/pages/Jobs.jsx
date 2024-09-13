// import { useState } from "react";
import useJobs from "../hooks/useJobs";
import JobsCard from "../components/JobsCard";

const Jobs = () => {
const [jobs] = useJobs()
// const [view ,setView] = useState(false)
// const viewIngCard = view ? jobs : jobs.slice(0,4)

    return (
        <>
            <main>
                <section>
                    <div>
                        {jobs.map((el) => (<JobsCard key={el.id} value={el}/>))}
                    </div>
                </section>
            </main>
        </>
    );
};

export default Jobs;