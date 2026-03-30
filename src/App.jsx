import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { AllProjects } from "./pages/AllProjects";
import { Navbar } from "@/layout/Navbar";
import ScrollToHash from "@/components/ScrollToHash";

function App() {
  return (
    // <div className="min-h-screen overflow-x-hidden">
    //   <Navbar />
    //   <main>
    //     <Hero />
    //     <About />
    //     <Projects />
    //     {/* <Experience />
    //     <Testimonials /> */}
    //     <Contact />
    //   </main>
    //   <Footer />
    // </div>
    <div className="min-h-screen overflow-x-hidden">
      <Router>
        <ScrollToHash />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </Router>
    </div> 
  );
}

export default App;
