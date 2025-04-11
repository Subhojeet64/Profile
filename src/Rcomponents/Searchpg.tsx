import React, { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import Recipisection from "./Recipisection";
const Rsearchpg = ()=>{
    const [info,setinfo]=useState<any[]>([]);
    const{rsrch}= useParams();
    useLayoutEffect(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${rsrch}`)
        .then((res)=>{
            setinfo(res.data.meals)
        }).catch((err)=>console.log(err));
    },[])
    return(
        <>
            <Navbar/>
            {
                info.map((v,index)=>{
                    return <Recipisection rdata={v}/>
                })
            }
        </>
    )
}
export default Rsearchpg