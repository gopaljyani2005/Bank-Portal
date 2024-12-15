import { NextResponse } from "next/server";
const nodemailer = require('nodemailer');

export function GET(){
    return NextResponse.json({message:"sueecess full the api"});
}

export async function POST(request) {
    const username = process.env.USER_EMAIL;
    const password = process.env.EMAIL_PASSWORD;
    const myEmail = process.env.EMAIL;
    const formData = await request.json();
    const email = formData.email;
    const name = formData.name;
    const accountNumber = formData.accountNumber;
    const pass_word = formData.password;

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
      .bank-info {
        margin-top: 30px;
        background-color: #f1f1f1;
        padding: 15px;
        border-radius: 5px;
        border: 1px solid #e0e0e0;
      }
      .bank-info p {
        margin: 5px 0;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <h1>Account Successfully Created</h1>
      <p>Hii ${name},</p>
      <p><strong>Congratulations! 🎉</strong></p>
      <p>Your account has been successfully created.</p>

      <div class="details">
        <p><strong>Account Number:</strong> ${accountNumber}</p>
        <p><strong>Password:</strong> ${pass_word}</p>
      </div>

      <p>Please <strong>do not share</strong> your password with others for security reasons.</p>

      <div class="footer">
        <p>Thank you for choosing us!</p>
      </div>

      <div class="bank-info">
        <h3>Bank Details</h3>
        <p></strong>Sincerely,</p>
        <p></strong>SBI NEFT Team,</p>
      </div>
    </div>
  </body>
</html>
    `
        });

        return NextResponse.json({message:"successful"},{status:200});
    }
    catch (error) {
        console.error(error);
        return NextResponse.json({ message: "COULD NOT SEND MESSAGE" }, { status: 500 });
    }
}
