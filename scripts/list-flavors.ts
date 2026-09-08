import { demoFlavors } from "../data/demo-flavors";
const s = [...demoFlavors].sort((a, b) => a.family.localeCompare(b.family) || a.name.localeCompare(b.name));
s.forEach((f) => console.log(`${f.id}|${f.name}|${f.family}|${f.format}`));
console.error("TOTAL:", s.length);
