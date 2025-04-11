import React from "react";
import Webdev from "../assets/Webdev.png"
import Nodejs from "../assets/Nodejs.png"
import Testing from "../assets/Testing.png"
import Navbar from "./Navbar";
const Certificatepg=()=>{
    return (
        <>
            <Navbar write={"My Certificates"}/>
            <div>
                <img src={Webdev} alt="" className="imgcerpg"/>
            </div>
            <div>
                <img src={Nodejs} alt="" className="imgcerpg"/>
            </div>
            <div>
                <img src={Testing} alt="" className="imgcerpg"/>
            </div>
        </>
    )
}
export default Certificatepg