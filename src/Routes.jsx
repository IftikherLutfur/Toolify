import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./Components/Root";
import Home from "./Components/Home/Home";
import Calculator from "./Components/Services/Calculator";
import ToDoList from "./Components/Services/ToDoList";
import Counter from "./Components/Services/Counter";
import DrumKit from "./Components/Services/DrumKit";
import StopWatch from "./Components/Services/StopWatch";
import TextTool from "./Components/Services/TextTool";
import QouteGenerator from "./Components/Services/QouteGenerator";
import WeatherUpdate from "./Components/Services/WeatherUpdate";
import ConverterdTool from "./Components/Services/ConverterdTool";
import Currency from "./Components/Services/Currency";

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
      {
        path:'/stopWatch',
        element:<StopWatch/>
      },
      {
        path:'/textTool',
        element:<TextTool/>
      },
      {
        path:'/quote',
        element:<QouteGenerator/>
      },
      {
        path:'/weather',
        element:<WeatherUpdate/>
      },
      {
        path:'/convertTool',
        element:<ConverterdTool/>
      },
      {
        path:'/currency',
        element:<Currency/>
      }
    ]
    },
  ]);