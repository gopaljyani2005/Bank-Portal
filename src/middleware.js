import { cookies } from "next/headers";
import {  NextResponse } from "next/server";
import { verifyToken } from "./utils/token";

export default async function middleware(request){
  const url = request.nextUrl;
  const path = url.pathname;

  const publicPath = ['/logIn','/adminlogIn','/logIn/forgotpassword'];

  const isPublicPath = publicPath.includes(path);
  if(!isPublicPath && path.startsWith('/logIn/')){
    const cookie = await cookies();
    const usertoken = cookie.get('usertoken');
    if(!usertoken){
      return NextResponse.redirect(new URL('/logIn', request.url));
    }
  }
  else if(!isPublicPath && path.startsWith('/adminlogIn/')){
    const cookie = request.cookies.get('adminflag'); 
    if(!cookie || !cookie.value){
      return NextResponse.redirect(new URL('/adminlogIn', request.url));
    }
  }
}