// TODO (Task 3 — Components, JSX & Typed Props)
// Build a reusable card component for one snack.
//
// Requirements:
//  - Define a typed props interface (use the Snack type from "@/lib/types").
//  - Accept a single `snack` prop (no `any`).
//  - Return JSX that shows: emoji, name, city, price (₹) and a spice badge.
//  - Wrap the whole card in a <Link> to `/snacks/{id}` so it is clickable.
//    (import Link from "next/link")
//  - Use the provided classNames: "card", "emoji", "city", "price",
//    and a spice badge: className={`badge ${snack.spice}`}
//
// Example badge: <span className={`badge ${snack.spice}`}>{snack.spice}</span>

import type { Snack } from "@/lib/types";

// TODO: replace `any` with a proper typed props interface.
export default function SnackCard(props: any) {
  // TODO: build and return the card JSX (wrapped in a Link to the detail page).
  return <div className="card">TODO: SnackCard</div>;
}
