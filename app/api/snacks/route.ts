// ✅ PROVIDED — a tiny API that serves all snacks as JSON.
// Your pages/components will fetch from "/api/snacks".
// This only works once you finish getAllSnacks() in lib/snacks.ts.
import { NextResponse } from "next/server";
import { getAllSnacks } from "@/lib/snacks";

export function GET() {
  return NextResponse.json(getAllSnacks());
}
