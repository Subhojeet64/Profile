import axios from "axios";
import React, { lazy, Suspense, useLayoutEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
const Foodcard = lazy(() => import("./Foodcard"));
const Rmainpg = () => {
    const [stat, setstat] = useState<boolean>(false);
    const nav = useNavigate();
    const [category, setcategory] = useState<any[]>([]);
    const [areas, setareas] = useState<any[]>([])
    useLayoutEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then((res) => {
                setcategory(res.data.categories);
            }).catch((err) => { console.log(err); });
        axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
            .then((res) => {
                setareas(res.data.meals);
            }).catch((err) => { console.log(err); })
        setTimeout(() => {
            setstat(true);
        }, 1000);
    }, []);
    const categ = (cate: any) => {
        nav(`/rcategory/${cate}`)
    };
    const area = (ar: any) => {
        nav(`/rarea/${ar}`)
    }
    return (
        <>
            <Navbar />
            <div className="rflex">
                <div className="bar5"><div className="area">Areas</div>
                    {
                        areas.map((v2, index2) => {
                            return <button className="categories" onClick={() => area(v2.strArea)}>{v2.strArea}</button>
                        })
                    }
                </div>
                <div className="bar5"><div className="area">Categories</div>
                    {
                        category.map((v, index) => {
                            return <button className="categories" onClick={() => categ(v.strCategory)}>{v.strCategory}</button>
                        })
                    }
                </div>
                <div className="bar6">
                    <Suspense><Foodcard data4="52772" /></Suspense>
                    <Suspense><Foodcard data4="53085" /></Suspense>
                    <Suspense><Foodcard data4="52934" /></Suspense>
                    <Suspense><Foodcard data4="52937" /></Suspense>
                    <Suspense><Foodcard data4="52806" /></Suspense>
                    <Suspense><Foodcard data4="52954" /></Suspense>
                    <Suspense><Foodcard data4="52946" /></Suspense>
                    <Suspense><Foodcard data4="52896" /></Suspense>
                    <Suspense><Foodcard data4="52962" /></Suspense>
                    <Suspense><Foodcard data4="53079" /></Suspense>
                    <Suspense><Foodcard data4="52982" /></Suspense>
                    <Suspense><Foodcard data4="52839" /></Suspense>
                    <Suspense><Foodcard data4="52835" /></Suspense>
                    <Suspense><Foodcard data4="52855" /></Suspense>
                    <Suspense><Foodcard data4="52898" /></Suspense>
                </div>
            </div>
            </>
            )
}
            export default Rmainpg