const express = require("express");
const Registration = require("./schema");
const generateReport = require("./report");
const router = express.Router();

router.post("/api/register", async (req, res) => {
  try {
    const newRegistration = new Registration(req.body);
    await newRegistration.save();
    res.status(201).send("Form data saved successfully!");
  } catch (error) {
    res.status(500).send("Error saving data: " + error.message);
  }
});

router.get("/report", async (req, res) => {
  try {
    const records = await Registration.find();
    const reportHTML = generateReport(records);
    res.send(reportHTML);
  } catch (error) {
    res.status(500).send("Error fetching data: " + error.message);
  }
});

module.exports = router;
