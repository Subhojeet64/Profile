import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./Mainpage";
import Gamepage from "./Gamespg";
import Certificatepg from "./Certificatepg";

const Rules = ()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Mainpage/>}/>
                    <Route path="/certificate" element={<Certificatepg/>}/>
                    <Route path="/games" element={<Gamepage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Rules