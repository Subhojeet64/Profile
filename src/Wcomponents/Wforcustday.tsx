import React, { useState } from "react";
const Forcustday = (props:any) => {
    return (
        <>
            <div className="sec1">
                {
                    (props.index == 1)?<div>Tommorow</div>:null
                }
                {
                    (props.index == 2)?<div>Day after Tommorow</div>:null
                }
                {
                    (props.index > 2)?<div>{props.index} Days Later</div>:null
                }

                <div className="sec2" style={{backgroundImage:`url(src/assets/${props.data1.Day.Icon}-s.png)`}} >Daytime : {props.data1.Day.IconPhrase}
                    {(props.data1.Day.HasPrecipitation) ? <div className="black">Has Precipitation</div> : <div className="black">No Precipitation</div>}</div>
                <div className="sec2" style={{backgroundImage:`url(src/assets/${props.data1.Night.Icon}-s.png)`}} >Nighttime : {props.data1.Night.IconPhrase}
                    {(props.data1.Night.HasPrecipitation) ? <div className="black">Has Precipitation</div> : <div className="black">No Precipitation</div>}</div>
                <div className="sec2">
                    <div className="black">Maximum Temperature is {props.data1.Temperature.Maximum.Value} {props.data1.Temperature.Maximum.Unit}</div>
                    <div className="black">And Minimum Temparature is {props.data1.Temperature.Minimum.Value} {props.data1.Temperature.Minimum.Unit}</div>
                </div>
            </div>
        </>
    )
}
export default Forcustday