import { useEffect, useState } from "react";


const useJobs = () => {
    const jobsUrl = 'http://localhost:5173/public/jobs.json'
    const [job, setJobs] = useState([])
    const [error, setError] = useState('')
    useEffect(()=> {
        const jobData = async () => {
        try{
            const response = await fetch(jobsUrl)
            if(response.ok === false){
                throw new Error("opps! page not responding")
            }
            const data = await response.json();
            setJobs(data)
        }catch(err){
            setError(err)
        }
        }
        jobData()
    },[])
    return [job, error];
};

export default useJobs;

