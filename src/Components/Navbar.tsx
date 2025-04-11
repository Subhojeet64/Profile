import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Moviecard from "./Moviecard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Navbar = ()=>{
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
                <button onClick={()=>nav("/m")} className="logo navb">Logo</button>
                <div className="search navb"><FontAwesomeIcon icon={faMagnifyingGlass} className="mag"/>
                    <input type="text" className="srh" onKeyDown={entr} onChange={()=>Search(searchref.current?.value)} ref={searchref}/></div>
                <div className="dark navb"></div>
            </div>
            <br />
            {
                (searchstat)?<div className="modal">
                    {
                        movieinfo.map((v,index)=>{
                            if(index < 4){
                                return <button onClick={()=>nav(`/movie/${v.imdbID}`)} className="card"><Moviecard  imgsource={v.Poster} title={v.Title}/></button>
                                
                            }
                        })
                    }
                </div>:null
            }
        </>
    )
}
export default Navbar