import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ message: "Tous les champs sont obligatoires" }, { status: 400 })
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.EMAIL_TO) {
      console.error("Missing environment variables")
      return NextResponse.json({ message: "Configuration du serveur incomplète" }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email à toi
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      replyTo: email,
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

    // Confirmation au visiteur
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

    return NextResponse.json({ message: "Message envoyé avec succès !" }, { status: 200 })
  } catch (error) {
    console.error("Erreur lors de l'envoi du mail :", error)
    return NextResponse.json(
      {
        message: "Erreur interne du serveur",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}

