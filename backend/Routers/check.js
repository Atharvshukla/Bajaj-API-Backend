import express from "express";

const router = express.Router();

router.post("/process-data", (req, res) => {
  const data = req.body.data || [];
  
  // Extract numbers and alphabets
  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item));
  const lowercaseAlphabets = alphabets.filter(item => item === item.toLowerCase());
  
  // Find the highest lowercase alphabet
  const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 ? [Math.max(...lowercaseAlphabets)] : [];

  const response = {
    is_success: true,
    user_id: "john_doe_17091999",
    email: "john@xyz.com",
    roll_number: "ABCD123",
    numbers: numbers,
    alphabets: alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet
  };

  res.json(response);
});

router.get("/process-data", (req, res) => {
  const operation_code = {
    operation_code: "some_code" // Replace with your logic if needed
  };
  res.json(operation_code);
});

export default router;
