import React from "react";
import ReactCarouselTwo from "../components/Navigation/ReactCaroselTwo";
import ReactCarouselThree from "../components/Navigation/ReactCarouselThree";
import ReactCarouselFour from "../components/Navigation/ReactCarouselFour";
import ReactCarouselFive from "../components/Navigation/ReactCarouselFive";
import "../index.css";

const Habitaciones = () => {
  return (
    <>
      <div className="habitaciones">
        <p className="descanso">NUESTRAS HABITACIONES</p>
        <h2 className="hab__parrafo">
          Cargado de adrenalina y emociones al máximo para crear nuevos
          recuerdos, To Ocean es tu boleto para las vacaciones familiares más
          espectaculares de la historia. No importa si viajas con niños o con
          todo tu equipo de aventureros, encontrarás salas de cruceros amplias y
          bien equipadas, diseñadas para satisfacer todas tus necesidades en
          vacaciones.{" "}
        </h2>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <br></br>
      <br></br>
      <ReactCarouselTwo />
      <img className="plano__a" src="images/carousel/espacios/SuiteA6.jpeg" />
      <ReactCarouselThree />
      <img className="plano__b" src="images/carousel/espacios/SuiteB6.jpeg" />
      <ReactCarouselFour />
      <img className="plano__c" src="images/carousel/espacios/RoomA6.jpeg" />
      <ReactCarouselFive />
      <img className="plano__d " src="images/carousel/espacios/RoomB6.jpeg" />
      <br></br>
      <br></br>
      <br></br>
      <footer>
        <p>Diseñado por Facundo - ©2023 </p>
      </footer>
    </>
  );
};

export default Habitaciones;
