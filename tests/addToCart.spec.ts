import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(__dirname, '../fixtures/user.json');
const user = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

test('Add product to cart', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const cart = new CartPage(page);

  await login.goTo();
  await login.login(user.validUser.username, user.validUser.password);

  await products.addProductToCart();
  await products.openCart();

  await expect(cart.cartItem).toBeVisible();
});
