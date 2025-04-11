import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Gsearchpg = ()=>{
     const [page,setpage] = useState<number>(0);
    const [info,setinfo]=useState<any[]>([]);
    const [sele,setsele]=useState<string>("DealRating");
    const selectref = useRef<HTMLSelectElement>(null);
    const searchref = useRef<HTMLInputElement>(null);
    const nav = useNavigate();
    const {title} = useParams();
    
    useEffect(()=>{
        axios.get(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=50&sortBy=${sele}&pageNumber=${page}&title=${title}`)
        .then((res)=>{
            setinfo(res.data);
        }).catch((err)=>console.log(err));
    },[title])
    const selec = () =>{
        setsele(selectref.current!.value);
        setpage(0);
    };
    const entr = (e:any)=>{
        if (e.key=="Enter"){
        setpage(0);
        nav(`/gsearchpg/${searchref.current?.value}`);
        }
    };
    return (
        <>
            <div className="gbody">
                            <div className="navbar5">
                                <button>Logo</button>
                                <div className="gsearch"><FontAwesomeIcon className="gicon" icon={faMagnifyingGlass} /> <input onKeyDown={entr} className="gsearchbox" type="text" ref={searchref} /></div>
                            </div>
                            <div>Sort by <select className="gselect" onChange={selec} ref={selectref}>
                                <option value="DealRating">Deal Rating</option>
                                <option value="Recent">Recent</option>
                                <option value="Price">Price</option>
                                <option value="Release">Release</option>
                                <option value="Reviews">Reviews</option>
                                <option value="Savings">Savings</option>
                            </select>
                            </div>
                            <div className="prevnext">
                                {
                                    (page>0)?<button onClick={()=>{setpage(page-1);}}>Previos</button>:null
                                }
                                    <button onClick={()=>{setpage(page+1);}}>Next</button>
                            </div>
                            {
                                info.map((v:any,index:number)=>{
                                    return <button className="gsec" ><img className="gimg" src={v.thumb} alt="" />
                                    <div className="gbox">
                                        <div className="gtitle">{v.title}</div>
                                        <div className="gprice">Price : <div className="strick"> {v.normalPrice}</div>&nbsp; &nbsp;  &rarr; {v.salePrice} </div>
                                        <div className="grate">Ratings : {v.steamRatingPercent} % </div>
                                    </div>
                                    </button>
                                })
                            }
                            <div className="prevnext">
                                {
                                    (page>0)?<button onClick={()=>{
                                        setpage(page-1);
                                        window.scrollTo(0,0);
                                    }}>Previos</button>:null
                                }
                                    <button onClick={()=>{
                                        setpage(page+1);
                                        window.scrollTo(0,0);
                                    }}>Next</button>
                            </div>
                        </div>
        </>
    )
}
export default Gsearchpg