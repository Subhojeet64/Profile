import axios from "axios";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Moviecard from "./Moviecard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Navbar2 = ()=>{
    const [searchstat,setsearchstat]=useState<boolean>(false);
    const [movieinfo,setmovieinfo]=useState<any[]>([]);
    const searchref = useRef<HTMLInputElement>(null);
    const nav = useNavigate();
    const Search = (src:any)=>{
        axios.get(`https://www.omdbapi.com/?apikey=c9b0373e&s=${src}`)
        .then((res)=>{
            if (res.data.Response=="False"){
                setsearchstat(false);
            }
            else{
                setsearchstat(true);
                setmovieinfo(res.data.Search)
            }
        })
    }
    const entr = (event:any)=>{
        if (event.key === "Enter"){
            nav(`/search/${searchref.current?.value}`);
        }
    }
    
    
    return (
        <>
            <div className="nav">
                <button className="bar navb"><FontAwesomeIcon icon={faBars} /></button>
                <div className="logo navb">Logo</div>
                <div className="search navb"><FontAwesomeIcon icon={faMagnifyingGlass} className="mag"/>
                    <input type="text" className="srh" onKeyDown={entr} onChange={()=>Search(searchref.current?.value)} ref={searchref}/></div>
                <div className="dark navb"></div>
            </div>
            <br />
        </>
    )
}
export default Navbar2