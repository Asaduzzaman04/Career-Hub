
const Categorycomp = ({value}) => {

    return (
        <>
             <>
                  <div className="  cursor-pointer rounded-lg hover:bg-[#d3d1d8] hover:text-primary  w-full px-[10%] md:px-[6%] py-[9%] md:py-[10%] flex flex-col justify-center items-start gap-4 bg-[#3d1999] shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:-translate-y-2 transition-all duration-500  md:mx-4 ">
                    <img src={value.icon} alt={value.alt} />
                    <h2 className="capitalize text-2xl font-bold">{value.title}</h2>
                    <p className="font-semibold">{value.jobs}</p>
                  </div>
                </>
        </>
    );
};

export default Categorycomp;