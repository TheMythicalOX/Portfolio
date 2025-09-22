import { config } from "dotenv";
import express from "express";
import { Resend } from "resend";

config();

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi");
});

app.get("/api", async (req, res) => {
  const resend = new Resend(process.env.API_KEY);

  const { name, email, subject, message } = req.query;
  if (
    typeof name === "string" &&
    typeof email === "string" &&
    typeof message === "string" &&
    typeof subject === "string"
  ) {
    const { data, error } = await resend.emails.send({
      from: "auto-reply@elijahcline.dev",
      to: [email],
      subject: subject,
      html: `
      <body>
        <h1>${subject}</h1>
        <h2>Hello ${name}! This is an automated message. Your message:</h2>
        <p>${message}</p>
      </body>`,
    });

    if (error) {
      return res.status(400).json({ error });
    }

    res.status(200).json({ data });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
