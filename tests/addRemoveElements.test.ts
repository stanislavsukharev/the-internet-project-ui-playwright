// tests/addRemoveElements.test.ts

import { test, expect } from "@playwright/test";

test.describe("Add/Remove Elements", () => {
  test("should add and remove 3 elements", async ({ page }) => {
    await page.goto("/add_remove_elements/");
    await page.waitForSelector("text=Add Element");

    for (let i = 0; i < 3; i++) {
      await page.click("text=Add Element");
    }

    const elements = await page.$$(".added-manually");
    expect(elements.length).toBe(3);

    for (let i = 0; i < 2; i++) {
      await page
        .locator(".added-manually")
        .nth(i)
        .locator("text=Delete")
        .click();
    }

    const remainingElements = await page.$$(".added-manually");
    expect(remainingElements.length).toBe(1);

    await page.locator(".added-manually").nth(0).locator("text=Delete").click();
    const noElements = await page.$$(".added-manually");
    expect(noElements.length).toBe(0);
  });

  test("should add and remove 50 elements", async ({ page }) => {
    await page.goto("/add_remove_elements/");
    await page.waitForSelector("text=Add Element");

    for (let i = 0; i < 50; i++) {
      await page.click("text=Add Element");
    }

    let elements = await page.$$(".added-manually");
    expect(elements.length).toBe(50);

    for (let i = 0; i < 25; i++) {
      await page
        .locator(".added-manually")
        .nth(i)
        .locator("text=Delete")
        .click();
    }

    elements = await page.$$(".added-manually");
    expect(elements.length).toBe(25);

    for (let i = 0; i < 25; i++) {
      await page
        .locator(".added-manually")
        .nth(0)
        .locator("text=Delete")
        .click();
    }

    const noElements = await page.$$(".added-manually");
    expect(noElements.length).toBe(0);
  });
});
