import React from "react";
import '../landingpage.css';
import crucerovideo from '../../video/crucerovideo.mp4';

const Landingpage = () => {
    return (
        <div className="landingpage">
            <video src={crucerovideo} autoPlay muted loop class="video-bg" />
        </div>

    )
}

export default Landingpage;