import React from 'react';
import {Routes,Route} from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/notfound";


function NavigationRoutes (){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route element={<NotFound />} />
        </Routes>
    )
}

export default NavigationRoutes;