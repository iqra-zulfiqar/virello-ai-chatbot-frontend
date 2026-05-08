import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Services from "../Components/Services";
import Portfolio from "../Components/Portfolio";
import Pricing from "../Components/Pricing";
import Footer from "../Components/Footer";
import Chatbot from "../Components/Chatbot";
import Contact from "../Components/Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;