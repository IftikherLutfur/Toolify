import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./Components/Root";
import Home from "./Components/Home/Home";
import Calculator from "./Components/Services/Calculator";
import ToDoList from "./Components/Services/ToDoList";
import Counter from "./Components/Services/Counter";
import DrumKit from "./Components/Services/DrumKit";

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
      {
        path:'/toDoList',
        element:<ToDoList/>
      },
      {
        path:'/counter',
        element:<Counter/>
      },
      {
        path:'/drumKit',
        element:<DrumKit/>
      },
    ]
    },
  ]);