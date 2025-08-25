import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", "true")
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT")
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  )

  // Handle OPTIONS request for CORS preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end()
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" })
  }

  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Tous les champs sont obligatoires" })
  }

  // Check if environment variables are set
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.EMAIL_TO) {
    console.error("Missing environment variables")
    return res.status(500).json({ message: "Configuration du serveur incomplète" })
  }

  try {
    console.log("Creating transporter...")
    // Create only one transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail", // Using Gmail service instead of custom SMTP
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    console.log("Sending email to recipient...")
    // Email to you
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_USER}>`, // Use your email as sender to avoid spam filters
      replyTo: email, // Set reply-to as the visitor's email
      to: process.env.EMAIL_TO,
      subject: `Nouveau message de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div>
          <h2>Nouveau message de contact</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    })

    console.log("Sending confirmation email to visitor...")
    // Confirmation email to visitor (simplified without React Email)
    await transporter.sendMail({
      from: `"Your Name" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Confirmation de réception",
      html: `
        <div>
          <h2>Merci pour votre message, ${name}!</h2>
          <p>Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.</p>
          <p>Cordialement,</p>
          <p>Votre Nom</p>
        </div>
      `,
    })

    console.log("Emails sent successfully.")
    return res.status(200).json({ message: "Message envoyé avec succès !" })
  } catch (error) {
    console.error("Erreur lors de l'envoi du mail :", error)
    return res.status(500).json({
      message: "Erreur interne du serveur",
      details: error instanceof Error ? error.message : String(error),
    })
  }
}

