import React from "react";
import { Carousel } from "react-bootstrap";

export default function ReactCarouselFive() {
    return (
        <div className="carousel" interval={10000}>
            <div className="carousel__d">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="carousel__hab"
                            src="images/carousel/espacios/RoomB1.jpeg"
                            alt="img1"
                        />
                        <Carousel.Caption>
                            <h3 className="mar" >ROOM EL MAR</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel__hab"
                            src="images/carousel/espacios/RoomB2.jpeg"
                            alt="img2"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel__hab"
                            src="images/carousel/espacios/RoomB3.jpeg"
                            alt="slide3"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel__hab"
                            src="images/carousel/espacios/RoomB4.jpeg"
                            alt="img4"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel__hab"
                            src="images/carousel/espacios/RoomB5.jpeg"
                            alt="img5"
                        />

                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}
