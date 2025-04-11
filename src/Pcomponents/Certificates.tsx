import React from "react";
import Webdev from "../assets/Webdev.png"
import Nodejs from "../assets/Nodejs.png"
import Testing from "../assets/Testing.png"
import { useNavigate } from "react-router-dom";
const Certifictesec = ()=>{
    const nav = useNavigate();
    return (
        <>
            <div>
                <div className="title">Certificates</div>
                <button className="cerblock" onClick={()=>nav("/certificate")}>
                    <div className="imgblock"><img src={Webdev} alt="" className="imgcer"/><img src={Nodejs} alt="" className="imgcer" /></div>
                    <div className="imgblock"><img src={Testing} alt="" className="imgcer" /></div>
                </button>
            </div>
        </>
    )
}
export default Certifictesec