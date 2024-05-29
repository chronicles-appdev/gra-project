import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Root from "./routes/root";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/ContactPage";
import Services from "./pages/services";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;