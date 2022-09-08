import React from "react";
import { Route, Routes } from "react-router-dom";

import Landing from './pages/recipe/recipe';
import Recipe from './pages/recipe/recipe'

const Routing = () => {

    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path='/recipe' element={<Recipe />} />
        </Routes>
    )
}
export default Routing;