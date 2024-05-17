import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import MainContext from "../../../context/context";
import SimpleSlider from "../../../components/site/Slider/Slider";
import Reservation from "../../../components/site/Reservation/Reservation";

const Home = () => {
  const { data, setdata } = useContext(MainContext);
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* <SimpleSlider /> */}
      <Reservation/>
    </>
  );
};

export default Home;
