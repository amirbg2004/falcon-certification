const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: "amirbg331@hotmail.com",
    pass: "A20101990",
  },
});

app.post("/send-contact", async (req, res) => {
  const { name, email, description } = req.body;

  const mailOptions = {
    from: email,
    to: "amirbg43@gmail.com",
    subject: "Falcon Certification Test",
    text: `${description}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending mail:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

app.listen(3000, () => {
  console.log("Server listening on port 3000.");
});

transporter.verify((error, success) => {
  if (error) console.error(error);
  else console.log("Server ready to receive messages.");
});
