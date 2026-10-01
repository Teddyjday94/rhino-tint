import { describe, expect, test } from "vitest";
import { BUSINESS } from "@/data/business";
describe("BUSINESS", () => {
  test("centralizes approved public facts", () => {
    expect(BUSINESS.name).toBe("Rhino Window Tint");
    expect(BUSINESS.phone).toBe("(225) 210-7353");
    expect(BUSINESS.phoneHref).toBe("tel:+12252107353");
    expect(BUSINESS.address).toBe("44014 LA-431");
    expect(BUSINESS.cityLine).toBe("St. Amant, LA 70774");
    expect(BUSINESS.hours).toEqual(["Monday-Saturday: 8:00 AM-5:00 PM","Sunday: Closed"]);
    expect(BUSINESS.rating).toBe(5);
    expect(BUSINESS.reviewCount).toBe(327);
  });
});
