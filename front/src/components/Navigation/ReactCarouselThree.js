import React from "react";
import { Carousel } from "react-bootstrap";

export default function ReactCarouselThree() {
    return (
        <div className="carousel" interval={10000}>
            <div className="carousel__b">
                <Carousel>
                    <Carousel.Item >
                        <img
                            className="carousel__hab"
                            src="images/carousel/espacios/SuiteB1.jpeg"
                            alt="img1"
                        />
                        <Carousel.Caption>
                            <h3 className="luna" >SUITE LA LUNA</h3>
                        </Carousel.Caption>

                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="carousel__hab"
                            src="images/carousel/espacios/SuiteB2.jpeg"
                            alt="img2"
                        />

                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="carousel__hab"
                            src="images/carousel/espacios/SuiteB3.jpeg"
                            alt="slide3"
                        />

                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="carousel__hab"
                            src="images/carousel/espacios/SuiteB4.jpeg"
                            alt="slide4"
                        />

                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="carousel__hab"
                            src="images/carousel/espacios/SuiteB5.jpeg"
                            alt="slide5"
                        />

                    </Carousel.Item>
                </Carousel>
            </div >
        </div>
    )
}
