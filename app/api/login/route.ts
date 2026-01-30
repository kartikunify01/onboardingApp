import { sql } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req : NextRequest){
    const body = await req.json();
    console.log("POST REQUEST HIT!",body);
    const firstName = body.firstName.toLowerCase().trim()
    const lastName = body.lastName.toLowerCase().trim()
    const data = await sql`SELECT * FROM employees where employee_name = ${firstName + " " + lastName}`;
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