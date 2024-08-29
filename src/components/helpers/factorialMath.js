const getFactorialNumber = (s, addExclamationMark = false) => {
    if (s.endsWith("!")) {
        s = s.slice(0, -1);
    }

    let total = 1;
    [...s].forEach((char) => {
        total *= char.charCodeAt(0);
    });

    if (total === 1) {
        return "0" + (addExclamationMark ? "!" : "");
    }

    return total.toString() + (addExclamationMark ? "!" : "");
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

export { getFactorialNumber, factorialDigitCount, scientificStringToNumber };