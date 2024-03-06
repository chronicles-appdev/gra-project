import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/services";

const App = () => {

  const router = createBrowserRouter (
    createRoutesFromElements(
     <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/services" element={<Services />} />
     </Route>
    
    )
  )
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
