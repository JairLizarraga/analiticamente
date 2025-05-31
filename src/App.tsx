import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Home />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
