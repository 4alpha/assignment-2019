const sgMail = require('@sendgrid/mail');

// We've set this key in .env file
// const sedngridAPIKey = "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";

// Setting up API key
// Exporting port number to .env file
// A simple node program for executing commands
//  using an environment from an env file.
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Let's send an email
// In next step, we're going to send a welcome email
const sgSendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kaustubhz.kz153@gmail.com',
        subject: 'Thanks for registering for Task App!',
        // ES6 template string allows us to use variable name inside ` ` like ${name}
        // Note: It only take single quoted string, not double quoted
        text: `Hello there, ${name}  Wishing you a Good day`
    })
}

// To send cancellation/farewell email, after deleting user account

const sgCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kaustubhz.kz153@gmail.com',
        subject: 'We\'re sorry that you were leaving us',
        text: `${name}, We are sure that you\'ll join us soon`
    })
}
module.exports = {
    sgSendWelcomeEmail,
    sgCancellationEmail
}