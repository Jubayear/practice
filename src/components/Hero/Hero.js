import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Hero.css";

const Hero = () => {
  return (
    <Carousel fade className="carousel" interval={2000} controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 hero-img"
          src="https://i.ibb.co/RynwmbF/js.jpg"
          alt="c programming language"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 hero-img"
          src="https://i.ibb.co/pvB3vKc/cpp.jpg"
          alt="c programming language"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 hero-img"
          src="https://i.ibb.co/V3BLCkb/python.jpg"
          alt="c programming language"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 hero-img"
          src="https://i.ibb.co/XL2zxS2/c.jpg"
          alt="c programming language"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
