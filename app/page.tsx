"use client";

// TODO (Tasks 4, 5, 6 — Lists + Conditional Rendering, useState + Events, useEffect)
// This is the HOME page. It loads snacks from the API and lets the user search.
//
// What to build:
//  Task 6 (useEffect & data fetching):
//    - On mount, fetch "/api/snacks", parse JSON, store it in state.
//    - Show a "Loading…" message (className="loading") while the fetch is in flight.
//  Task 5 (useState + Event Handling):
//    - Keep a `query` string in state.
//    - Render the provided <input className="search-input"> and update `query`
//      on every change (onChange event).
//    - Filter snacks by name (case-insensitive) using `query`.
//  Task 4 (Lists + Conditional Rendering):
//    - Render the filtered snacks inside <div className="grid"> using .map,
//      one <SnackCard key={...} snack={...} /> per snack.
//    - If the filtered list is empty, show a message (className="empty")
//      instead of an empty grid.
//
// Hints:
//   import { useEffect, useState } from "react";
//   import type { Snack } from "@/lib/types";
//   import SnackCard from "./components/SnackCard";

export default function HomePage() {
  // TODO: add state for snacks, loading, and query.
  // TODO: add a useEffect that fetches "/api/snacks".
  // TODO: compute the filtered list from query.

  return (
    <div>
      <h1>🌶️ ChaatChaat</h1>
      <p className="subtitle">Find your next street-food obsession.</p>

      {/* TODO: controlled search input (className="search-input") */}

      {/* TODO: loading state, then the grid of SnackCards, then empty state */}
    </div>
  );
}
