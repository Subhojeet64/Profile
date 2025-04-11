import React from "react";
import { NavLink } from "react-router-dom";
const drawer = ()=>{
    return(
        <>
            <div className="drawer">
                <NavLink to={"/games"}/>
            </div>
        </>
    )
}