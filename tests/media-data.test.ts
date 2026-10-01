import { describe, expect, test } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { MEDIA } from "@/data/media";
import { GALLERY_ITEMS } from "@/data/gallery";
describe("media library", () => {
  test("every local media asset exists and has useful alt text", () => {
    for (const media of Object.values(MEDIA)) {
      expect(media.src.startsWith("/images/")).toBe(true);
      expect(media.alt.trim().length).toBeGreaterThan(4);
      expect(fs.existsSync(path.join(process.cwd(),"public",media.src))).toBe(true);
    }
  });
  test("every gallery item points to known media and a valid category", () => {
    const categories = ["automotive","residential","commercial","shop-team"];
    for (const item of GALLERY_ITEMS) {
      expect(MEDIA[item.mediaKey]).toBeTruthy();
      expect(categories).toContain(item.category);
      expect(item.caption.trim().length).toBeGreaterThan(3);
    }
  });
});
