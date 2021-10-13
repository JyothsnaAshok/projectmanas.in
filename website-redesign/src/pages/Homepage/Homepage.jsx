import React from 'react';
import Landing from '../../components/Landing/Landing';
import Aboutus from '../../components/Aboutus/Aboutus';
import Contact from "../../components/Contact us/Contact";
import Sponsors from "../../components/Sponsors/Sponsors";
import Projects from "../Projects/Projects";
export default function Homepage() {
  return (
    <>
      <Landing />
      <Aboutus />
      <Sponsors />
      <Projects />
      <Contact />
    </>
  );
}
