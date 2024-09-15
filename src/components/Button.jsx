import { NavLink } from "react-router-dom";

const Button = () => {
    return (


        <>
            <button className="capitalize   bg-accent text-button px-1.5 py-2 rounded-md transition-all duration-300 active:scale-95 hover:shadow-[4px_4px_rgba(247,_247,_247,_0.3)]">
            <NavLink>Start Applying</NavLink>
            </button>
        </>
    );
};

export default Button;