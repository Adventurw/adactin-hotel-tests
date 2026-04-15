// tests/positive/loginPositive.spec.js
import { test, expect } from '@playwright/test';
import loginData from '../../testdata/loginData.js';

// Data-driven test using forEach (as shown in manual)
loginData.validUsers.forEach((user, index) => {
  test(`Positive Login Test ${index + 1}: ${user.username}`, async ({ page }) => {
    console.log(`Testing login with username: ${user.username}`);
    
    await page.goto('https://adactinhotelapp.com/');
    
    // Assertion: Check page title
    await expect(page).toHaveTitle('Adactin.com - Hotel Reservation System');
    
    await page.fill('#username', user.username);
    await page.fill('#password', user.password);
    await page.click('#login');
    
    // Assertion: Verify successful login
    await expect(page.locator('.welcome_menu').first()).toContainText('Welcome to Adactin Group of Hotels');
    
    // Assertion: Check navigation to search page
    await expect(page).toHaveTitle('Adactin.com - Search Hotel');
    
    console.log(`✓ Login successful for ${user.username}`);
  });
});
