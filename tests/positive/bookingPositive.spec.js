// tests/positive/bookingPositive.spec.js
import  { test, expect } from '@playwright/test';
import  loginData from '../../testdata/loginData';
import  searchData from'../../testdata/searchdata';
import  bookingData from '../../testdata/bookingData';

test.describe('Positive Booking Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Login and search hotel before each booking test
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

  bookingData.validBookings.forEach((booking, index) => {
    test(`Positive Booking Test ${index + 1}: ${booking.firstName} ${booking.lastName}`, async ({ page }) => {
      console.log(`Testing booking for: ${booking.firstName} ${booking.lastName}`);
      
      // Assertion: On booking page
      await expect(page).toHaveTitle('Adactin.com - Book A Hotel');
      
      // Fill booking form
      await page.fill('#first_name', booking.firstName);
      await page.fill('#last_name', booking.lastName);
      await page.fill('#address', booking.address);
      await page.fill('#cc_num', booking.cardNo);
      await page.selectOption('#cc_type', booking.cardType);
      await page.selectOption('#cc_exp_month', booking.expMonth);
      await page.selectOption('#cc_exp_year', booking.expYear);
      await page.fill('#cc_cvv', booking.cvv);
      
      // Assertion: Book now button enabled
      await expect(page.locator('#book_now')).toBeEnabled();
      
      await page.click('#book_now');
      
      // Wait for processing
      await page.waitForTimeout(5000);
      
      // Assertion: Navigated to confirmation page
      await expect(page).toHaveTitle('Adactin.com - Hotel Booking Confirmation');
      
      console.log(`✓ Booking test passed for ${booking.firstName}`);
    });
  });
});
