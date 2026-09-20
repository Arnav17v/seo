import { expect, test } from "@playwright/test";

test.use({ reducedMotion: "reduce" });

test("reduced motion keeps the page usable without animation-dependent reveals", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page.locator(".growth-loop")).toHaveAttribute(
    "data-motion",
    "reduced",
  );
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /Turn visibility into growth\./,
    }),
  ).toBeVisible();
  await expect(page.locator("#agent-mode")).toContainText(
    "Agent Mode — Coming Soon",
  );
  await expect(page.locator("video")).toHaveCount(0);
});
