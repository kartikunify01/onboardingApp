import {sql} from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET() {
  console.log("request")
  const data = await sql`SELECT * FROM checkins ORDER BY check_in_date DESC`;
  return NextResponse.json(data);
}
