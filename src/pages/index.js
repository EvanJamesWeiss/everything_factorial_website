// Filename - pages/index.js

import React from "react";
import converter from "number-to-words";
import {Box, Button, TextField, Tooltip, Typography} from "@mui/material";

const Home = () => {

    const [showResults, setShowResults] = React.useState(false);
    const [showError, setShowError] = React.useState(false);

    const [message, setMessage] = React.useState("");
    const [factorial, setFactorial] = React.useState("");
    const [words, setWords] = React.useState("");
    const [digitCount, setDigitCount] = React.useState("");

    const validateMessage = () => {
        setShowError(!message.endsWith("!"));
        return message.endsWith("!");
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Hide the results section
        setShowResults(false);

        // Validate the message
        if (!validateMessage()) {
            return;
        }

        const s = message.slice(0, -1);

        // Calculate the product of the ASCII values of the characters in the message
        const factorialNumber = getFactorialNumber(s);

        // Set the factorial result
        setFactorial(factorialNumber + "!");

        // Convert the factorial number to words
        // If the number contains an "e", it is a scientific notation number and cannot be converted
        setWords("");
        if (!factorialNumber.includes("e")) {
            try {
                setWords(converter.toWords(factorialNumber) + " factorial");
            } catch {
                // If the number is too large, the library will throw an error
            }
        }

        // Calculate the number of digits in the resulting factorial
        setDigitCount(factorialDigitCount(factorialNumber));

        // Show the results section
        setShowResults(true);
    };

    const getFactorialNumber = (s) => {
        let total = 1;
        [...s].forEach((char) => {
            total *= char.charCodeAt(0);
        });

        if (total === 1) {
            return "0";
        }

        return total.toString();
    }

    const factorialDigitCount = (numberString) => {
        const n = scientificStringToNumber(numberString);

        const pi = Math.PI;
        const e = Math.E;

        // Stirling's approximation to estimate log10(n!)
        let log10_n_factorial = 0.5 * Math.log10(2 * pi * n) + n * (Math.log10(n) - Math.log10(e));

        // Number of digits
        return Math.floor(log10_n_factorial) + 1;
    }

    const scientificStringToNumber = (str) => {
        if (!str.includes("e")) {
            return parseInt(str);
        }
        const [mantissa, exponent] = str.split("e");
        return parseFloat(mantissa) * Math.pow(10, parseFloat(exponent));
    }

    return (
        <div>
            <Tooltip
                title="5.739137229501807e+55!"
                placement="top"
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
                <Typography
                    variant="h2"
                    align="center"
                    sx={{margin: "auto", width: "50%"}}
                >
                    Everything Can Be A Factorial!
                </Typography>
            </Tooltip>
            {/* A form with a multi-line text box and a submit button that calls a function when clicked */}
            <Box
                component="form"
                autoComplete="off"
                noValidate
                sx={{paddingBottom: "1rem"}}
            >
                <div style={{width: "50%", margin: "auto", paddingBottom: '2rem'}}>
                    <TextField
                        id="filled-multiline-static"
                        label={
                            <Tooltip
                                title="1.4695933973210117e+85!"
                                placement="top"
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
                                <Typography variant="h6">
                                    Enter any text ending in an&nbsp;
                                    <b>
                                        Exclamation Mark
                                    </b>
                                    !
                                </Typography>
                            </Tooltip>
                        }
                        multiline
                        variant="filled"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        sx={{width: '100%'}}
                    />
                    {showError && (
                        <Tooltip
                            title={"2.6446471366820776e+83!"}
                            placement={"bottom"}
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
                            <Typography variant="h6" align="center" color="error">
                                The message must end in an exclamation mark!
                            </Typography>
                        </Tooltip>
                    )}
                </div>
                <div style={{width: "30%", margin: "auto"}}>
                    <Button
                        variant="contained"
                        type="submit"
                        onClick={handleSubmit}
                        sx={{width: '100%'}}
                    >
                        Submit
                    </Button>
                </div>
            </Box>
            {showResults && (
                <div>
                    <Typography variant="h4" align="center">Results</Typography>
                    <Typography variant="h6" align="center">Factorial: {factorial}</Typography>
                    {words && <Typography variant="h6" align="center">Words: {words}</Typography>}
                    {digitCount && <Typography variant="h6" align="center">Digit Count: {digitCount}</Typography>}
                </div>
            )}
        </div>
    );
};

export default Home;