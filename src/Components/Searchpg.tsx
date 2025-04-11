import axios from "axios";
import React, { lazy, useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar2 from "./Navbar2";
const Moviecard3 = lazy(()=> import ('./Moviecard3'));

const Searchpg = () => {
    const { srch } = useParams();
    const [info, setinfo] = useState<any[]>([]);
    const nav = useNavigate()
    useLayoutEffect(() => {
        axios.get(`https://omdbapi.com/?apikey=c9b0373e&s=${srch}`)
            .then((res) => {
                setinfo(res.data.Search);
            }).catch((err) => console.log(err));
    }, [])
    return (
        <>
            <Navbar2 />
            <div className="cardr">
                {
                    info.map((v, index) => {
                            return <button onClick={() => nav(`/movie/${v.imdbID}`)} className="card2"><Moviecard3 imdb={v.imdbID} /></button>
                    })
                }
            </div>
        </>
    )
}
export default Searchpg