class Swaglabs {
  constructor() {
    this.error = '[data-test="error"]';
    this.loginButton = '#login-button';
    this.sortContainer = '[data-test="product_sort_container"]';
    this.itemPrice = '.inventory_item_price';
    this.addButton = '.btn_inventory';
    this.shoppingCartLink = '.shopping_cart_link';
    this.cartItem = '.cart_item';
    this.itemName = '.inventory_item_name';
    this.checkoutButton = '#checkout';
    this.firstName = '#first-name';
    this.lastName = '#last-name';
    this.zip = '#postal-code';
    this.continueButton = '#continue';
    this.finishButton = '#finish';
    this.header = '.complete-header';
  }

  orderBy(option) {
    cy.get(this.sortContainer).select(option);
  }

  addMultipleItems(n) {
    for (let index = 0; index < n; index++) {
      cy.get(this.addButton).eq(index).click();
    }
  }

  goToShoppingCart() {
    cy.get(this.shoppingCartLink).click();
  }

  addSpecificProduct(nameProduct) {
    cy.contains(nameProduct).click();
    cy.get(this.addButton).click();
  }

  clickCheckoutButton() {
    cy.get(this.checkoutButton).click();
  }

  enterClientData(firstName, lastName, zip) {
    cy.get(this.firstName).type(firstName);
    cy.get(this.lastName).type(lastName);
    cy.get(this.zip).type(zip);
  }

  finishThePurchase() {
    cy.get(this.continueButton).click();
    cy.get(this.finishButton).click();
  }
}

export default new Swaglabs();
