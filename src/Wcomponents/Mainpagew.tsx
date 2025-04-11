import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Forcustday from "./Wforcustday";
import Forcusthour from "./Wforcusthour";
const Mainpgw = () => {
    const cityref = useRef<HTMLInputElement>(null);
    const coderef = useRef<HTMLInputElement>(null);
    const result = useRef<HTMLDivElement>(null);
    const [info, setinfo] = useState<any[]>([]);
    const [srhstat, setsrhstat] = useState<boolean>(false);
    const [info2, setinfo2] = useState<any>();
    const [info3, setinfo3] = useState<any>();
    const [stat, setstat] = useState<boolean>(false);
    const search = () => {
        if (cityref.current?.value == "" && coderef.current?.value == "") {
            result.current!.innerHTML = "Please Enter One of the values";
        }
        else if (cityref.current?.value == "" && coderef.current?.value != "") {
            result.current!.innerHTML = "Select your Region";
            axios.get(`http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=3NgD2s2YYorM22qlyGoYQMZ9tGvORrGN&q=${coderef.current?.value}`)
                .then((res) => {
                    setinfo(res.data);
                    setsrhstat(true);
                }).catch((err) => console.log(err));
        }
        else if (cityref.current?.value != "" && coderef.current?.value == "") {
            result.current!.innerHTML = "Select your Region";
            axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=3NgD2s2YYorM22qlyGoYQMZ9tGvORrGN&q=${cityref.current?.value}`)
                .then((res) => {
                    setinfo(res.data);
                    setsrhstat(true);
                }).catch((err) => console.log(err));
        }
        else {
            result.current!.innerHTML = "Select only One of the values";
        }
    }
    const rslt = (key: any) => {
        axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=3NgD2s2YYorM22qlyGoYQMZ9tGvORrGN`)
            .then((res) => {
                setinfo2(res.data);
            }).catch((err) => console.log(err));
        axios.get(`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${key}?apikey=3NgD2s2YYorM22qlyGoYQMZ9tGvORrGN`)
            .then((res) => {
                setinfo3(res.data);
            }).catch((err) => console.log(err));
        setTimeout(() => {
            setstat(true);
        }, 2000);
    }
    return (
        <>
        
            <div>Enter city : <input ref={cityref} type="text" /></div>
            <div>Enter Postal Code : <input ref={coderef} type="text" /></div>
            <button onClick={search} className="citybtn">Click to search</button>
            <br />
            <div ref={result}></div>
            <br />
            {
                (srhstat) ? info.map((v, index) => {
                    return <button onClick={() => {rslt(v.Key);
                        cityref.current!.value="";
                        coderef.current!.value="";
                    }} className="citybtn">{v.Country.EnglishName} / {v.AdministrativeArea.EnglishName}</button>
                }) : null
            }
            <div className="bodyw">
            {
                (stat) ?<div className="flex2">
                    <div className="inline">
                        {
                            info3.map((v3:any,index3:number)=>{
                                return <Forcusthour data3={v3} index3={index3}/>
                            })
                        }
                    </div>
                
                    <div className="inline">
                        <div className="sec1"><div className="black">Today</div>
                            <div className="sec2" style={{backgroundImage:`url(src/assets/${info2.DailyForecasts[0].Day.Icon}-s.png)`}}>Daytime : {info2.DailyForecasts[0].Day.IconPhrase}
                            {(info2.DailyForecasts[0].Day.HasPrecipitation) ? <div className="black">Has Precipitation</div> : <div className="black">No Precipitation</div>}</div>
                            <div className="sec2" style={{backgroundImage:`url(src/assets/${info2.DailyForecasts[0].Night.Icon}-s.png)`}}>Nighttime : {info2.DailyForecasts[0].Night.IconPhrase}
                            {(info2.DailyForecasts[0].Night.HasPrecipitation) ? <div  className="black">Has Precipitation</div> : <div  className="black">No Precipitation</div>}</div>
                            <div className="sec2">
                                <div className="black">Maximum Temperature is {info2.DailyForecasts[0].Temperature.Maximum.Value} {info2.DailyForecasts[0].Temperature.Maximum.Unit}</div>
                                <div className="black">And Minimum Temparature is {info2.DailyForecasts[0].Temperature.Minimum.Value} {info2.DailyForecasts[0].Temperature.Minimum.Unit}</div>
                            </div>
                            <div>
                                <div>{info2.Headline.Category} : {info2.Headline.Text}</div>
                            </div>
                        </div>
                        {
                            info2.DailyForecasts.map((v2:any,index2:number)=>{
                                if (index2>0){
                                    return <Forcustday data1={v2} index={index2}/>
                                }
                               
                            })
                        }
                       
                        
                    </div> 
                </div>: null
            }
            </div>
        </>
    )
}
export default Mainpgw