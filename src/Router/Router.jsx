import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layout/Roots";
import Home from "./../pages/Home";

import Applied from "../pages/Applied";
import Errorpage from "../pages/Errorpage";
import Blogs from './../pages/Blogs';
import JobDet from './../pages/JobDet';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/AppliedJobs",
        element: <Applied />,
      },
      {
        path : "/Blogs",
        element : <Blogs/>
      },{
        path : '/jobs/:company_name',
        element : <JobDet/>
      }
     
      
    ],
  },
]);

export default Router;
