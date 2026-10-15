// ✅ PROVIDED — do not change these types. Use them everywhere (no `any`).

export type SpiceLevel = "mild" | "medium" | "fiery";

export interface Snack {
  id: number;
  name: string;
  city: string;
  price: number; // in rupees
  spice: SpiceLevel;
  vegetarian: boolean;
  emoji: string;
  description: string;
}
