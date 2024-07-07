import nodemailer from "nodemailer";

export default async (req, res) => {
  console.log("Received: ", req.method, req.body);
  if (req.method !== "POST") {
    console.log("Invalid request ", req.method);
    return res.status(405).send("Method Not Allowed");
  }

  const { name, country, motive, mail, note } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: mail,
    to: process.env.EMAIL_TO,
    motive: motive,
    text: `Name: ${name}\nCountry: ${country}\nEmail: ${mail}\n\nnote:\n${note}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email.");
  }
};
