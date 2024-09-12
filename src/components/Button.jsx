import { NavLink } from "react-router-dom";

const Button = () => {
    return (
        <>
            <button className="capitalize   bg-accent text-button px-1.5 py-2 rounded-md transition-all duration-300 active:scale-95 hover:shadow-[5px_5px_rgba(247,_247,_247,_0.3),_10px_10px_rgba(247,_247,_247,_0.2)]">
            <NavLink to="/Jobs">Start Applying</NavLink>
            </button>
        </>
    );
};

export default Button;