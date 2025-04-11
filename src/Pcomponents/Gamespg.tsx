import React from "react";
import Navbar from "./Navbar";
import Movie from "../assets/moviepage.png";
import Weather from "../assets/Weatherpg.png";
import Food from "../assets/Food.png"
import Game from "../assets/Gamepg.png"
import { useNavigate } from "react-router-dom";
const Gamepage = ()=>{
    const nav = useNavigate();
    return (
        <>
           
            <Navbar write={"Apps And Games"}/>
            <div className="appflex1">
            <button className="appgame" onClick={()=>nav("/m")}><img className="appgameimg" src={Movie}  /></button>
            <button className="appgame" onClick={()=>nav("/w")}><img className="appgameimg" src={Weather} /></button>
            <button className="appgame" onClick={()=>nav("/r")}><img className="appgameimg" src={Food} /></button>
            <button className="appgame" onClick={()=>nav("/g")}><img className="appgameimg" src={Game} /></button>
            </div>
            
        </>
    )
}
export default Gamepage