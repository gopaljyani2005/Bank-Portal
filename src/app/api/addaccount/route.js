import mongoose from "mongoose";
import usertable from "@/lib/model/model";
import url from "@/lib/dataurl";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(url);
    const data = await usertable.find();
    return NextResponse.json(data,{status:200});
}
export async function POST(request){
    let data = await request.json();
    await mongoose.connect(url);
    let newuserdata = new usertable(data);
    let result = await newuserdata.save();
    return NextResponse.json({massage:"post is successful"},{status:200});
}