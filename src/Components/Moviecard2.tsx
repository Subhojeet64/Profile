import axios from "axios";
import React, { useLayoutEffect, useState } from "react";
const Moviecard2 = (props:any) => {
    const [movie,setmovie]=useState<any>();
    useLayoutEffect(()=>{
        axios.get(`https://www.omdbapi.com/?apikey=c9b0373e&i=${props.imdb}`)
        .then((res)=>{
            setmovie(res.data.Poster);
        }).catch((err)=>{console.log(err)})
    },[])
    return (
        <>
            <div>
                <img className="img2" src={movie} alt="Image" />
                {/* <div className="name2">{movie.Title}</div> */}
            </div>
            
        </>


    )
}
export default Moviecard2