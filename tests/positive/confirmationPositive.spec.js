// tests/positive/confirmationPositive.spec.js
import { test, expect } from '@playwright/test';
import loginData from '../../testdata/loginData';
import searchData from '../../testdata/searchdata';
import bookingData from '../../testdata/bookingData';

test('Positive Test: Booking Confirmation and Order Number Generation', async ({ page }) => {
  console.log('Testing booking confirmation and order number generation');
  
  // Login
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
  
  // Fill booking form
  await page.fill('#first_name', bookingData.validBookings[0].firstName);
  await page.fill('#last_name', bookingData.validBookings[0].lastName);
  await page.fill('#address', bookingData.validBookings[0].address);
  await page.fill('#cc_num', bookingData.validBookings[0].cardNo);
  await page.selectOption('#cc_type', bookingData.validBookings[0].cardType);
  await page.selectOption('#cc_exp_month', bookingData.validBookings[0].expMonth);
  await page.selectOption('#cc_exp_year', bookingData.validBookings[0].expYear);
  await page.fill('#cc_cvv', bookingData.validBookings[0].cvv);
  await page.click('#book_now');
  
  // Wait for processing
  await page.waitForTimeout(5000);
  
  // Assertion: Check confirmation page title
  await expect(page).toHaveTitle('Adactin.com - Hotel Booking Confirmation');
  
  // Assertion: Verify order number is generated
  const orderNo = await page.inputValue('#order_no');
  expect(orderNo).toBeTruthy();
  expect(orderNo.length).toBeGreaterThan(0);
  
  console.log(`✓ Order number generated: ${orderNo}`);
  
  
  // ✅ Test passes - we've verified we're on confirmation page and order number exists
  console.log('✓ Booking confirmation test passed');
});
