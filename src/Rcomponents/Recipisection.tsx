import React from "react";
import { useNavigate } from "react-router-dom";
const Recipisection = (props:any)=>{
    const nav = useNavigate();
    return(
        <>
            <button onClick={()=>nav(`/foodpg/${props.rdata.idMeal}`)} className="rflex">
                <div className="inlinebox">
                    <img src={props.rdata.strMealThumb} className="rimage" alt="" />
                </div>
                <div className="inlinebox">
                    <div className="rtitle">{props.rdata.strMeal}</div>
                    <div className="rdesc">{props.rdata.strArea}</div>
                    <div className="rdesc">{props.rdata.strCategory}</div>
                </div>
            </button>
        </>
    )
}
export default Recipisection