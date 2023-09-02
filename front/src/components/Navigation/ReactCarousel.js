import React from "react";
import { Carousel } from "react-bootstrap";

export default function ReactCarousel () {
    return (
        <div>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img 
        className="imgcarousel"
        src="images/cruceros.jpg" 
        alt="slide1"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img 
        className="imgcarousel"
        src="./españa.jpg"
        alt="slide2"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
        className="imgcarousel"
        src="./francia.jpg"
        alt="slide3"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    )
}
