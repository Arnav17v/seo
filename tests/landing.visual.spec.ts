import { expect, test } from "@playwright/test";

test("desktop composition has no horizontal overflow and loads brand assets", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page.locator(".hero-product-scene")).toBeVisible();
  const headerBrand = page.locator(".site-header .brand img");
  const taggdLogo = page.getByAltText("Taggd");
  const jaipurLogo = page.getByAltText("JaipurStuffs");

  await expect
    .poll(() =>
      headerBrand.evaluate(
        (image) => (image as HTMLImageElement).naturalWidth > 0,
      ),
    )
    .toBeTruthy();

  await taggdLogo.scrollIntoViewIfNeeded();
  await expect(taggdLogo).toBeVisible();
  await expect
    .poll(() =>
      taggdLogo.evaluate(
        (image) => (image as HTMLImageElement).naturalWidth > 0,
      ),
    )
    .toBeTruthy();

  await jaipurLogo.scrollIntoViewIfNeeded();
  await expect(jaipurLogo).toBeVisible();
  await expect
    .poll(() =>
      jaipurLogo.evaluate(
        (image) => (image as HTMLImageElement).naturalWidth > 0,
      ),
    )
    .toBeTruthy();

  const metrics = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));

  expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth + 1);
});

test("mobile layout keeps navigation and growth loop readable", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(
    page.getByRole("link", { name: /Agent Mode\s+—\s+Coming Soon/ }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Close menu" }).click();

  const createTab = page.getByRole("tab").nth(3);
  await createTab.scrollIntoViewIfNeeded();
  await createTab.click();
  await expect(page.locator(".growth-loop")).toHaveAttribute(
    "data-active-stage",
    "Create",
  );
  await expect(page.locator(".product-state")).toBeVisible();

  const metrics = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));

  expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth + 1);
});
