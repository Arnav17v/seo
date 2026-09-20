import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("renders approved positioning and product boundaries", async ({
  page,
}) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /Turn visibility into growth\./,
    }),
  ).toBeVisible();
  await expect(page.getByText("The organic-growth platform")).toHaveCount(0);
  await expect(
    page.getByText("Project Rankup finds where your business should show up"),
  ).toHaveCount(0);


  await expect(page.locator("video")).toHaveCount(0);
  await expect(page.locator('img[src*="Screenshot"]')).toHaveCount(0);

  await expect(
    page.getByRole("link", { name: /Start free/ }).first(),
  ).toHaveAttribute("href", "https://projectrankup.com/sign-up");
  await expect(
    page.getByRole("link", { name: /See how it works/ }),
  ).toHaveAttribute("href", "#workflow");

  const agentMode = page.locator("#agent-mode");
  await expect(agentMode).toContainText("Agent Mode — Coming Soon");
  await expect(agentMode).toContainText(
    "will increasingly automate the organic-growth workflow",
  );
  await expect(agentMode).not.toContainText(
    /approval|permission|scheduled job|trigger|completed run/i,
  );
});

test("growth loop supports direct tab navigation", async ({ page }) => {
  await page.goto("/");

  const tabs = page.getByRole("tab");
  await expect(tabs).toHaveCount(6);
  await expect(tabs.nth(0)).toContainText("Discover");

  const planTab = tabs.nth(2);
  await planTab.scrollIntoViewIfNeeded();
  await planTab.click();
  await expect(page.locator(".growth-loop")).toHaveAttribute(
    "data-active-stage",
    "Plan",
  );
  await expect(planTab).toHaveAttribute("aria-selected", "true");
  await expect(page.locator("#stage-description")).toContainText(
    "Give good ideas a place.",
  );

  await planTab.press("End");
  await expect(page.locator(".growth-loop")).toHaveAttribute(
    "data-active-stage",
    "Improve",
  );
});

test("page has no critical accessibility violations", async ({ page }) => {
  await page.goto("/");

  const results = await new AxeBuilder({ page })
    .disableRules(["color-contrast"])
    .analyze();

  expect(results.violations).toEqual([]);
});
