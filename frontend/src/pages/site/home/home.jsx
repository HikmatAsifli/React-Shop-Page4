import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import MainContext from "../../../context/context";
import SimpleSlider from "../../../components/site/Slider/Slider";
import Reservation from "../../../components/site/Reservation/Reservation";
import Instagram from "../../../components/site/Instagram/Instagram";
import Blog from "../../../components/site/Blog/Blog";
import Testomional from "../../../components/site/Testomional/Testomional";
import Hero from "../../../components/site/Hero/Hero";
import About from "../../../components/site/About/About";
import Menu from "../../../components/site/Menu/Menu";

const Home = () => {
  const { data, setData } = useContext(MainContext);
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero />
      <Reservation />
      <About/>
      <Menu/>
      <Testomional />
      <Blog />
      <Instagram />
    </>
  );
};

export default Home;
