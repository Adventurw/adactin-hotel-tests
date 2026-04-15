// tests/negative/logoutNegative.spec.js
import { test, expect } from '@playwright/test';

test('Negative Test: Logout without logging in', async ({ page }) => {
  console.log('Testing logout without login');
  
  // Try to directly access logout URL
  await page.goto('https://adactinhotelapp.com/Logout.php');
  
  // Assertion: Should be on logout page
  await expect(page).toHaveTitle('Adactin.com - Logout');
  
  // Assertion: Should see logout message
  await expect(page.locator('text=You have successfully logged out')).toBeVisible();
  
  // Assertion: Should have link to login again
  await expect(page.locator('text=Click here to login again')).toBeVisible();
  
  console.log('✓ Logout page displayed correctly');
});

test('Negative Test: Access protected page without login', async ({ page }) => {
  console.log('Trying to access Search page without login');
  
  // Try to directly access search page
  await page.goto('https://adactinhotelapp.com/SearchHotel.php');
  
  // Assertion: Should redirect to login
  await expect(page).toHaveTitle('Adactin.com - Hotel Reservation System');
  
  // Assertion: Login form visible
  await expect(page.locator('#username')).toBeVisible();
  
  console.log('✓ Protected page redirects to login');
});
