import { useParams } from "react-router-dom";
import useJobs from "../hooks/useJobs";

const JobDet = () => {
  const { companyName } = useParams();
  const [job,error] = useJobs();
  if(error) {
    return <p> {error}</p>
  }
  
  let filterData = job.filter((jobs) => jobs.company_name === companyName);
  const [data] = filterData;

  console.log(data);

  return <></>;
};

export default JobDet;

//company_name
//educational_requirement
//experiences
