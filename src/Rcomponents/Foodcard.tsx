import axios from "axios";
import React, { useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const Foodcard =(props:any)=>{
    const [info,setinfo]= useState<any>();
    const [stat,setstat] = useState<boolean>(false);
    const nav = useNavigate();
    useLayoutEffect(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.data4}`)
        .then((res)=>{
            setinfo(res.data.meals[0]);
        }).catch((err)=>console.log(err));
        setTimeout(() => {
            setstat(true);
        }, 1000);
    },[])
    return(
        <>{
            (stat)?<button className="inliner" onClick={()=>nav(`/foodpg/${props.data4}`)}>
            <div><img className="rimgr" src={info.strMealThumb} /></div>
            <div className="cardtitle">{info.strMeal}</div>
        </button>:null
        }
            
        </>
    )
}
export default Foodcard;