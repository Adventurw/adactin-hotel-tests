// tests/e2e/endToEndBooking.spec.js
import { test, expect } from '@playwright/test';
import loginData from '../../testdata/loginData.js';
import searchData from '../../testdata/searchdata.js';
import bookingData from '../../testdata/bookingData.js';


test('End-to-End: Complete Hotel Booking Flow', async ({ page }) => {
  console.log('=== Starting End-to-End Test ===');
  
  // STEP 1: LOGIN
  console.log('Step 1: Logging in...');
  await page.goto('https://adactinhotelapp.com/');
  await expect(page).toHaveTitle('Adactin.com - Hotel Reservation System');
  
  await page.fill('#username', loginData.validUsers[0].username);
  await page.fill('#password', loginData.validUsers[0].password);
  await page.click('#login');
  
  // Verify login success
  await expect(page.locator('.welcome_menu').first()).toContainText('Welcome to Adactin Group of Hotels');
  console.log('✓ Login successful');
  
  // STEP 2: SEARCH HOTEL
  console.log('Step 2: Searching hotel...');
  await expect(page).toHaveTitle('Adactin.com - Search Hotel');
  
  await page.selectOption('#location', searchData.validSearches[0].location);
  await page.selectOption('#hotels', searchData.validSearches[0].hotel);
  await page.selectOption('#room_type', searchData.validSearches[0].roomType);
  await page.selectOption('#room_nos', searchData.validSearches[0].rooms);
  await page.fill('#datepick_in', searchData.validSearches[0].checkIn);
  await page.fill('#datepick_out', searchData.validSearches[0].checkOut);
  await page.selectOption('#adult_room', searchData.validSearches[0].adults);
  await page.click('#Submit');
  
  // Verify search results
  await expect(page).toHaveTitle('Adactin.com - Select Hotel');
  console.log('✓ Search completed');
  
  // STEP 3: SELECT HOTEL
  console.log('Step 3: Selecting hotel...');
  await page.click('#radiobutton_0');
  await page.click('#continue');
  
  await expect(page).toHaveTitle('Adactin.com - Book A Hotel');
  console.log('✓ Hotel selected');
  
  // STEP 4: BOOK HOTEL
  console.log('Step 4: Filling booking details...');
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
  await page.waitForTimeout(8000);
  console.log('✓ Booking submitted');
  
  // STEP 5: BOOKING CONFIRMATION
  console.log('Step 5: Verifying confirmation...');
  await expect(page).toHaveTitle('Adactin.com - Hotel Booking Confirmation');
  
  // Get order number
  const orderNo = await page.inputValue('#order_no');
  expect(orderNo).toBeTruthy();
  console.log(`✓ Booking confirmed! Order Number: ${orderNo}`);
  
 // STEP 6: BOOKING ITINERARY
    console.log('Step 6: Checking itinerary...');
    
    // Click on My Itinerary button
    await page.click('#my_itinerary');
    
    // Wait for navigation to complete
    await page.waitForURL('**/BookedItinerary.php', { timeout: 10000 });
    
    // Wait for the itinerary table to load
    await page.waitForSelector('#booked_form', { timeout: 10000 });
    
    // Verify the booking appears by looking for the order number in the table
    const orderInput = page.locator(`input[value="${orderNo}"]`).first();
    await expect(orderInput).toBeVisible({ timeout: 10000 });
    console.log('✓ Booking found in itinerary');
  // STEP 7: LOGOUT
  console.log('Step 7: Logging out...');
  await page.click('#logout');

  // Wait for logout to complete
  await page.waitForSelector('.reg_success', { timeout: 5000 });
  
  // Verify logout
  await expect(page.locator('.reg_success')).toContainText('You have successfully logged out.');
  console.log('✓ Logout successful');
  
  console.log('=== End-to-End Test Completed Successfully! ===');
});
