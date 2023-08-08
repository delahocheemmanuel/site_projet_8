import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
const FormData = require('../models/formData');

exports.saveFormData = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const formData = new FormData({ name, email, message });
        await formData.save();

        // Configuration de Nodemailer
        const transporter = nodemailer.createTransport({
            host: 'smtp.mail.outlook.com', // Remplacez par votre serveur SMTP
            port: 587, // Remplacez par le port SMTP approprié
            secureconnection: false, // true pour le port 465, false pour les autres ports
            tls: {
                ciphers: 'SSLv3',
            },
            auth: {
                user: 'ma-de_portfolio@outlook.com', // Remplacez par votre nom d'utilisateur SMTP
                pass:process.env.PASSWORD_MAIL, // Remplacez par votre mot de passe SMTP
            },
        });

        // Définition des options de l'e-mail
        const mailOptions = {
            from: 'ma-de_portfolio@outlook.com', // Remplacez par votre adresse e-mail
            to: 'delahochemanu@hotmail.fr', // Remplacez par l'adresse e-mail du destinataire
            subject: 'New Form Submission', // Sujet de l'e-mail
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Corps de l'e-mail
        };

        // Envoi de l'e-mail
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        res.status(201).json({ message: 'Form data saved successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
};
