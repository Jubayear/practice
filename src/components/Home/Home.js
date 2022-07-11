import React from "react";
import FilteredCourses from "../FilteredCourses/FilteredCourses";
import Hero from "../Hero/Hero";
import Container from "react-bootstrap/Container";
const Home = () => {
  return (
    <Container>
      <Hero></Hero>
      <FilteredCourses></FilteredCourses>
    </Container>
  );
};

export default Home;
