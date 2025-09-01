import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import ParamsComp from "./Components/ParamsComp";
import Courses from "./Components/Courses";
import MockTest from "./Components/MockTest";
import Reports from "./Components/Reports";
import NotFound from "./Components/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    ),
    children:[
      {
        path:"courses",
        element:<Courses/>
      },{
        path:"mock-tests",
        element:<MockTest/>
      },{
        path:"reports",
        element:<Reports/>
      }
    ]
  },
  {
    path: "/student/id:",
    element: (
      <div>
        <Navbar />
        <ParamsComp />
      </div>
    ),
  },
  {
    path: "*",
    element:<NotFound />
    
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
