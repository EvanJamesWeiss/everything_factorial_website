// Filename - "./components/Navbar.js

import React from "react";
import {AppBar, Box, Toolbar} from "@mui/material";
import FactorialText from "./FactorialText";
import FactorialLink from "./FactorialLink";

const Navbar = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{flexGrow: 1}}>
                        <FactorialText
                            variant="h6"
                            customStyle={{width: "15%", fontSize: {xs: "16px", md: "32px"}}}
                            color="white"
                        >
                            EverythingFactorial.com
                        </FactorialText>
                    </Box>
                    <FactorialLink
                        href="https://github.com/EvanJamesWeiss/everything_factorial_website"
                        customStyle={{paddingRight: '1rem'}}
                    >
                        GitHub
                    </FactorialLink>
                    <FactorialLink href="https://www.youtube.com/@moosesurgeon">YouTube</FactorialLink>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;