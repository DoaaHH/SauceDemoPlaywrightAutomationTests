
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import * as fs from 'fs';
import * as path from 'path';

// قراءة بيانات المستخدم من JSON
const filePath = path.join(__dirname, '../fixtures/user.json');
const Doaa = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

test.describe('Login Test Cases', () => {

  test('01- Successful login with valid credentials', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goTo();
    await login.login(Doaa.validUser.username, Doaa.validUser.password);

    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('02- Unsuccessful login with invalid credentials', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goTo();
    await login.login(Doaa.invalidUser.username, Doaa.invalidUser.password);

    await expect(login.errorMessage).toBeVisible();
  });

  test('03- Login with empty credentials', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goTo();
    await login.login(Doaa.emptyUser.username, Doaa.emptyUser.password);

  
  });
   test.only('04- Successful login with valid credentials', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goTo();
    await login.login(Doaa.validUser.username, Doaa.validUser.password);

    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('.title')).toHaveText('Products');
  });

});