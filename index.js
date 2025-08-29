const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Replace with your details
const FULL_NAME = "john_doe";
const DOB = "17091999"; // ddmmyyyy
const EMAIL = "john@xyz.com";
const ROLL_NUMBER = "ABCD123";

app.post("/bfhl", (req, res) => {
  try {
    const data = req.body.data;

    if (!Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: "Invalid input. 'data' should be an array",
      });
    }

    let evenNumbers = [];
    let oddNumbers = [];
    let alphabets = [];
    let specialChars = [];
    let sum = 0;
    let concatString = "";

    data.forEach((item) => {
      if (/^-?\d+$/.test(item)) {
        const num = parseInt(item, 10);
        if (num % 2 === 0) {
          evenNumbers.push(item);
        } else {
          oddNumbers.push(item);
        }
        sum += num;
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
        concatString += item;
      } else {
        specialChars.push(item);
      }
    });

    // Reverse + alternating caps
    let reversedConcat = concatString
      .split("")
      .reverse()
      .map((ch, i) =>
        i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()
      )
      .join("");

    return res.status(200).json({
      is_success: true,
      user_id: `${FULL_NAME.toLowerCase()}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets,
      special_characters: specialChars,
      sum: sum.toString(),
      concat_string: reversedConcat,
    });
  } catch (error) {
    return res.status(500).json({
      is_success: false,
      message: "Something went wrong",
    });
  }
});

// GET route for /bfhl
app.get("/bfhl", (req, res) => {
  res.status(200).json({
    "operation_code": 1
  });
});

// Default route
app.get("/", (req, res) => {
  res.send("BFHL API is running 🚀");
});

// Run locally
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; // For Vercel
