import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layout/Roots";
import Home from "./../pages/Home";

import Applied from "../pages/Applied";
import Errorpage from "../pages/Errorpage";
import Blogs from './../pages/Blogs';

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
      },
     
      
    ],
  },
]);

export default Router;
