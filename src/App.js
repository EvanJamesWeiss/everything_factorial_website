
// Filename - App.js
 
import React from "react";
import SiteHeader from "./components/basic/header";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/index";
import Test from "./pages/test";
 
function App() {
    return (
        <Router>
            <SiteHeader />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/test" element={<Test />} />
            </Routes>
        </Router>
    );
}
 
export default App;