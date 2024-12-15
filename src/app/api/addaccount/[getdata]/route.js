import usertable from "@/lib/model/model";
import url from "@/lib/dataurl";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
  const arr = request.url.split("/");
  const account_number = arr[arr.length - 1];
  await mongoose.connect(url);
  const data = await usertable.find();
  let userdata = [];
  for (let user of data) {
    if (user["accountNumber"] === account_number) {
      userdata = user;
      break;
    }
  }
  if (userdata.length === 0) {
    return NextResponse.json(userdata, { status: 404 });
  } else {
    return NextResponse.json(userdata, { status: 200 });
  }
}

export async function PUT(request) {
  const updatedata = await request.json();
  const arr = await request.url.split("/");
  const accountNumber = arr[arr.length - 1];
  await mongoose.connect(url);
  const updatedetail = await usertable.findOneAndUpdate(
    { accountNumber: accountNumber },
    updatedata,
    { new: true }
  );
  if (updatedetail) {
    return NextResponse.json(
      { message: "successfully update your password" },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { message: "failed to update your password.Please try again" },
      { status: 402 }
    );
  }
}

export async function DELETE(request) {
  const arr = await request.url.split("/");
  const accountNumber = arr[arr.length - 1];
  await mongoose.connect(url);
  const data = await usertable.find();
  let userdata = [];
  for (let user of data) {
    if (user["accountNumber"] === accountNumber) {
      userdata = user;
      break;
    }
  }
  if (userdata.length === 0) {
    return NextResponse.json(
      { message: "account in not find!" },
      { status: 404 }
    );
  } else {
    const deletedata = await usertable.deleteOne({
      accountNumber: accountNumber,
    });
    if (deletedata.deletedCount > 0) {
      return NextResponse.json(
        { message: "account is delted successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "account is not deleted! Please try again" },
        { status: 500 }
      );
    }
  }
}
