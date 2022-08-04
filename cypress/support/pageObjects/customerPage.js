import {getSubmitFormBtn, getUserSelect} from "./managerPage";

export const getFormLabel = () => cy.get(".form-group label").should('be.visible')
export const getLoggedUserText = () => cy.get(".fontBig").should('be.visible')
export const getAccountNumberSelect = () => cy.get("#accountSelect").should('be.visible')
export const getTransactionBtn = () => cy.get("button[ng-click='transactions()']").should('be.visible')
export const getDepositBtn = () => cy.get("button[ng-click='deposit()']").should('be.visible')
export const getWithdrawBtn = () => cy.get("button[ng-click='withdrawl()']").should('be.visible')
export const getBackBtn = () => cy.get("button[ng-click='back()']").should('be.visible')
export const getResetBtn = () => cy.get("button[ng-click='reset()']").should('be.visible')
export const getAmountInputField = () => cy.get("input[ng-model='amount']").should('be.visible')
export const getMessage = () => cy.get("span[ng-show='message']").should('be.visible')
export const getMessageNoAccount = () => cy.get("span[ng-show='noAccount']").should('be.visible')
export const getBalanceAmount = () => cy.get("div[ng-hide='noAccount'] strong:nth-child(2)").should('be.visible')

class CustomerPage {

    isAt(){
        getFormLabel();
        getUserSelect();
    }

    verifyPage(text){
        getFormLabel().should('contain.text',text);
    }

    selectCustomer(customerName){
        getUserSelect().select(customerName);
    }

    clickOnLogin(){
        getSubmitFormBtn().click();
    }

    assertLoggedUser(userName){
        getLoggedUserText().should('have.text',userName);
    }

    selectAccountNumber(accountNumber){
        getAccountNumberSelect().select(accountNumber);
    }

    clickOnTransactionBtn(){
        getTransactionBtn().click();
    }

    clickOnDepositBtn(){
        getDepositBtn().click();
    }

    clickOnWithdrawBtn(){
        getWithdrawBtn().click();
    }

    insertAmount(number){
        getAmountInputField().clear().type(number);
    }

    clickOnSubmitDeposit(){
        getSubmitFormBtn().click();
    }

    clickOnSubmitWithDraw(){
        getSubmitFormBtn().click();
    }

    assertMessage(message){
        getMessage().should('have.text',message);
    }

    assertNoAccountMessageIsPresent(message){
        getMessageNoAccount().should('have.text',message);
    }

    assertAmount(amount){
        getBalanceAmount().should('have.text',amount);
    }

} export default new CustomerPage;