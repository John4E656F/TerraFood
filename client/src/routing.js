import React from "react";
import { Route, Routes } from "react-router-dom";

import Landing from './pages/Landing/landing';

const Routing = () => {

    return (
        <Routes>
            <Route path="/" element={<Landing />} />
        </Routes>
    )
}
export default Routing;