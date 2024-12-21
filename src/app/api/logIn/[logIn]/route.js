import { NextResponse } from "next/server";
import url from "@/lib/dataurl";
import usertable from "@/lib/model/model";
import { generateToken, verifyToken } from "@/utils/token";
import mongoose from "mongoose";
import { cookies } from "next/headers";

export async function GET(request){
  const arr = request.url.split("/");
  const accountNumber = arr[arr.length - 1];
  await mongoose.connect(url);
  let userdata = await usertable.findOne({accountNumber:accountNumber});
  if(!userdata){
    return NextResponse.json({message:"user is not find!. Plese enter correct Account Number"},{status:404});
  }
  else{
    const payload = {
      accountNumber:userdata.accountNumber,
    email:userdata.email,
    name:userdata.name,
    }
    const token = generateToken(payload);
    const response =  NextResponse.json({password:userdata.password},{status:200});
    response.cookies.set("usertoken",token, {
      path: "/", 
      httpOnly: true, 
      secure: process.env.NODE_ENV === "production",
      expires:new Date(Date.now() + 60*60*1000),
    });
    return response;
  }
}