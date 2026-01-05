


# Playwright Automation Task

This project uses **Playwright + TypeScript** to automate test cases for the demo website [https://www.saucedemo.com](https://www.saucedemo.com)

---

## 🛠 Requirements

- Node.js (v16 or later)
- Visual Studio Code
- Playwright (will be installed via command)

---

## 📦 Project Setup

```bash
# 1. Clone the repo (or create a new project folder)
git clone <your-repo-url>

# 2. Install dependencies
npm install

# 3. Install Playwright browsers
npx playwright install
```

---

## 📁 Folder Structure

- `tests/`: Contains the test scenarios (.spec.ts files)
- `pages/`: Page Object Model (POM) classes for each page
- `fixtures/`: Static test data (e.g., user credentials)
- `utils/`: Helper functions or utilities
- `config/`: Playwright configuration (baseURL, timeouts, etc.)

---

## ▶️ Running Tests

```bash
npx playwright test
```

To run a specific test file:
```bash
npx playwright test tests/login.spec.ts
```

To see the report:
```bash
npx playwright show-report
```

---

## ✅ Test Scenarios to Cover

1. **Login with valid credentials**
2. **Login with invalid credentials (and verify error)**
3. **Add product to cart and verify it appears**
4. **Remove product from cart**
5. **Checkout flow with input data and success page**

---

## 📌 Notes

- Use Page Object Model for clean structure.
- Keep test data (like usernames/passwords) in JSON files.
- Write clean, readable code and meaningful test names.
- Keep your test steps organized (Arrange – Act – Assert).

---

## 👩‍💻 User Credentials

```json
{
  "validUser": {
    "username": "standard_user",
    "password": "secret_sauce"
  },
  "invalidUser": {
    "username": "locked_out_user",
    "password": "wrong_password"
  }
}
```

---

## 📄 References

- Playwright Docs: https://playwright.dev
# Playwright Automation Project - SauceDemo

## 📌 Tech Stack
- Playwright
- TypeScript
- Page Object Model
- Node.js

## 📂 Project Structure
- tests/: Test scenarios
- pages/: Page Object Models
- fixtures/: Test data
- playwright.config.ts: Playwright configuration

## ▶️ How to Run Tests
```bash
npm install
npx playwright test
npx playwright test --headed

