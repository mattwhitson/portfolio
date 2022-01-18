import axios from "axios";

export default async function handler(req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_EMAIL_PASSWORD,
    },
    secure: true,
  });
  const { name, email, message, token } = req.body;

  const isHuman = await validateNotBot(token);

  if (!isHuman) {
    res.status(400).json({ error: "Recaptcha thinks you're a bot..." });
  }

  const mailData = {
    from: process.env.SENDER_EMAIL,
    to: process.env.RECIPIENT_EMAIL,
    subject: `Message From ${name}`,
    text: message + " | Sent from: " + email,
    html: `<div>${message}</div><p>Sent from:
    ${email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) return res.status(400).json({ error: err });
    else res.status(200).json();
  });
}

const validateNotBot = async (token) => {
  const secret = process.env.SECRET_KEY;
  const response = await axios
    .put(
      ` https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`
    )
    .then((response) => response.data);

  return response;
};
