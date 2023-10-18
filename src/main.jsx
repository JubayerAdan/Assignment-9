import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Layout/Main.jsx";
import Home from "./components/Home/Home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import FeaturedDetails from "./components/FeaturedDetails/FeaturedDetails.jsx";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs.jsx";
import { getShoppingCart } from "./utilites/fakedb.js";
import Statistics from "./components/Statistics/Statistics.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: ":id",
        element: <FeaturedDetails></FeaturedDetails>,
        loader: async ({ params }) => {
          const res = await fetch("jobs.json");
          const data = await res.json();
          const tobj = data.find((obj) => obj.id == params.id); // Convert to string for comparison
          console.log("Tobj:", tobj);
          return tobj;
        },
      },
      {
        path: "applied",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
