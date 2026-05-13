import { demoFlavors } from "../data/demo-flavors";
import { flavorNotes } from "../data/flavor-notes";

const missing = demoFlavors.filter((f) => !(f.id in flavorNotes));
const fallback = demoFlavors.filter((f) => f.notes.startsWith("Representative"));

if (missing.length) {
  console.log("MISSING IDs:", missing.map((f) => f.id).join(", "));
} else {
  console.log("All IDs covered in flavorNotes");
}
console.log(`Family fallbacks: ${fallback.length}`);
console.log(`Unique notes: ${demoFlavors.length - fallback.length} / ${demoFlavors.length}`);
