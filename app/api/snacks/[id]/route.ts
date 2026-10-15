// ✅ PROVIDED — serves a single snack by id, e.g. "/api/snacks/3".
// Returns 404 JSON if the snack does not exist.
// This only works once you finish getSnackById() in lib/snacks.ts.
import { NextResponse } from "next/server";
import { getSnackById } from "@/lib/snacks";

export function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const snack = getSnackById(Number(params.id));
  if (!snack) {
    return NextResponse.json({ error: "Snack not found" }, { status: 404 });
  }
  return NextResponse.json(snack);
}
