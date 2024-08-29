// Filename - "./components/Navbar.js

import React from "react";
import {AppBar, Box, IconButton, Toolbar} from "@mui/material";
import FactorialText from "./FactorialText";
import FactorialLink from "./FactorialLink";

function MenuIcon() {
    return null;
}

const Navbar = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Box sx={{flexGrow: 1}}>
                        <FactorialText variant="h6" customStyle={{width: "15%"}} color="white">
                            EverythingFactorial.com
                        </FactorialText>
                    </Box>
                    <FactorialLink href="/test" customStyle={{paddingRight: '1rem'}}>Test</FactorialLink>
                    <FactorialLink href="https://www.youtube.com/@moosesurgeon">YouTube</FactorialLink>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;