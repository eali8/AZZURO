import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        console.log(req.body.name);

        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // Use `true` for port 465, `false` for all other ports
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        const info = {
            from: process.env.MAIL_USER, // sender address
            to: "emmy.ali.ux@gmail.com", // list of receivers
            subject: `Email from ${req.body.email}`, // Subject line
            html: `
            <div>
                <h3>Name: ${req.body.name}</h3>
                <h3>Email: ${req.body.email}</h3>
                <p>${req.body.message}</p>
            </div>
            `,
        }
        console.log(info);

        await transporter.sendMail(info);

        return res.status(200).json({ message: "Mail Sent Successfully!" });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}
