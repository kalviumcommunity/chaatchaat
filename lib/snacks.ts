import type { Snack } from "./types";

// ✅ PROVIDED — the "database". Do not edit this array.
const SNACKS: Snack[] = [
  { id: 1, name: "Pani Puri", city: "Mumbai", price: 30, spice: "fiery", vegetarian: true, emoji: "💧", description: "Crispy hollow puris filled with spicy-tangy tamarind water, potato and chickpeas. Eaten in one explosive bite." },
  { id: 2, name: "Vada Pav", city: "Mumbai", price: 20, spice: "medium", vegetarian: true, emoji: "🍔", description: "Mumbai's burger: a spicy potato fritter in a soft pav with garlic chutney. The original fast food." },
  { id: 3, name: "Masala Dosa", city: "Bengaluru", price: 70, spice: "mild", vegetarian: true, emoji: "🥞", description: "Crispy fermented rice crepe wrapped around spiced potato, served with sambar and coconut chutney." },
  { id: 4, name: "Chole Bhature", city: "Delhi", price: 90, spice: "medium", vegetarian: true, emoji: "🫓", description: "Fluffy deep-fried bhature with a bowl of rich, spicy chickpea curry. A heavy, happy breakfast." },
  { id: 5, name: "Kathi Roll", city: "Kolkata", price: 80, spice: "medium", vegetarian: false, emoji: "🌯", description: "Flaky paratha rolled around kebab, egg, onions and chutney. Kolkata's gift to street food." },
  { id: 6, name: "Dahi Puri", city: "Mumbai", price: 50, spice: "mild", vegetarian: true, emoji: "🥣", description: "Puris topped with cool yogurt, sweet chutneys, sev and spices. The gentle cousin of pani puri." },
  { id: 7, name: "Pav Bhaji", city: "Mumbai", price: 100, spice: "medium", vegetarian: true, emoji: "🍲", description: "Buttery mashed vegetable curry served with toasted pav. Finished with a mountain of butter." },
  { id: 8, name: "Litti Chokha", city: "Patna", price: 60, spice: "fiery", vegetarian: true, emoji: "🔥", description: "Roasted wheat balls stuffed with spiced sattu, served with smoky mashed vegetable chokha." }
];

// ----------------------------------------------------------------------------
// TODO (Task 2 — Data layer): complete these two typed functions.
// They must use the Snack type. Do NOT use `any`.
// ----------------------------------------------------------------------------

// Return the full list of snacks.
export function getAllSnacks(): Snack[] {
  // TODO: return all snacks
  return [];
}

// Return the single snack whose id matches, or undefined if none matches.
export function getSnackById(id: number): Snack | undefined {
  // TODO: find and return the matching snack
  return undefined;
}
