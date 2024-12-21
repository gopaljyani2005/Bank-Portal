import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
    const cookieStore = await cookies();
    const response = NextResponse.json({ message: "Successfully logout" }, { status: 200 });
    response.cookies.delete("adminflag"); 
    return response;
}
