import { NextResponse } from "next/server";
const nodemailer = require('nodemailer');

export async function POST(request) {
    const username = process.env.USER_EMAIL;
    const password = process.env.EMAIL_PASSWORD;
    const myEmail = process.env.EMAIL;
    const formData = await request.json();
    const email = formData.email;
    const otp = Math.floor(100000 + Math.random() * 900852).toString();
    const message =`otp is ${otp}`;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",  
        port: 465,             
        secure: true,   
        auth: {
            user: username,
            pass: password
        },
        tls: {
            rejectUnauthorized: true
        }
    });

    try {
        const mail = await transporter.sendMail({
            from: username,           
            to: email,              
            replyTo: email,    
            subject: `Website activity from ${email}`,
            html: `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f9;
              margin: 0;
              padding: 20px;
            }
            .email-container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            h1 {
              color: #333;
              text-align: center;
            }
            p {
              font-size: 16px;
              color: #555;
              line-height: 1.6;
            }
            .details {
              background-color: #f9f9f9;
              padding: 15px;
              border-radius: 5px;
              margin-top: 20px;
              border: 1px solid #e0e0e0;
            }
            .details p {
              margin: 8px 0;
            }
            .footer {
              text-align: center;
              font-size: 14px;
              color: #888;
              margin-top: 30px;
            }
            .footer a {
              color: #007bff;
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <h1>Bank Portal Notification</h1>
            <p>Hello,</p>
            <p>We wanted to notify you about some recent activity on your account. Please find the details below:</p>
            
            <div class="details">
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>OTP:</strong> ${otp}</p>
            </div>

            <p>If you did not perform this action, please contact our support team immediately.</p>

            <div class="footer">
              <p>Thank you for using our service.</p>
              <p><a href="#">Contact Support</a> | <a href="#">Visit Website</a></p>
            </div>
          </div>
        </body>
      </html>
    `
        });

        return NextResponse.json({sendotp:otp},{status:200});
    }
    catch (error) {
        console.error(error);
        return NextResponse.json({ message: "COULD NOT SEND MESSAGE" }, { status: 500 });
    }
}
