
import { Hero } from "../sections/Hero";
import { Footer } from "../layout/Footer";
import { About } from "../sections/About";
import { Projects } from "../sections/Projects";
import { Contact } from "../sections/Contact";

function Home() {
  return (
    <div>
      <main>
        <Hero />
        <About />
        <Projects />
        {/* <Experience />
        <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;