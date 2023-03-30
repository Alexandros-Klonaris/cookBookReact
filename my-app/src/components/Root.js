import React from "react";
import Nav from "../components/Nav";
import RowJumbotron from "./RowJumbotron";
import Footer from "../components/Footer";
import HomePage  from "./HomePage";
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            <Nav/>
            <RowJumbotron/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
                
        </>
    )
}