import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { subject, message, email } = await request.body;

    // Create a transporter using your email credentials
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define the email options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: subject,
      html: `<h3>Hello</h3>
             <li>title: ${subject}</li>
             <li>message: ${message}</li>`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed" }, { status: 500 });
  }
}
