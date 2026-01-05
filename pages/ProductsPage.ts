// Page Object for Products Pageimport { Page, Locator } from '@playwright/test';
import { test, expect, Locator, Page } from '@playwright/test';
export class ProductsPage {
  readonly page: Page;
  readonly addToCartButton: Locator;
  readonly cartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addProductToCart() {
    await this.addToCartButton.click();
  }

  async openCart() {
    await this.cartIcon.click();
  }
}