import React from "react";
import "../index.css";

const Servicios = () => {
  return (
    <>
      <div>
        <header>
          <div className="h__servicios">
            <p>SERVICIOS</p>
            <img className="sauna" src="images/iconos/SaunaIcon.png" />
            <img className="casino" src="images/iconos/CasinoIcon.png" />
            <img className="wifi" src="images/iconos/IconWifi.png" />
            <img className="buffet" src="images/iconos/BuffetIcon.png" />
          </div>
        </header>
        <br></br>
        <br></br>
        <p className="subtitulo">EN HABITACIONES</p>
        <p className="incluido">INCLUIDO</p>
        <img className="baño" src="images/iconos/BanoIcon.png" />
        <img className="frigo" src="images/iconos/FrigobarIcon.png" />
        <img className="desayuno" src="images/iconos/DesayunoIcon.png" />
        <img className="aire" src="images/iconos/AireIcon.png" />
        <img className="tv" src="images/iconos/TvIcon.png" />
        <img className="wi__fi" src="images/iconos/WifiIcon.png" />
        <br></br>
        <br></br>
        <p className="subhotel">EN HOTEL</p>
        <p className="opcionales">OPCIONALES</p>
        <img className="hidro" src="images/iconos/HidroIcon.png" />
        <img className="night" src="images/iconos/NightIcon.png" />
        <img className="confiteria" src="images/iconos/ConfiteriaIcon.png" />
        <img className="sala" src="images/iconos/SalaIcon.png" />
        <img className="lavanderia" src="images/iconos/LavanderiaIcon.png" />
        <img className="room" src="images/iconos/RoomIcon.png" />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="galeria">
          <img
            className="copa__a"
            src="https://media.istockphoto.com/id/1302638495/es/foto/manos-sosteniendo-tres-vasos-de-limonada-amarilla-roja-de-fruta-con-hielo-en-vasos-de-bola.jpg?s=612x612&w=0&k=20&c=Ik2uAFDL7BxP1_Hfk9J8AMzxMxT8iWo4grh94iuhtfI="
          />
          <img
            className="copa__b"
            src="https://media.istockphoto.com/id/1365469586/es/foto/un-bar-tendero-vierte-granadina-en-un-c%C3%B3ctel-rosa.jpg?s=612x612&w=0&k=20&c=6WolYzX7LKzikP5flJDAxBA_2M6xOkw7Mn3Qm2CwFBQ="
          />
          <img
            className="copa__c"
            src="https://media.istockphoto.com/id/467994604/es/foto/c%C3%B3ctel-de-decisiones.jpg?s=612x612&w=0&k=20&c=wxC9pmcXpSP1BtNEmf8uGmW6-yC0_Ajj5RKEFgWrA20="
          />
          <div className="parrafo">
            <p className="primero">SOLO</p>
            <p className="segundo">SE</p>
            <p className="tercero">DISFRUTA</p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>

        <footer>
          <p>Diseñado por Facundo - ©2023 </p>
        </footer>
      </div>
    </>
  );
};

export default Servicios;
