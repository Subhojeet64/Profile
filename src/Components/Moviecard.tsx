import React from "react";
const Moviecard = (props:any) => {
    return (
        <>
            <div>
                <img className="img1" src={props.imgsource} alt="Image" />
                <div className="name">{props.title}</div>
            </div>
            
        </>


    )
}
export default Moviecard