import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layout/Roots";
import Home from './../pages/Home';
import Category from "../pages/Category";
import Jobs from './../pages/Jobs';
import Applied from "../pages/Applied";
import Errorpage from "../pages/Errorpage";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Roots/>,
        errorElement : <Errorpage/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : '/Category',
                element : <Category/>
            },
            {
                path : '/AppliedJobs',
                element: <Applied/>
            },
            {
                path : '/jobs',
                element: <Jobs/>
            }
            
        ]
    }
])

export default Router;
