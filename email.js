import nodemailer from 'nodemailer';

class MailSender {
    constructor() {
        this.transport = nodemailer.createTransport({
            service: 'gmail',
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "michele.lunghi.mailsender@gmail.com",
                pass: "uigt tuzl vmau jjvn",
            },
        });
    }

    sendMailPromise(reciver, oggetto, messaggio) {
        return new Promise((resolve, reject) => {

            this.transport.sendMail({
                from: "michele.lunghi.mailsender@gmail.com",
                email: "michelelunghi98@gmail.com",
                oggetto: oggetto,
                messaggio: messaggio,
            }, function (err) {
                if (!err) {
                    resolve('Email sent');
                } else {
                    reject(err.message);
                }
            });
        });
    }
}

// Esporta MailSender come default
export default new MailSender();
