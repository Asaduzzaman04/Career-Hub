
import { NavLink } from 'react-router-dom';

const Errorpage = () => {
    return (
        <>
            <section className=" flex justify-center items-center bg-white dark:bg-gray-900 h-[100vh] w-full">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 text-secondary">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
            <p className="mb-4 text-lg font-light text-gray-500 ">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
            <NavLink to="/">
            <a href="#" className="inline-flex text-white bg-primary-600 hover:bg-primary-800 ring-4 focus:outline-none ring-primary-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4 ">Back to Homepage</a>
            </NavLink>
        </div>   
    </div>
</section>
        </>
    );
};

export default Errorpage;