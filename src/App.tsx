import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import InstagramWidget from "./components/InstagramWidget/InstagramWidget";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import WatsonAssistant from "./components/WatsonAssistant/WatsonAssistant";
import './App.css'; // Make sure to import App.css if not already

const App: React.FC = () => {
  return (
    <>
      <Header />
      <WatsonAssistant />
      <main className="container">
        <Home />
        <Services />
        <About />
        <InstagramWidget />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
