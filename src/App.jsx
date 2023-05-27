import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel";
import Testimoni from "./components/Testimoni";
import Support from "./components/Support";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div
      className="h-screen bg-Hero bg-cover
      font-[Poppins] md:bg-top bg-center" >
      <Navbar />
      <Hero />
      <About />
      <div className="bg-Hero bg-cover ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-3 mt-10">
          <h1 className="lg:text-4xl  font-semibold text-blue-700 text-2xl md:text-6xl">Competition</h1>
          <p className="mt-2 text-l lg:text-xl text-gray-500 md:text-base">Adapun perlombaan yang dilaksanakan pada MAGE 9 adalah</p>
      </div>
      </div>
      <Carousel />
      <Testimoni />
      <Support />
      <Footer />
    </div>
  );
};

export default App;
