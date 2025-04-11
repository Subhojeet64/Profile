import React, { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import Recipisection from "./Recipisection";
const Category = ()=>{
    const [info,setinfo]=useState<any[]>([]);
    const{cateid}= useParams();
    useLayoutEffect(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cateid}`)
        .then((res)=>{
            setinfo(res.data.meals)
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
export default Category