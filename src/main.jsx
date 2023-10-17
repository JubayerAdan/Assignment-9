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

          return data;
          //   if (res.ok) {
          //     const data = await res.json();
          //     const tobj = data.find((obj) => obj.id === params.id); // Access the 'id' property of the params object
          //     return tobj;
          //   } else {
          //     // throw a new Error("Failed to fetch data");
          //     console.log("err");
          //     return null;
          //   }
          // } catch (error) {
          //   console.error("Error fetching data:", error);
          //   return null; // Return null in case of an error or when res.ok is false
          // }
        },
      },
      {
        path: "applied",
        element: <AppliedJobs></AppliedJobs>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
