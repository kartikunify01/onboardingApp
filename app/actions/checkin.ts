"use server";

import { sql } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function addCheckIn(_: any, formData: FormData) {
  const check_in_date = formData.get("date") as string;
  const language = formData.get("language") as string;
  const learnings = formData.get("taskCompleted") as string;
  const issues = formData.get("issues") as string;
  const links = formData.get("links") as string;
  await sql`
    INSERT INTO checkins (check_in_date, language, learnings, issues, links)
    VALUES (${check_in_date}, ${language}, ${learnings}, ${issues}, ${links})
  `;
  revalidatePath("/");

  return { success: true };
}
