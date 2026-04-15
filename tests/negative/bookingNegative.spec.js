// tests/negative/bookingNegative.spec.js
import { test, expect } from '@playwright/test';
import loginData from '../../testdata/loginData';
import searchData from '../../testdata/searchdata';
import bookingData from '../../testdata/bookingData';

test.describe('Negative Booking Tests - Missing Fields', () => {
  
  test.beforeEach(async ({ page }) => {
    // Login and navigate to booking page
    await page.goto('https://adactinhotelapp.com/');
    await page.fill('#username', loginData.validUsers[0].username);
    await page.fill('#password', loginData.validUsers[0].password);
    await page.click('#login');
    
    // Search hotel
    await page.selectOption('#location', searchData.validSearches[0].location);
    await page.selectOption('#hotels', searchData.validSearches[0].hotel);
    await page.selectOption('#room_type', searchData.validSearches[0].roomType);
    await page.selectOption('#room_nos', searchData.validSearches[0].rooms);
    await page.fill('#datepick_in', searchData.validSearches[0].checkIn);
    await page.fill('#datepick_out', searchData.validSearches[0].checkOut);
    await page.selectOption('#adult_room', searchData.validSearches[0].adults);
    await page.click('#Submit');
    
    // Select hotel
    await page.click('#radiobutton_0');
    await page.click('#continue');
  });

  bookingData.invalidBookings.forEach((booking, index) => {
    test(`Negative Booking Test ${index + 1}: ${booking.error}`, async ({ page }) => {
      console.log(`Testing: ${booking.error}`);
      
      // Fill form with missing field
      if (booking.firstName) await page.fill('#first_name', booking.firstName);
      if (booking.lastName) await page.fill('#last_name', booking.lastName);
      if (booking.address) await page.fill('#address', booking.address);
      if (booking.cardNo) await page.fill('#cc_num', booking.cardNo);
      if (booking.cardType) await page.selectOption('#cc_type', booking.cardType);
      if (booking.expMonth) await page.selectOption('#cc_exp_month', booking.expMonth);
      if (booking.expYear) await page.selectOption('#cc_exp_year', booking.expYear);
      if (booking.cvv) await page.fill('#cc_cvv', booking.cvv);
      
      await page.click('#book_now');
      
      // Wait a bit for validation
      await page.waitForTimeout(2000);
      
      // Assertion: Stay on booking page
      await expect(page).toHaveTitle('Adactin.com - Book A Hotel');
      
      // Assertion: Check for error message (case-insensitive)
      const errorMessage = page.locator(`text=/${booking.error}/i`).first();
      await expect(errorMessage).toBeVisible({ timeout: 5000 });
      console.log(`✓ Error handled: ${booking.error}`);
    });
  });
});
