import { Resend } from "resend"
import dotenv from "dotenv"

dotenv.config()

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is missing in the .env file")
}

const resend = new Resend(process.env.RESEND_API_KEY)

const sendEmail = async ({ sendTo, subject, html }) => {
  try {
    const response = await resend.emails.send({
      from: "Binkeyit <onboarding@resend.dev>",
      to: sendTo,
      subject,
      html,
    })

    console.log("Resend response:", response)

    return response
  } catch (error) {
    console.error("Send email failed:", error)
    return null
  }
}


export default sendEmail
