import { NextResponse } from "next/server";
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceSid = process.env.TWILIO_SERVICE_SID;

const client = twilio(accountSid, authToken);

export async function POST(req) {
  try {
    const body = await req.json();
    const phoneNumber = body.phoneNumber;

    if (!phoneNumber) {
      return NextResponse.json({ message: "Invalid phone number" }, { status: 400 });
    }

    const formattedPhoneNumber = phoneNumber.startsWith("+") ? phoneNumber : `+${phoneNumber}`;

    const verification = await client.verify.v2.services(serviceSid).verifications.create({
      to: formattedPhoneNumber,
      channel: "sms",
    });

    return NextResponse.json({ message: "OTP sent successfully", verification }, { status: 200 });
  } 
  catch (error) {
    console.error("Error sending OTP:", error.message);
    return NextResponse.json({ message: "Failed to send OTP", error: error.message }, { status: 500 });
  }
}
