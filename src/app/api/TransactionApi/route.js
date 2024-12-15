import mongoose from "mongoose";
import { NextResponse } from "next/server";
import url from "@/lib/dataurl";
import usertable from "@/lib/model/model";

export async function PUT(request) {
  const updatedata = await request.json();

  const senderdata = {
    balance: updatedata.senderBalance,
  };
  const reciverdata = {
    balance: updatedata.reciverBalance,
  };
  console.log(senderdata,reciverdata);
  await mongoose.connect(url);
  let session;

  try {
    session = await mongoose.startSession();
    session.startTransaction();

    // Update sender's balance
    await usertable.updateOne(
      { accountNumber: updatedata.senderAccountNumber },
      senderdata,
      { session }
    );

    // Update receiver's balance
    await usertable.updateOne(
      { accountNumber: updatedata.reciveraccountNumber },
      reciverdata,
      { session }
    );

    await session.commitTransaction();
    session.endSession();

    return NextResponse.json(
      { message: "Successful transaction" },
      { status: 200 }
    );
  } 
  catch (error) {
    if (session) {
      await session.abortTransaction();
      session.endSession();
    }

    return NextResponse.json(
      { message: "Transaction failed", error: error.message },
      { status: 500 }
    );
  }
}
