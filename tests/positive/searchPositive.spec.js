// tests/positive/searchPositive.spec.js
import { test, expect } from '@playwright/test';
import loginData from '../../testdata/loginData';
import searchData from '../../testdata/searchdata';

// First login then test multiple search scenarios
test.describe('Positive Search Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Login once before each search test
    await page.goto('https://adactinhotelapp.com/');
    await page.fill('#username', loginData.validUsers[0].username);
    await page.fill('#password', loginData.validUsers[0].password);
    await page.click('#login');
    await expect(page.locator('.welcome_menu').first()).toContainText('Welcome');
  });

  // Data-driven search tests
  searchData.validSearches.forEach((search, index) => {
    test(`Positive Search Test ${index + 1}: ${search.location} - ${search.hotel}`, async ({ page }) => {
      console.log(`Testing search: ${search.location}, ${search.hotel}`);
      
      // Assertion: On search page
      await expect(page).toHaveTitle('Adactin.com - Search Hotel');
      
      // Fill search form
      await page.selectOption('#location', search.location);
      await page.selectOption('#hotels', search.hotel);
      await page.selectOption('#room_type', search.roomType);
      await page.selectOption('#room_nos', search.rooms);
      await page.fill('#datepick_in', search.checkIn);
      await page.fill('#datepick_out', search.checkOut);
      await page.selectOption('#adult_room', search.adults);
      
      // Assertion: Check button state (enabled)
      await expect(page.locator('#Submit')).toBeEnabled();
      
      await page.click('#Submit');
      
      // Assertion: Navigated to select hotel page
      await expect(page).toHaveTitle('Adactin.com - Select Hotel');
      
      // Assertion: Results are displayed
      await expect(page.locator('#radiobutton_0')).toBeVisible();
      
      console.log(`✓ Search test passed for ${search.location}`);
    });
  });
});
