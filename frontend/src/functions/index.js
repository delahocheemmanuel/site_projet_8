const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

exports.sendEmail = functions.https.onRequest((request, response) => {
  const { email, message } = request.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'votre_compte_gmail@gmail.com', // Utilisez un compte Gmail pour l'envoi d'e-mails
      pass: 'votre_mot_de_passe_gmail',
    },
  });

  const mailOptions = {
    from: 'votre_compte_gmail@gmail.com', // Utilisez la même adresse e-mail que celle configurée dans le transporter
    to: 'delahochemanu@hotmail.fr',
    subject: 'Nouveau message du formulaire de contact',
    text: `Email: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
      response.status(500).send('Une erreur s\'est produite lors de l\'envoi de l\'e-mail.');
    } else {
      response.status(200).send('E-mail envoyé avec succès !');
    }
  });
});
