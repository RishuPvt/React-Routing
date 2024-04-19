import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import User from "./components/User.jsx";
import Footer from "./components/Footer.jsx";
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
        path: "contact",
        element: <Contact />,
      },
      {
        path: "user",
        element: <User />,
      },
    ],
  },
]);

//ANOTHER WAY OF ROUTING

/* const router =createBrowserRouter(
  createRoutesFromElements(
<Route path="/" Element={<Layout />}>
  <Route path='/' element={<Home />}/>
  <Route path='/about/Campus' element={<About/>}/>
      <Route path='/campus' element={<Campus/>}/>
  </route>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/user' element={<User/>}/>
</Route>
  )
) */


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
