import React from "react";
import {
  Cards,
  Profile,
  PreviewClass,
  NextEvents,
  Gallery,
  Code,
  Navbar,
} from "@/components";
import "@/styles/App.css";
import "@/styles/index.css";
import "@/styles/Navbar.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Cards className="container">
        <Profile />
        <PreviewClass />
      </Cards>
      <Cards className="container">
        <NextEvents />
        <Gallery />
        <Code />
      </Cards>
    </>
  );
};

export default Home;
