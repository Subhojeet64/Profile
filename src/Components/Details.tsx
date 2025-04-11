import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Details = ()=>{
    const {title} = useParams();
    const [info,setinfo]=useState<any>({});
    useLayoutEffect(()=>{
        axios.get(`https://www.omdbapi.com/?apikey=c9b0373e&i=${title}`)
        .then((res)=>{
            setinfo(res.data);
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    return(
        <>
            <div className="modal1">
                <img className="imagedet" src={info.Poster} alt="" />
                <div className="detail">
                    <div className="det tile">{info.Title}</div>
                    <div className="det box">BoxOffice : {info.BoxOffice}</div>
                    <div className="det long">Awards : {info.Awards}</div>
                    <div className="det long">Actors : {info.Actors}</div>
                    <div className="det">Genre : {info.Genre}</div>
                    <div className="det">Language : {info.Language}</div>
                    <div className="det">Year : {info.Year}</div>
                    <div className="det">Director : {info.Director}</div>
                    <div className="det">Writer : {info.Writer}</div>
                    <div className="det">Country : {info.Country}</div>
                    <div className="det">Plot : {info.Plot}</div>

                </div>
            </div>
        </>
    )
}
export default Details