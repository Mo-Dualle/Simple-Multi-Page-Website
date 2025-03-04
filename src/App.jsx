import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Post from "./pages/Post.jsx";
import Navbar from "./pages/Navbar.jsx"; 
import Footer from "./pages/Footer.jsx";
import "./App.css"; // Add global styles

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="app-container">
        <div className="content">
          <Routes>
            <Route path="/" element={
              <>
                <Home title="Head Of Office" description="Don't enter the office without permission" />
                <Home title="Management Office" description="Welcome, we are responsible for the management of the office" />
                <Home title="Finance Office" description="Avoid any financial transaction without permission" />
              </>
            } />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/post" element={<Post />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
