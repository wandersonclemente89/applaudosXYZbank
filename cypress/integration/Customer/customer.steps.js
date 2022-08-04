import { Given, And } from "cypress-cucumber-preprocessor/steps";
import customerPage from "../../support/pageObjects/customerPage";


And('inserts the amount {string}',(amount)=>{
    customerPage.insertAmount(amount);
});

Then('message {string} is shown',(message)=>{
    customerPage.assertMessage(message);
});

And('the account balance is updated to {string}', (amount)=>{
    customerPage.assertAmount(amount);
});