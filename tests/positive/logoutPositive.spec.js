// tests/positive/logoutPositive.spec.js
import { test, expect } from '@playwright/test';
import loginData from '../../testdata/loginData.js';
import searchData from '../../testdata/searchdata.js';
import bookingData from '../../testdata/bookingData.js';

test('Positive Test: Successful Logout', async ({ page }) => {
  console.log('Testing logout functionality');
  
  // STEP 1: LOGIN
  await page.goto('https://adactinhotelapp.com/');
  await page.fill('#username', loginData.validUsers[0].username);
  await page.fill('#password', loginData.validUsers[0].password);
  await page.click('#login');
  
  // STEP 2: SEARCH HOTEL
  await page.selectOption('#location', searchData.validSearches[0].location);
  await page.selectOption('#hotels', searchData.validSearches[0].hotel);
  await page.selectOption('#room_type', searchData.validSearches[0].roomType);
  await page.selectOption('#room_nos', searchData.validSearches[0].rooms);
  await page.fill('#datepick_in', searchData.validSearches[0].checkIn);
  await page.fill('#datepick_out', searchData.validSearches[0].checkOut);
  await page.selectOption('#adult_room', searchData.validSearches[0].adults);
  await page.click('#Submit');
  
  // STEP 3: SELECT HOTEL
  await page.click('#radiobutton_0');
  await page.click('#continue');
  
  // STEP 4: BOOK HOTEL
  await page.fill('#first_name', bookingData.validBookings[0].firstName);
  await page.fill('#last_name', bookingData.validBookings[0].lastName);
  await page.fill('#address', bookingData.validBookings[0].address);
  await page.fill('#cc_num', bookingData.validBookings[0].cardNo);
  await page.selectOption('#cc_type', bookingData.validBookings[0].cardType);
  await page.selectOption('#cc_exp_month', bookingData.validBookings[0].expMonth);
  await page.selectOption('#cc_exp_year', bookingData.validBookings[0].expYear);
  await page.fill('#cc_cvv', bookingData.validBookings[0].cvv);
  await page.click('#book_now');
  
  // Wait for booking confirmation page to load
  await page.waitForTimeout(8000);
  
  // STEP 5: NOW LOGOUT BUTTON IS VISIBLE - CLICK IT
  await page.click('#logout');
  
  // STEP 6: VERIFY LOGOUT SUCCESSFUL
  await page.waitForTimeout(2000);
  await expect(page.locator('.reg_success').first()).toContainText('You have successfully logged out');
  
  console.log('✓ Logout test passed');
});
