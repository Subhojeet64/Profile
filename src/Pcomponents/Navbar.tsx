import React, { useRef, useState } from "react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { useNavigate } from "react-router-dom";
const Navbar = (props:any)=>{
    const[drawertoggle,setdrawertoggle]=useState<boolean>(false);
    const ref1=useRef<HTMLDivElement>(null);
    const drawer2 = () =>{
        setdrawertoggle(!drawertoggle);
        }
        const nav = useNavigate();
    return(
        <>
        <div className="navp">
            <button className="bar1" onClick={drawer2}><FontAwesomeIcon icon={faBars} className="bars"/></button>
            <div className="navtitle"><div>{props.write}</div></div>
        </div>
        {
            (drawertoggle)?<div className="drawer" ref={ref1}>
            <button onClick={()=>nav("/")} className="drawerdata">Home</button>
            <button onClick={()=>nav("/certificate")} className="drawerdata">Certificates</button>
            <button className="drawerdata" onClick={()=>nav("/apps&games")}>Apps & Games</button>
        </div>:null
        }
        
        </>
    )
}
export default Navbar