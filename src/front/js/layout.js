import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { AddUser } from "./pages/home";
import { Login } from "./pages/demo";
import { Inicio } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>                                       
                        <Route element={<AddUser />} path="/" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Inicio />} path="/inicio" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>                    
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
