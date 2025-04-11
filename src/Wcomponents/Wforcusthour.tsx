import React from "react";
const Forcusthour = (props:any) => {
    return (
        <>
            <div className="sec1" style={{backgroundImage:`url(src/assets/${props.data3.WeatherIcon}-s.png)`}}>
                {(props.index3 == 0)? <div className="black">Now</div> : null}
                {(props.index3 == 1)? <div className="black">Next Hour</div> : null}
                {(props.index3 > 1)? <div className="black">{props.index3} Hours Later</div> : null}
                <div className="sec2">Weather : {props.data3.IconPhrase}
                    {(props.data3.HasPrecipitation) ? <div className="black">Has Precipitation</div> : <div className="black">No Precipitation</div>}</div>
                <div className="sec2">
                    <div className="black">Temperature : {props.data3.Temperature.Value} {props.data3.Temperature.Unit}</div>
                    {(props.data3.IsDaylight)? <div className="black">Daytime</div> : <div className="black">Nighttime</div> }</div>
            </div>
        </>
    )
}
export default Forcusthour