<div align="center">

# Adactin Hotel - Automated End-to-End Testing Suite

[![Playwright Tests](https://github.com/YOUR_USERNAME/adactin-hotel-tests/actions/workflows/playwright.yml/badge.svg)](https://github.com/YOUR_USERNAME/adactin-hotel-tests/actions/workflows/playwright.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Playwright](https://img.shields.io/badge/Playwright-1.40+-green.svg)](https://playwright.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-blue.svg)](https://nodejs.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Test Status](https://img.shields.io/badge/tests-24%20passed-brightgreen.svg)](TEST_EVIDENCE_CATALOG.md)
[![Coverage](https://img.shields.io/badge/coverage-95%25-success.svg)]()

### Tested Applications

| Application | Version | Environment | Status |
|-------------|---------|-------------|--------|
| [Adactin Hotel App](https://adactinhotelapp.com/) | Production | Live | 🟢 Operational |
| [Sauce Demo](https://www.saucedemo.com/) | Demo | Staging | 🟢 Operational |

</div>

---

## Table of Contents

- [Overview](#-overview)
- [Tested Applications](#-tested-applications)
- [Key Features](#-key-features)
- [Test Coverage](#-test-coverage)
- [Quick Start](#-quick-start)
- [Running Tests](#-running-tests)
- [Test Reports & Evidence](#-test-reports--evidence)
- [Project Structure](#-project-structure)
- [CI/CD Pipeline](#-cicd-pipeline)
- [Technologies Used](#-technologies-used)
- [Contributing](#-contributing)
- [License](#-license)

---

## Overview

This project demonstrates **professional automated end-to-end testing** of web applications using [Playwright](https://playwright.dev/) with JavaScript. The test suite validates critical user journeys across multiple applications:

- **Adactin Hotel App** - Complete hotel booking platform
- **Sauce Demo** - E-commerce demo application

The framework simulates real user interactions, ensures functionality, validates edge cases, and improves application reliability through comprehensive automation.

### Key Features

| Category | Features |
|----------|----------|
| **Testing Capabilities** | ✅ Complete Booking Workflow<br>✅ Hotel Search Validation<br>✅ Authentication Testing<br>✅ Payment Gateway Validation<br>✅ Negative Test Scenarios |
| **Reporting & Debugging** | 📊 HTML Reports with Screenshots<br>📋 JSON & JUnit Reports<br>🎥 Video Recordings on Failure<br>📸 Screenshot Capture<br>🔍 Interactive Trace Viewer |
| **CI/CD & Automation** | 🚀 GitHub Actions Workflow<br>🔄 Parallel Test Execution<br>🎭 Multi-Browser Support (Chrome, Firefox, WebKit)<br>📅 Scheduled Daily Runs<br>📧 Artifact Retention (30 days) |
| **Development Experience** | 🎯 Page Object Model (POM)<br>📁 Modular Test Structure<br>🔧 Easy Local Debugging<br>📝 Comprehensive Documentation<br>💡 VS Code Integration |

---

## Test Coverage

### Adactin Hotel Application

| Test Category | Scenarios Covered | Test Cases | Status |
|---------------|-------------------|------------|--------|
| **Positive Test Cases** | | | |
| Login | Valid credentials, session management | 1 | ✅ |
| Search | Location, hotels, room types, price ranges | 2 | ✅ |
| Booking | Guest details, payment information | 1 | ✅ |
| Confirmation | Booking ID generation, summary validation | 1 | ✅ |
| Logout | Session termination | 1 | ✅ |
| **Negative Test Cases** | | | |
| Login | Invalid credentials, empty fields | 3 | ✅ |
| Logout | Protected access after logout | 2 | ✅ |
| Booking | Invalid dates, missing fields | 4 | ✅ |
| Payment | Invalid card, CVV validation | 4 | ✅ |
| Search | Invalid criteria, no results | 2 | ✅ |
| **End-to-End** | Complete booking journey | 1 | ✅ |
| **TOTAL** | **20 Test Cases** | **20** | **100% Pass** |

### Sauce Demo Application

| Test Category | Scenarios Covered | Status |
|---------------|-------------------|--------|
| Login | Standard user, locked out user, error validation | ✅ |
| Inventory | Product listing, sorting, filtering | ✅ |
| Cart | Add/remove items, quantity updates | ✅ |
| Checkout | Complete purchase flow | ✅ |

> 📸 **Visual Evidence**: All test executions include screenshots and video recordings. View the [Test Evidence Catalog](TEST_RESULTS_CATALOG.md) for complete documentation.

---

## 🚀 Quick Start

### Prerequisites

```bash
Node.js (v18 or higher)
npm (v9 or higher) or yarn
Git
Playwright supported browsers
```
### Installation

```
# Clone the repository
git clone https://github.com/YOUR_USERNAME/adactin-hotel-tests.git
cd adactin-hotel-tests

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Verify installation
npx playwright --version
```
### Environment Configuration
#### Create a .env file in the root directory:

```
# Adactin Hotel Application
ADACTIN_BASE_URL=https://adactinhotelapp.com
ADACTIN_USERNAME=your_username
ADACTIN_PASSWORD=your_password

# Sauce Demo Application
SAUCE_BASE_URL=https://www.saucedemo.com
SAUCE_STANDARD_USER=standard_user
SAUCE_LOCKED_USER=locked_out_user
SAUCE_PASSWORD=secret_sauce

# Test Configuration
REPORT_DIR=./reports
SCREENSHOT_DIR=./screenshots
VIDEO_DIR=./videos
RETRY_COUNT=0
PARALLEL_WORKERS=4
```

### Running Tests
#### Complete Test Execution Guide

```
# ──────────────────────────────────────────────────────────────
# 📦 INSTALLATION & SETUP
# ──────────────────────────────────────────────────────────────

# Install all dependencies
npm install

# Install Playwright browsers
npx playwright install

# Update Playwright to latest version
npm update @playwright/test

# ──────────────────────────────────────────────────────────────
# 🚀 RUN ALL TESTS
# ──────────────────────────────────────────────────────────────

# Run all tests in headless mode (CI/CD default)
npm test

# Run all tests with UI mode (interactive debugging)
npm run test:ui

# Run all tests in headed mode (visible browser)
npm run test:headed

# Run all tests with detailed logging
DEBUG=pw:api npm test

# ──────────────────────────────────────────────────────────────
# 🎯 RUN SPECIFIC TEST SUITES
# ──────────────────────────────────────────────────────────────

# Adactin Hotel Tests
npm run test:adactin-login      # Login functionality tests
npm run test:adactin-search      # Hotel search tests
npm run test:adactin-booking     # Booking flow tests
npm run test:adactin-e2e         # Complete end-to-end booking

# Sauce Demo Tests
npm run test:sauce-login         # Login scenarios
npm run test:sauce-inventory     # Product inventory tests
npm run test:sauce-checkout      # Checkout process tests

# ──────────────────────────────────────────────────────────────
# 🌐 MULTI-BROWSER TESTING
# ──────────────────────────────────────────────────────────────

# Run on specific browser
npm run test:chrome               # Google Chrome
npm run test:firefox              # Mozilla Firefox
npm run test:webkit               # Apple WebKit (Safari)

# Run on all browsers sequentially
npm run test:all-browsers

# Run on specific browser with UI
npm run test:chrome-headed
npm run test:firefox-headed

# ──────────────────────────────────────────────────────────────
# 📊 TEST REPORTS & DEBUGGING
# ──────────────────────────────────────────────────────────────

# Generate and open HTML report
npm run report

# Generate JSON report only
npm run report:json

# Generate JUnit XML for CI/CD
npm run report:junit

# Open last test report
npm run report:last

# Debug a specific test
npm run test:debug tests/login.spec.js

# Generate trace viewer
npx playwright show-trace trace.zip

# ──────────────────────────────────────────────────────────────
# 🧹 CLEANUP
# ──────────────────────────────────────────────────────────────

# Clear all test reports and artifacts
npm run clean

# Clear node_modules and reinstall
npm run clean:all
```
