import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import React from "react";
import { render } from "@react-email/render";
import ConfirmationEmail from "../../emails/ConfirmationEmail";

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  EMAIL_FROM,
  EMAIL_TO,
} = process.env;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Tous les champs sont obligatoires" });
  }

  try {
    console.log("Creating transporter...");
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    console.log("Sending email to recipient...");
    // 📩 Email reçu par toi
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_TO,
      subject: `Nouveau message de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    console.log("Rendering confirmation email...");
    // 📩 Email de confirmation envoyé au visiteur
    const emailHtml = await render(React.createElement(ConfirmationEmail, { name }));

    console.log("Sending confirmation email to visitor...");
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Confirmation de réception",
      html: emailHtml,
    });

    console.log("Emails sent successfully.");
    return res.status(200).json({ message: "Message envoyé avec succès !" });
  } catch (error) {
    console.error("Erreur lors de l'envoi du mail :", error);
    return res.status(500).json({ message: "Erreur interne du serveur" });
  }
}
