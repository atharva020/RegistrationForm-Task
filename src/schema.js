const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/registrationDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

const registrationSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    nickName: { type: String },
    email: { type: String, required: true },
    website: { type: String },
    address: { type: String },
    phoneNumber: { type: String },
    mobileNumber: { type: String, required: true },
    language: { type: String },
    birthDate: { type: Date },
    gender: { type: String },
    occupation: { type: String },
    company: { type: String },
    educationLevel: { type: String },
    employmentStatus: { type: String },
    annualIncome: { type: String },
    panNumber: { type: String },
    githubLink: { type: String },
    passportNumber: { type: String },
    nationality: { type: String },
    preferredContactMethod: { type: String },
    emergencyContactName: { type: String },
    emergencyContactNumber: { type: String },
    medicalConditions: { type: String },
    additionalComments: { type: String },
  },
  {
    collection: "registrationSchema",
    versionKey: false,
  }
);

const Registration = mongoose.model("Registration", registrationSchema);

module.exports = Registration;
