import { useParams } from "react-router-dom";
import useJobs from "../hooks/useJobs";
import Footer from './../components/Footer';

const JobDet = () => {
  const  {companyName}  = useParams();
  const [job,error] = useJobs();
  if(error) {
    return <p> loading....</p>
  }
  
  let filterData = job.filter((jobs) => jobs.company_name === companyName);
console.log(filterData);

  return <>
    <main>
      <section className="text-5xl text-center">
        job details page
      </section>
      <section>
        <Footer/>
      </section>
    </main>
  </>;
};

export default JobDet;

//company_name
//educational_requirement
//experiences
