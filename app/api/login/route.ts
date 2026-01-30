import { sql } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req : NextRequest){
    const body = await req.json();
    console.log(body);
    const firstName = body.firstName.length > 0 ? body.firstName.toLowerCase().trim() : "";
    const lastName =  body.lastName ? body.lastName.toLowerCase().trim() : "";
    console.log("fn : ",firstName);
    console.log("fn : ",lastName);
    const data = await sql`SELECT * FROM employees where employee_name = ${(firstName + " " + lastName).trim()}`;
    console.log("POST REQUEST HIT!",data);
    if(data.length == 0){
        return NextResponse.json({
            message : "Invalid User",
            success : false
        })
    }
    return NextResponse.json({
        success : true,
        data:data
    })
}