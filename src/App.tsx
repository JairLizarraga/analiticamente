import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

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
