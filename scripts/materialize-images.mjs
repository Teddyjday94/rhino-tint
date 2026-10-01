import fs from "node:fs";
import path from "node:path";

const bundleFiles = [
  "./media-bundle-auto.json",
  "./media-bundle-property.json",
];

let count = 0;
for (const bundleFile of bundleFiles) {
  const bundle = JSON.parse(fs.readFileSync(new URL(bundleFile, import.meta.url), "utf8"));
  for (const [src, data] of Object.entries(bundle)) {
    const target = path.join(process.cwd(), "public", src.replace(/^\//, ""));
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, Buffer.from(data, "base64"));
    count += 1;
  }
}
console.log(`Materialized ${count} Rhino media assets.`);
