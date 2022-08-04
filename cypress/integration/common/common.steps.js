import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import homePage from "../../support/pageObjects/homePage";
import customerPage from "../../support/pageObjects/customerPage";
import managerPage from "../../support/pageObjects/managerPage";
import headerFragment from "../../support/pageFragments/headerFragment";

Given('the user is on the home page', () => {
    headerFragment.clickOnHeaderHomeButton();
    homePage.isAt();
});

When('click on {string} login button', (loginButtonName)=>{
    homePage.clickOnLoginButton(loginButtonName);
})

Then('it is redirected to the {string} page', (userType)=>{
    switch (userType.toLowerCase().trim()) {
        case 'bank manager':
            managerPage.isAt();
            break;
        case 'customer':
            customerPage.isAt()
            break;
    }
})

And('click on {string} button', (button)=>{
    switch (button.toLowerCase().trim()) {
        case 'submit add customer':
        case 'process':
            cy.on('window:alert', (text) => {
                process.env.alertMSG = text;
            });
            managerPage.clickOnSubmitButton();
            break;
        case 'delete':
            managerPage.clickOnDeleteCustomerBtn();
            break;
        case 'submit deposit':
            customerPage.clickOnSubmitDeposit();
            break;
        case 'login':
            customerPage.clickOnLogin();
            break;
        case 'deposit':
            customerPage.clickOnDepositBtn();
            customerPage.verifyPage("Deposited");
            break;
        case 'withdraw':
            customerPage.clickOnWithdrawBtn();
            customerPage.verifyPage("Withdrawn");
            break;
        case 'submit withdraw':
            customerPage.clickOnSubmitWithDraw();
            break;
    }
});

Then('an alert popup is shown containing the message {string}', (alertMessage)=>{
    expect(process.env.alertMSG).to.contains(alertMessage);
});

When('selects the customer {string}',(customerName)=>{
    managerPage.selectUser(customerName);
});

When('selects the currency {string}',(currency)=>{
    managerPage.selectCurrency(currency);
});
