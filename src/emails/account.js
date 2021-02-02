const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'mail@scottquintana.com',
    subject: 'Welcome to the app!',
    text: `Welcome to the app, ${name}!`
  })
}

const sendGoodbyeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'mail@scottquintana.com',
    subject: 'Your account has been deleted.',
    text: `Sorry to see you go, ${name}!`
  })
}


module.exports = { sendWelcomeEmail, sendGoodbyeEmail }