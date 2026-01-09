import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.RESEND_API_KEY) {
  throw new Error("Please provide RESEND_API_KEY in the .env file");
}

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({ sendTo, subject, html }) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Binkeyit <onboarding@resend.dev>",
      to: sendTo,
      subject,
      html,
    });

    if (error) {
      console.error("Email sending error:", error);
      return null;
    }

    return data;
  } catch (err) {
    console.error("Send email failed:", err.message);
    return null;
  }
};

export default sendEmail;
