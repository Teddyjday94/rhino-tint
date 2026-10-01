import { test, expect } from "@playwright/test";
const routes = ["/","/automotive","/home-business","/gallery-contact"];
for (const route of routes) {
  test(`${route} loads with one h1 and working navigation`, async ({ page }) => {
    await page.goto(route);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.getByRole("link",{name:"Automotive"}).first()).toBeVisible();
    await expect(page.locator("body")).not.toContainText("undefined");
  });
}
test("mobile menu and reduced motion keep content accessible", async ({ page }) => {
  await page.emulateMedia({ reducedMotion:"reduce" });
  await page.goto("/");
  await expect(page.getByRole("heading",{level:1})).toBeVisible();
  const menu = page.getByRole("button",{name:"Menu"});
  if (await menu.isVisible()) {
    await menu.click();
    await expect(page.getByRole("navigation",{name:"Mobile navigation"})).toBeVisible();
  }
});
