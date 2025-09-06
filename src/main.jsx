import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  RouterProvider,
  BrowserRouter,
  createBrowserRouter,
} from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Watch from "./components/Home/AdSection";
import store from "./app/store"
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import PostAd from "./components/PostAd";
import ViewAds from "./components/ViewAds";
import ViewAd from "./components/ViewAd";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "watch",
        element: <Watch />,
      },
      {
        path: "cart",
        element: <Cart/>,
      },
      {
        path: "postAd",
        element: <PostAd/> ,
      },
      {
        path: "viewAds",
        element: <ViewAds/>,
      },
       {
        path: "/ViewAd/:id",
        element: <ViewAd/>
       },
       {
        path: "dashboard",
        element: <Dashboard/>
       },
       {
        path: "profile",
        element: <Profile/>
       },
       {
        path:"/blog/:id",
        element: <Blog/>
       }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
