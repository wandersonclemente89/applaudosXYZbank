import { Given, When } from "cypress-cucumber-preprocessor/steps";
import managerPage from "../../support/pageObjects/managerPage";

Given('the manager wants to {string}', (action) => {
   switch (action.toLowerCase().trim()) {
       case 'add a new customer':
           managerPage.clickOnAddCustomer();
           break;
       case 'open a new account':
           managerPage.clickOnOpenAccount();
           break;
       case 'view the customer details':
           managerPage.clickOnViewCustomers();
           break;
   }
});

When('inserts the customer name {string} into search field',(customerName)=>{
    managerPage.insertSearchCustomer(customerName);
});

When('inserts the below data into the customer form', (dataTable)=>{
    managerPage.insertCustomerFirstName(dataTable.raw()[0][1]);
    managerPage.insertCustomerLastName(dataTable.raw()[1][1]);
    managerPage.insertCustomerPostCode(dataTable.raw()[2][1]);
});

Then('the customer is not listed anymore', ()=>{
    managerPage.assertFilteredCustomerIsNotPresent();
});