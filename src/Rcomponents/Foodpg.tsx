import React, { useLayoutEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import { height } from "@fortawesome/free-solid-svg-icons/faBars";
const Foodpg = () => {
    const [stat, setstat] = useState<boolean>(false);
    const [info, setinfo] = useState<any>();
    const { foodid } = useParams();
    useLayoutEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodid}`)
            .then((res) => {
                setinfo(res.data.meals[0]);
                console.log(res.data.meals[0]);
            }).catch((err) => { console.log(err) });
            setTimeout(()=>{
                setstat(true);
            },2000)
    }, [])
    return (
        <>
        {
            (stat) ? <div>
                <Navbar />
                <div>
                    <div className="rrtitle">{info.strMeal}</div>
                    <div className="rrflex"><img className="rrimage" src={info.strMealThumb} />
                        <div className="rrbox">
                            <div className="rrdesc">{info.strArea}</div>
                            <div className="rrdesc">{info.strCategory}</div>
                        </div>
                    </div>
                    <div className="rrrtile">Ingredients</div>
                    <div className="rringre">
                        {(info.strIngredient1 != "") ? <div className="ingre">{info.strIngredient1} : {info.strMeasure1}</div> : null}
                        {(info.strIngredient2 != "") ? <div className="ingre">{info.strIngredient2} : {info.strMeasure2}</div> : null}
                        {(info.strIngredient3 != "") ? <div className="ingre">{info.strIngredient3} : {info.strMeasure3}</div> : null}
                        {(info.strIngredient4 != "") ? <div className="ingre">{info.strIngredient4} : {info.strMeasure4}</div> : null}
                        {(info.strIngredient5 != "") ? <div className="ingre">{info.strIngredient5} : {info.strMeasure5}</div> : null}
                        {(info.strIngredient6 != "") ? <div className="ingre">{info.strIngredient6} : {info.strMeasure6}</div> : null}
                        {(info.strIngredient7 != "") ? <div className="ingre">{info.strIngredient7} : {info.strMeasure7}</div> : null}
                        {(info.strIngredient8 != "") ? <div className="ingre">{info.strIngredient8} : {info.strMeasure8}</div> : null}
                        {(info.strIngredient9 != "") ? <div className="ingre">{info.strIngredient9} : {info.strMeasure9}</div> : null}
                        {(info.strIngredient10 != "") ? <div className="ingre">{info.strIngredient10} : {info.strMeasure10}</div> : null}
                        {(info.strIngredient11 != "") ? <div className="ingre">{info.strIngredient11} : {info.strMeasure11}</div> : null}
                        {(info.strIngredient12 != "") ? <div className="ingre">{info.strIngredient12} : {info.strMeasure12}</div> : null}
                        {(info.strIngredient13 != "") ? <div className="ingre">{info.strIngredient13} : {info.strMeasure13}</div> : null}
                        {(info.strIngredient14 != "") ? <div className="ingre">{info.strIngredient14} : {info.strMeasure14}</div> : null}
                        {(info.strIngredient15 != "") ? <div className="ingre">{info.strIngredient15} : {info.strMeasure15}</div> : null}
                        {(info.strIngredient16 != "") ? <div className="ingre">{info.strIngredient16} : {info.strMeasure16}</div> : null}
                        {(info.strIngredient17 != "") ? <div className="ingre">{info.strIngredient17} : {info.strMeasure17}</div> : null}
                        {(info.strIngredient18 != "") ? <div className="ingre">{info.strIngredient18} : {info.strMeasure18}</div> : null}
                        {(info.strIngredient19 != "") ? <div className="ingre">{info.strIngredient19} : {info.strMeasure19}</div> : null}
                        {(info.strIngredient20 != "") ? <div className="ingre">{info.strIngredient20} : {info.strMeasure20}</div> : null}
                    </div>
                    <div className="rrrtile">Recipi</div>
                    <div className="recipi">
                        {info.strInstructions}
                    </div>
                    <div>

                    </div>
                </div>
                <div className="video">
                    <a href={info.strYoutube}> Recipie video </a>
                </div>
                <div style={{height:"60px"}}></div>
            </div>:null
        }

        </>
    )
}
export default Foodpg