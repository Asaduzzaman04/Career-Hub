import { useEffect, useState } from "react";


const useJobs = () => {
    const jobsUrl = 'http://localhost:5173/public/jobs.json'
    const [Jobs, setJobs] = useState([])
    const [error, setError] = useState([])
    useEffect(()=> {
        const jobData = async () => {
        try{
            const response = await fetch(jobsUrl)
            if(response.ok === false){
                throw new Error("opps! page not found")
            }
            const data = await response.json();
            setJobs(data)
        }catch(err){
            setError(err)
        }
        }
        jobData()
    },[])
    return [Jobs, error];
};

export default useJobs;