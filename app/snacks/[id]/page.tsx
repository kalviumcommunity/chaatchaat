// TODO (Tasks 7 & 8 — Routing/Navigation + Dynamic Routes & Data Fetching)
// This is the DYNAMIC detail route: /snacks/[id]
//
// What to build:
//  Task 8 (Dynamic route + data fetching):
//    - Read the dynamic `id` from params (params.id).
//    - Fetch a single snack from `/api/snacks/{id}` on the server
//      (this is an async Server Component — you can `await fetch(...)`).
//      Build an absolute URL, e.g.:
//        const res = await fetch(`http://localhost:3000/api/snacks/${params.id}`, { cache: "no-store" });
//    - Conditional rendering: if the snack is not found (res.status === 404 / res not ok),
//      show a "Snack not found" message instead of crashing.
//  Task 7 (Routing & Navigation):
//    - Include a "← Back to all snacks" <Link href="/"> (className="back-link").
//
// When found, show: emoji, name, city, price (₹), spice, veg/non-veg, and the description.
// Suggested classNames: "detail", "emoji", "meta-row", and a spice badge `badge ${snack.spice}`.
//
// Hints:
//   import Link from "next/link";
//   import type { Snack } from "@/lib/types";

export default async function SnackDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // TODO: fetch the snack by params.id and handle the not-found case.

  return (
    <div>
      {/* TODO: back link + detail card (or "Snack not found") */}
      <p>TODO: snack detail for id {params.id}</p>
    </div>
  );
}
