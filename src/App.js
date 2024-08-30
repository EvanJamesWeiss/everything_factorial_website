
// Filename - App.js
 
import React from "react";
import SiteHeader from "./components/basic/header";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/index";
 
function App() {
    return (
        <Router>
            <SiteHeader />
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}
 
export default App;