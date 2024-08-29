// Filename - pages/index.js

import React from "react";
import converter from "number-to-words";
import {Box, Button, TextField, Typography} from "@mui/material";
import {factorialDigitCount, getFactorialNumber} from "../components/helpers/factorialMath";
import FactorialText from "../components/basic/FactorialText";

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

        // Calculate the product of the ASCII values of the characters in the message
        const factorialNumber = getFactorialNumber(message);

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

    return (
        <div>
            <FactorialText variant="h2" customStyle={{margin: "auto", width: "50%"}}>
                Everything Can Be A Factorial
            </FactorialText>
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
                            <FactorialText variant="h6">
                                Enter any text ending in an&nbsp;<b>Exclamation Mark</b>
                            </FactorialText>
                        }
                        multiline
                        variant="filled"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        sx={{width: '100%'}}
                    />
                    {showError && (
                        <FactorialText color="error">
                            The message must end in an exclamation mark
                        </FactorialText>
                    )}
                </div>
                <div style={{width: "30%", margin: "auto"}}>
                    <Button
                        variant="contained"
                        type="submit"
                        onClick={handleSubmit}
                        sx={{width: '100%'}}
                    >
                        <FactorialText color="white">
                            SUBMIT
                        </FactorialText>
                    </Button>
                </div>
            </Box>
            {showResults && (
                <div>
                    <FactorialText variant="h4">Results</FactorialText>
                    <Typography variant="h6" align="center">Factorial: {factorial}</Typography>
                    {words && <Typography variant="h6" align="center">Words: {words}</Typography>}
                    {digitCount && <Typography variant="h6" align="center">Digit Count: {digitCount}</Typography>}
                </div>
            )}
        </div>
    );
};

export default Home;