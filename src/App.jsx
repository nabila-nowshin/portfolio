import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import ThemeProvider from "./Provider/ThemeContext";
import Hero from "./components/Hero";
import About from "./components/AboutMe";
import Aos from "aos";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactSection from "./components/ContactSection";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    Aos.init({
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120,
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should
    });
  }, []);
  return (
    <ThemeProvider>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Education></Education>
      <Skills></Skills>
      <Projects></Projects>

      <ContactSection></ContactSection>
      <Footer></Footer>
    </ThemeProvider>
  );
};

export default App;
