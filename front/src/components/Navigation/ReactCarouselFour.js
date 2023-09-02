import React from "react";
import { Carousel } from "react-bootstrap";

export default function ReactCarouselFour() {
    return (
        <div className="carousel" interval={10000}>
            <div className="carousel__c">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="carousel__hab"
                            src="images/carousel/espacios/RoomA1.jpeg"
                            alt="img1"
                        />
                        <Carousel.Caption>
                            <h3 className="sol" >ROOM EL SOL</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel__hab"
                            src="images/carousel/espacios/RoomA2.jpeg"
                            alt="img2"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel__hab"
                            src="images/carousel/espacios/RoomA3.jpeg"
                            alt="slide3"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel__hab"
                            src="images/carousel/espacios/RoomA4.jpeg"
                            alt="slide4"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel__hab"
                            src="images/carousel/espacios/RoomB1.jpeg"
                            alt="slide5"
                        />

                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}