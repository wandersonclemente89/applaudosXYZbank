
export const getAddCustomerBtn = () => cy.get("button[ng-click='addCust()']").should('be.visible')
export const getOpenAccountBtn = () => cy.get("button[ng-click='openAccount()']").should('be.visible')
export const getCustomerBtn = () => cy.get("button[ng-click='showCust()']").should('be.visible')

export const getFirstNameInputField = () => cy.get("input[ng-model='fName']").should('be.visible')
export const getLastNameInputField = () => cy.get("input[ng-model='lName']").should('be.visible')
export const getPostCodeInputField = () => cy.get("input[ng-model='postCd']").should('be.visible')
export const getSubmitFormBtn = () => cy.get("form button[type='submit']").should('be.visible')

export const getUserSelect = () => cy.get("#userSelect").should('be.visible')
export const getCurrencySelect = () => cy.get("#currency").should('be.visible')

export const getSearchCustomerInputField = () => cy.get("input[ng-model='searchCustomer']").should('be.visible')
export const getDeleteCustomerButton = () => cy.get("table tr.ng-scope td button")


class ManagerPage {

    clickOnAddCustomer(){
        getAddCustomerBtn().click();
    }

    insertCustomerFirstName(firstName) {
        getFirstNameInputField().clear().type(firstName);
    }

    insertCustomerLastName(lastName) {
        getLastNameInputField().clear().type(lastName);
    }

    insertCustomerPostCode(postCode) {
        getPostCodeInputField().clear().type(postCode);
    }

    clickOnSubmitButton(){
        getSubmitFormBtn().click();
    }

    clickOnOpenAccount(){
        getOpenAccountBtn().click();
        getUserSelect();
    }

    selectUser(userName){
        getUserSelect().select(userName);
    }

    selectCurrency(currencyName){
        getCurrencySelect().select(currencyName);
    }

    clickOnViewCustomers(){
        getCustomerBtn().click();
    }

    insertSearchCustomer(customerName){
        getSearchCustomerInputField().clear().type(customerName);
    }

    clickOnDeleteCustomerBtn(){
        getDeleteCustomerButton().should('be.visible').click();
    }


    addNewCustomer(firstName, lastName, postCode){
        this.clickOnAddCustomer()
        this.insertCustomerFirstName(firstName);
        this.insertCustomerLastName(lastName);
        this.insertCustomerPostCode(postCode);
        this.clickOnSubmitButton();
    }

    openAccount(userName, currencyName){
        this.clickOnOpenAccount();
        this.selectUser(userName);
        this.selectCurrency(currencyName);
        this.clickOnSubmitButton();
    }

    deleteCustomer(customerName){
        this.clickOnViewCustomers();
        this.insertSearchCustomer(customerName);
        this.clickOnDeleteCustomerBtn()
    }

    isAt() {
        getAddCustomerBtn();
        getOpenAccountBtn();
        getCustomerBtn()
    }

    assertFilteredCustomerIsNotPresent() {
        getDeleteCustomerButton().should('not.exist');
    }
} export default new ManagerPage;

