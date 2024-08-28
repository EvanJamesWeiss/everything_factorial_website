// Filename - "./components/Navbar.js

import React from "react";
import {AppBar, Box, IconButton, Toolbar, Typography, Link} from "@mui/material";

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
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        EverythingFactorial.com!
                    </Typography>
                    <Link color="inherit" href="/test" sx={{paddingRight: '1rem'}}>Test</Link>
                    <Link color="inherit" href="https://www.youtube.com/@moosesurgeon">YouTube</Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;