import React from "react";
import Navbar from "./Navbar";
import Profilemain from "./Profile";
import Certifictesec from "./Certificates";
import { useNavigate } from "react-router-dom";
import Movie from "../assets/moviepage.png";
import Weather from "../assets/Weatherpg.png";
import Food from "../assets/Food.png"
const Mainpage = ()=>{
    const nav = useNavigate();
    return(
        <>
            <Navbar write={"Welcome To My Webpage"}/>
            <Profilemain/>
            <Certifictesec/>
            <div className="title">Some Projects</div>
            <div className="flex7">
            <button className="appgame" onClick={()=>nav("/m")}><img className="appgameimg" src={Movie}  /></button>
            <button className="appgame" onClick={()=>nav("/w")}><img className="appgameimg" src={Weather} /></button>
            <button className="appgame" onClick={()=>nav("/r")}><img className="appgameimg" src={Food} /></button>
            </div>
            
        </>
        
    )
}
export default Mainpage