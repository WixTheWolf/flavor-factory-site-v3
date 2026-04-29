import { test, expect } from "@playwright/test";

const routes = ["/", "/flavors", "/industries", "/request-samples"];

for (const route of routes) {
  test(`visual smoke ${route}`, async ({ page }) => {
    await page.goto(route);
    await expect(page).toHaveScreenshot(`route-${route.replace(/\W+/g, "-")}.png`, {
      fullPage: true,
    });
  });
}
