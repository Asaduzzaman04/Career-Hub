import { useEffect, useState } from "react";


const useJobs = () => {
    const jobsUrl = '../../public/Jobs.json'
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

