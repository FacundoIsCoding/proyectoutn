import React from "react";
import { Carousel } from "react-bootstrap";

export default function ReactCarouselTwo() {
    return (
        <div className="carousel">
            <div className="carousel__a">
                <Carousel interval={10000}>
                    <Carousel.Item>
                        <img
                            className="carousel__hab"
                            src="images/carousel/espacios/SuiteA1.jpeg"
                            alt="img1"
                        />
                        <Carousel.Caption>
                            <h3 className="estrella" >SUITE LA ESTRELLA</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel__hab"
                            src="images/carousel/espacios/SuiteA2.jpeg"
                            alt="img2"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel__hab"
                            src="images/carousel/espacios/SuiteA3.jpeg"
                            alt="img3"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel__hab"
                            src="images/carousel/espacios/SuiteA4.jpeg"
                            alt="img4"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel__hab"
                            src="images/carousel/espacios/SuiteA5.jpeg"
                            alt="img5"
                        />

                    </Carousel.Item>
                </Carousel>
            </div >
        </div>
    )
}
