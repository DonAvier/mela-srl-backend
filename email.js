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
                pass: "tktf yzzz nrkk podn",
            },
        });
    }

    sendMailPromise(emailUtente, oggetto, messaggio) {
        return new Promise((resolve, reject) => {
            this.transport.sendMail({
                from: '"MELA SRL" <michele.lunghi.mailsender@gmail.com>',   // usa nome + mail
                to: "michelelunghi98@gmail.com",  // fisso
                subject: `Nuovo contatto dal sito - ${oggetto}`,
                text: `Hai ricevuto un messaggio dal sito.\n\nEmail del mittente: ${emailUtente}\n\nMessaggio:\n${messaggio}`,
            }, (err, info) => {
                if (!err) {
                    console.log("Email inviata:", info.response);
                    resolve('Email inviata con successo');
                } else {
                    console.error("Errore nodemailer:", err);
                    reject(err.message);
                }
            });
        });
    }
}

export default new MailSender();
