import { useParams } from "react-router-dom";
import useJobs from "../hooks/useJobs";

const JobDet = () => {
  const { companyName } = useParams();
  const [Jobs] = useJobs();

  const jobsFilter = Jobs.filter((el) => el.company_name === companyName);

const [obj] = jobsFilter
console.log(obj);
  return (
    <>

    </>
  );
};

export default JobDet;
