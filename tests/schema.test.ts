import { expect, test } from "vitest";
import { localBusinessSchema } from "@/lib/schema";
test("local business schema uses centralized Rhino facts", () => {
  const schema = localBusinessSchema();
  expect(schema.name).toBe("Rhino Window Tint");
  expect(schema.telephone).toBe("+1-225-210-7353");
  expect(schema.address.streetAddress).toBe("44014 LA-431");
  expect(schema.aggregateRating.reviewCount).toBe(327);
});
