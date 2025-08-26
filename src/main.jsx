import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, BrowserRouter, createBrowserRouter } from "react-router-dom";
import "./index.css"; 
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";

const router = createBrowserRouter([
  {
    path: '/',
    element : <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "shop",
        element: <Shop/>
      },
      {
        path: "blog",
        element: <Blog/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
