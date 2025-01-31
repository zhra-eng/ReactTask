import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./assets/Components/Home/Home";
import About from "./assets/Components/About/About";
import Portfolio from "./assets/Components/Portfolio/Portfolio";
import Contact from "./assets/Components/Contact/Contact";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./assets/Components/Layout/Layout";
import Notfound from "./assets/Components/Notfound/Notfound";





let x = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index :true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <Notfound/> }
    ],
  },
]);

function App() {
  

  return (
    <>
      <RouterProvider router={x}></RouterProvider>
    </>
  );
}

export default App;
