import React, { Component } from "react";
import LandingPage from '../pages/landing-page'
import DataExplorationPage from '../pages/data-exploration-page'
import ResourcesPage from '../pages/resources-page'
import Navbar from "./navbar";


import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';


function App() {
    
    return (

        <>
            <Router>
                {/* Simple Navbar present in each page */}
                <Navbar />
                
                {/* URL Handling */}
                <Routes>

                    {/* Landing Page */}
                    <Route path="/" element={
                        <LandingPage />
                    } />

                    {/* Data Exploration Page */}
                    <Route path="/data-exploration" element={
                        <DataExplorationPage />
                    } />

                    {/* Resources Page */}
                    <Route path="/resources" element={
                        <ResourcesPage />
                    } />

                </Routes>

            </Router>

        </>

    )
    
}

export default App;
