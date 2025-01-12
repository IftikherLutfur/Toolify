import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./Components/Root";
import Home from "./Components/Home/Home";
import Calculator from "./Components/Services/Calculator";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
        path:'/',
        element:<Home/>,
      },
      {
        path:"/calculator",
        element:<Calculator/>
      },
    ]
    },
  ]);