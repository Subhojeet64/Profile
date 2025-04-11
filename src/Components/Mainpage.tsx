import axios from "axios";
import React, { lazy, Suspense, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
const Moviecard2 = lazy(()=>import('./Moviecard2'))

const Mainpage = () => {
    const nav = useNavigate();
    return (
        <>  
            <div>
                <Navbar />
            </div>
            <div>
                <div className="explore">Explore Marvel Series</div>
                <div className="cardq">
                    <button onClick={()=>nav("/movie/tt0848228")} className="card2"><Suspense><Moviecard2 imdb="tt0848228"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt2395427")} className="card2"><Suspense><Moviecard2 imdb="tt2395427"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt3498820")} className="card2"><Suspense><Moviecard2 imdb="tt3498820"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt4154756")} className="card2"><Suspense><Moviecard2 imdb="tt4154756"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt4154796")} className="card2"><Suspense><Moviecard2 imdb="tt4154796"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt2015381")} className="card2"><Suspense><Moviecard2 imdb="tt2015381"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt0371746")} className="card2"><Suspense><Moviecard2 imdb="tt0371746"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt1211837")} className="card2"><Suspense><Moviecard2 imdb="tt1211837"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt1300854")} className="card2"><Suspense><Moviecard2 imdb="tt1300854"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt1825683")} className="card2"><Suspense><Moviecard2 imdb="tt1825683"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt2250912")} className="card2"><Suspense><Moviecard2 imdb="tt2250912"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt0800369")} className="card2"><Suspense><Moviecard2 imdb="tt0800369"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt3480822")} className="card2"><Suspense><Moviecard2 imdb="tt3480822"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt1843866")} className="card2"><Suspense><Moviecard2 imdb="tt1843866"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt10872600")} className="card2"><Suspense><Moviecard2 imdb="tt10872600"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt5095030")} className="card2"><Suspense><Moviecard2 imdb="tt5095030"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt1431045")} className="card2"><Suspense><Moviecard2 imdb="tt1431045"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt6320628")} className="card2"><Suspense><Moviecard2 imdb="tt6320628"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt10648342")} className="card2"><Suspense><Moviecard2 imdb="tt10648342"/></Suspense></button>
                </div>
            </div>
            <div>
                <div className="explore">Explore More</div>
                <div>
                    <button onClick={()=>nav("/movie/tt0944947")} className="card2"><Suspense><Moviecard2 imdb="tt0944947"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt4052886")} className="card2"><Suspense><Moviecard2 imdb="tt4052886"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt1405406")} className="card2"><Suspense><Moviecard2 imdb="tt1405406"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt6468322")} className="card2"><Suspense><Moviecard2 imdb="tt6468322"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt5180504")} className="card2"><Suspense><Moviecard2 imdb="tt5180504"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt1229238")} className="card2"><Suspense><Moviecard2 imdb="tt1229238"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt0133093")} className="card2"><Suspense><Moviecard2 imdb="tt0133093"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt0460649")} className="card2"><Suspense><Moviecard2 imdb="tt0460649"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt2381249")} className="card2"><Suspense><Moviecard2 imdb="tt2381249"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt0409591")} className="card2"><Suspense><Moviecard2 imdb="tt0409591"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt1340138")} className="card2"><Suspense><Moviecard2 imdb="tt1340138"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt13443470")} className="card2"><Suspense><Moviecard2 imdb="tt13443470"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt0108778")} className="card2"><Suspense><Moviecard2 imdb="tt0108778"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt5651844")} className="card2"><Suspense><Moviecard2 imdb="tt5651844"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt1305797")} className="card2"><Suspense><Moviecard2 imdb="tt1305797"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt21209876")} className="card2"><Suspense><Moviecard2 imdb="tt21209876"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt2442560")} className="card2"><Suspense><Moviecard2 imdb="tt2442560"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt0292506")} className="card2"><Suspense><Moviecard2 imdb="tt0292506"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt10062292")} className="card2"><Suspense><Moviecard2 imdb="tt10062292"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt0388629")} className="card2"><Suspense><Moviecard2 imdb="tt0388629"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt1670345")} className="card2"><Suspense><Moviecard2 imdb="tt1670345"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt15222080")} className="card2"><Suspense><Moviecard2 imdb="tt15222080"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt1375666")} className="card2"><Suspense><Moviecard2 imdb="tt1375666"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt0816692")} className="card2"><Suspense><Moviecard2 imdb="tt0816692"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt0413300")} className="card2"><Suspense><Moviecard2 imdb="tt0413300"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt0096657")} className="card2"><Suspense><Moviecard2 imdb="tt0096657"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt0356910")} className="card2"><Suspense><Moviecard2 imdb="tt0356910"/></Suspense></button>
                    <button onClick={()=>nav("/movie/tt0441048")} className="card2"><Suspense><Moviecard2 imdb="tt0441048"/></Suspense></button>
                </div>
            </div>
        </>
    )
}
export default Mainpage