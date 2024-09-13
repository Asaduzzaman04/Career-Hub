

const JobsCard = ({value}) => {
    console.log(value);
    return (
        <>
            <section>
            {value.company_name
            }
            </section>
        </>
    );
};

export default JobsCard;