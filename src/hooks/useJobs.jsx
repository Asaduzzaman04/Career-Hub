import { useEffect, useState } from "react";


const useJobs = () => {
    const jobsUrl = './Jobs.json'
    const [job, setJobs] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
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
        }finally{
            setLoading(false)
        }
        }
        jobData()
    },[])
    return [job, error,loading];
};

export default useJobs;

