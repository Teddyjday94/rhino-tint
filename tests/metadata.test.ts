import { describe, expect, test } from "vitest";
import { pageMetadata } from "@/lib/metadata";
describe("metadata", () => {
  test("creates unique canonical-ready metadata", () => {
    const auto = pageMetadata("Automotive Window Tint","Auto description","/automotive");
    const home = pageMetadata("Home & Business Window Tint","Property description","/home-business");
    expect(auto.title).not.toBe(home.title);
    expect(auto.description).not.toBe(home.description);
    expect(auto.alternates?.canonical).toBe("https://rhinowindowtint.com/automotive");
  });
});
