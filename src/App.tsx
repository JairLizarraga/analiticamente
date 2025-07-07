import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import InstagramWidget from "./components/InstagramWidget/InstagramWidget";
import Contacto from "./components/Contacto/Contacto";
import './App.css'; // Make sure to import App.css if not already
import Footer from "./components/Footer/Footer";
import ScrollButtons from "./components/ScrollButtons/ScrollButtons";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <ScrollButtons />
      <main className="container">
        <Home />
        <Services />
        <About />
        <InstagramWidget />
        <Contacto />
      </main>
      <Footer />
    </>
  );
};

export default App;
