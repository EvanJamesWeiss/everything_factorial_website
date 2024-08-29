// Filename - "./components/Navbar.js

import React from "react";
import {AppBar, Box, IconButton, Toolbar, Typography, Link, Tooltip} from "@mui/material";

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
                        <Tooltip
                            title="9.73579254125494e+45!"
                            placement="bottom"
                            slotProps={{
                                popper: {
                                    modifiers: [
                                        {
                                            name: 'offset',
                                            options: {
                                                offset: [0, -15],
                                            },
                                        },
                                    ],
                                },
                            }}
                        >
                            <Typography variant="h6" component="div" sx={{width: "15%"}}>
                                EverythingFactorial.com!
                            </Typography>
                        </Tooltip>
                    </Box>
                    <Tooltip
                        title="113176560!"
                        placement="bottom"
                        slotProps={{
                            popper: {
                                modifiers: [
                                    {
                                        name: 'offset',
                                        options: {
                                            offset: [0, -15],
                                        },
                                    },
                                ],
                            },
                        }}
                    >
                        <Link color="inherit" href="/test" sx={{paddingRight: '1rem'}}>Test!</Link>
                    </Tooltip>
                    <Tooltip
                        title="112437568289592!"
                        placement="bottom"
                        slotProps={{
                            popper: {
                                modifiers: [
                                    {
                                        name: 'offset',
                                        options: {
                                            offset: [0, -15],
                                        },
                                    },
                                ],
                            },
                        }}
                    >
                        <Link color="inherit" href="https://www.youtube.com/@moosesurgeon">YouTube!</Link>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;