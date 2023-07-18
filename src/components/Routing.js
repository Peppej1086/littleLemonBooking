import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import BookingPage from "./pages/BookingPage"
import OnlineOrder from "./pages/OnlineOrder";
import ConfirmedBooking from "./pages/ConfirmedBooking";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/reservations" element={<BookingPage />}/>
            <Route path="/order-online" element={<OnlineOrder />}/>
            <Route path="/confirmed-booking" component={<ConfirmedBooking />} />
        </Routes>
    )
}