import React from "react";
import { Route, Routes } from "react-router-dom";

import Landing from './pages/recipe/recipe';
import Recipe from './pages/recipe/recipe'
import Img from './pages/recipe/imageUploader/imageuploader'

const Routing = () => {

    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path='/recipe' element={<Recipe />} />
            <Route path='/upload' element={<Img />} />
        </Routes>
    )
}
export default Routing;