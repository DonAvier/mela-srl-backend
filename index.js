import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import MailSender from './email.js';

dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Consenti richieste dal form frontend
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/send-email', async (req, res) => {
    console.log(req.body);
    const { email, oggetto, messaggio } = req.body;

    try {
        await MailSender.sendMailPromise( email, oggetto, messaggio);
        res.status(200).json({ success: true, message: "Email inviata con successo" });
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
});

app.listen(3000, () => {
    
    console.log("Server listening on http://localhost:3000");
});
