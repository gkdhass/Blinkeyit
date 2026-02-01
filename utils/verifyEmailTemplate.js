const verifyEmailTemplate = ({ name, url }) => {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <p>Dear ${name},</p>

      <p>Thank you for registering with <strong>Binkeyit</strong>.</p>

      <a
        href="${url}"
        target="_blank"
        style="
          display: inline-block;
          background-color: #2563eb;
          color: #ffffff;
          padding: 12px 18px;
          text-decoration: none;
          border-radius: 6px;
          margin-top: 12px;
        "
      >
        Verify Email
      </a>

      <p style="margin-top: 20px; font-size: 14px; color: #666;">
        If you did not create an account, please ignore this email.
      </p>
    </div>
  `
}

export default verifyEmailTemplate
