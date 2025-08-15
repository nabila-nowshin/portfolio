import React from "react";
import Navbar from "./components/Navbar";
import ThemeProvider from "./Provider/ThemeContext";
import Hero from "./components/Hero";

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <h1 className="text-primary">text primary</h1>
      </div>
    </ThemeProvider>
  );
};

export default App;
