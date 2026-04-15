// tests/negative/loginNegative.spec.js
import { test, expect } from '@playwright/test';
import loginData from '../../testdata/loginData.js';

// Data-driven negative login tests
loginData.invalidUsers.forEach((user, index) => {
  test(`Negative Login Test ${index + 1}: ${user.error}`, async ({ page }) => {
    console.log(`Testing invalid login: ${user.username || 'empty'} / ${user.password || 'empty'}`);
    
    await page.goto('https://adactinhotelapp.com/');
    
    // Assertion: Check page title
    await expect(page).toHaveTitle('Adactin.com - Hotel Reservation System');
    
    await page.fill('#username', user.username);
    await page.fill('#password', user.password);
    await page.click('#login');
    
    // Assertion: Verify error message 
    const errorText = await page.textContent('.auth_error');
    expect(errorText).toContain(user.error);
    
    // Assertion: Still on login page (not navigated)
    await expect(page).toHaveTitle('Adactin.com - Hotel Reservation System');
    
    // Assertion: Login button still visible
    await expect(page.locator('#login')).toBeVisible();
    
    console.log(`✓ Error message verified: "${errorText}"`);
  });
});
