import React from "react";
import './Main.css'
import {Header} from "../Header/Header";
import {Countries} from "../Countries/Countries";
import {Shop} from "../Shop/Shop";

export const Main = () => {
    return <>
        <Header/>
        <Countries/>
        <Shop/>
    </>

}