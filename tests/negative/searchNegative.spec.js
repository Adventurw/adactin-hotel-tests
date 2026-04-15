// tests/negative/searchNegative.spec.js
import { test, expect } from '@playwright/test';
import loginData from '../../testdata/loginData';
import searchData from '../../testdata/searchdata';

test.describe('Negative Search Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Login first
    await page.goto('https://adactinhotelapp.com/');
    await page.fill('#username', loginData.validUsers[0].username);
    await page.fill('#password', loginData.validUsers[0].password);
    await page.click('#login');
  });

  searchData.invalidSearches.forEach((search, index) => {
    test(`Negative Search Test ${index + 1}: ${search.error}`, async ({ page }) => {
      console.log(`Testing invalid search: ${search.error}`);
      
      // Fill search form with invalid data
      if (search.location) await page.selectOption('#location', search.location);
      if (search.hotel) await page.selectOption('#hotels', search.hotel);
      if (search.roomType) await page.selectOption('#room_type', search.roomType);
      if (search.rooms) await page.selectOption('#room_nos', search.rooms);
      if (search.checkIn) await page.fill('#datepick_in', search.checkIn);
      if (search.checkOut) await page.fill('#datepick_out', search.checkOut);
      if (search.adults) await page.selectOption('#adult_room', search.adults);
      
      await page.click('#Submit');
      
      await page.waitForTimeout(1000);
      // Assertion: Stay on search page (not navigated)
      await expect(page).toHaveTitle('Adactin.com - Search Hotel');
      
      // Assertion: Check for error message
      if (search.error === 'Please select location') {
        await expect(page.locator('#location_span')).toBeVisible();
      } else  {
         const errorText = search.error;
        await expect(page.locator(`text="${errorText}"`).first()).toBeVisible();
      }
      
      console.log(`✓ Error handled correctly - error message displayed: "${search.error}"`);
    });
  });
});
