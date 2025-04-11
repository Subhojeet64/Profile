import React from "react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img1 from "../assets/Image.jpg"
const Profilemain = ()=>{
    return (
        <>
            <div className="pcon">
                <div className="imgcontainer"><img className="imgp" src={img1} width="300px" height="300px" alt="" /></div>
                <div className="details">
                    <div className="dtls name">Subhojeet Mandal</div>
                    <div className="dtls">From Kolkata</div>
                    <div className="dtls">Currently doing BCA</div>
                    <div className="dtls">.</div>
                </div>
            </div>
        </>
    )
}
export default Profilemain