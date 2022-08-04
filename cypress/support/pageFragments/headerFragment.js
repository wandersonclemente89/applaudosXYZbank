
export const getHeaderHomeBtn = () => cy.get(".home").should('be.visible')
export const getHeaderLogoutBtn = () => cy.get(".logout").should('be.visible')


class HeaderFragment{

    clickOnHeaderHomeButton(){
        getHeaderHomeBtn().click();
    }

    clickOnHeaderLogoutButton(){
        getHeaderLogoutBtn().click();
    }

} export default new HeaderFragment

