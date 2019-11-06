const express = require('express');
const app = express();

// the function that has a parameter that is the is the amount that gets taxed
const taxCal = (value) => {
	// conditional statement that checks what the amount will be taxed
	if (value <= 195850) {
	    return value * 0.18
	} else if (value >= 195851 && value <= 305850) {
	    return (value * 0.26) + 35253
	} else if (value >= 305851 && value <= 423300) {
	    return (value * 0.31) + 63853
	} else if (value >= 423301 && value <= 555600) {
	    return (value * 0.36) + 100263
	} else if (value >= 555601 && value <= 708310) {
	    return (value * 0.39) + 147891
	} else if (value >= 708311 && value <= 1500000) {
	    return (value * 0.41) + 207448
	} else if (value >= 1500001) {
	    return (value * 0.45) + 532041
	}
}

//exporting the function
module.exports = taxCal