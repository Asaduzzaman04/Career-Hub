
import { useGSAP } from '@gsap/react';
import ApplyCard from '../components/ApplyCard';
import useApply from '../hooks/useApply';
import Footer from './../components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

const Applied = () => {
    const apply = useApply((state) => state.apply)

 
    useGSAP(() => {
        gsap.from(".applied-jobs", {
            y:500,
    delay: 0.5,
   scrollTrigger: {
      trigger: "applied-jobs",
      scroller: "body",
      scrub: 3,
      start: "top 5%",
      end: "top 100%",
    },
        })
    })

    return (
        <>
        <main className='py-16'>
            <section className='text-center  capitalize text-4xl pt-5 pb-16 underline font-bold '>
                 <h1 >applied jobs</h1>
            </section>
            <section className=' overflow-hidden px-[6%] md:px-[1%] text-center flex flex-col justify-center '>
               <div  className='applied-jobs'>
                {apply.map((applys) => <ApplyCard key={applys.id} value={applys}/>)}
               </div>
            </section>
            <section>
                <Footer/>
            </section>
        </main>  
        </>
    );
};

export default Applied;