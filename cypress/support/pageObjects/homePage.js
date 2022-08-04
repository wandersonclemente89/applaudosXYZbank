
export const getLoginButtonByText = (buttonText) => cy.contains(".borderM button", buttonText).should('be.visible')


class HomePage {

    isAt(){
        getLoginButtonByText("Customer")
        getLoginButtonByText("Bank Manager")
    }

    clickOnLoginButton(buttonText){
        getLoginButtonByText(buttonText).click();
    }

} export default new HomePage

