import axios from "axios";
import React, { useLayoutEffect, useState } from "react";
const Moviecard3 = (props:any) => {
    const [movie,setmovie]=useState<any>();
    const [movie2,setmovie2]=useState<any>();
    useLayoutEffect(()=>{
        axios.get(`https://www.omdbapi.com/?apikey=c9b0373e&i=${props.imdb}`)
        .then((res)=>{
            setmovie(res.data.Poster);
            setmovie2(res.data.Title);
        }).catch((err)=>{console.log(err)})
    },[])
    return (
        <>
            <div>
                <img className="img2" src={movie} alt="Image" />
                <div className="name2">{movie2}</div>
            </div>
            
        </>


    )
}
export default Moviecard3