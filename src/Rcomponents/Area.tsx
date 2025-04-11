import React, { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import Recipisection from "./Recipisection";
const Area = ()=>{
    const [info,setinfo]=useState<any[]>([]);
    const{areaid}= useParams();
    useLayoutEffect(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaid}`)
        .then((res)=>{
            setinfo(res.data.meals);
            console.log(res.data);
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
export default Area