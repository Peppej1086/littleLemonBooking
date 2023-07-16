import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import OnlineOrder from "./pages/OnlineOrder";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/order-online" element={<OnlineOrder />}/>
        </Routes>
    )
}