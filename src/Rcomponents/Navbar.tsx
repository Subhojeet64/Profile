import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Navbar = ()=>{
    const [searchstat,setsearchstat]=useState<boolean>(false);
    const [movieinfo,setmovieinfo]=useState<any[]>([]);
    const searchref = useRef<HTMLInputElement>(null);
    const nav = useNavigate();
    const random = ()=>{
        nav("/r");
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((res)=>{
            nav(`/foodpg/${res.data.meals[0].idMeal}`)
        }).catch((err)=>console.log(err));
    }
    const entr = (event:any)=>{
        if (event.key === "Enter"){
            nav(`/receipisearch/${searchref.current?.value}`);
        }
    }
    
    
    return (
        <>
            <div className="nav">
                <button className="bar navb"><FontAwesomeIcon icon={faBars} /></button>
                <button onClick={()=>nav("/r")} className="logo navb">Logo</button>
                <div className="search navb"><FontAwesomeIcon icon={faMagnifyingGlass} className="mag"/>
                    <input type="text" className="srh2" onKeyDown={entr} ref={searchref}/></div>
                <button className="random navb" onClick={random}>Random</button>
            </div>
        </>
    )
}
export default Navbar