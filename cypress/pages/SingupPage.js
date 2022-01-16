class SingupPage {

    go() {

        cy.visit('/')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

    }

    fillForm(deliver) {
        cy.get('input[name= "fullName"]').type(deliver.name)
        cy.get('input[name= "cpf"]').type(deliver.cpf)
        cy.get('input[name= "email"]').type(deliver.email)
        cy.get('input[name= "whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name= "postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type="button"][value="Buscar CEP"]').click()

        cy.get('input[name= "address-number"]').type(deliver.address.number)
        cy.get('input[name= "address-details"]').type(deliver.address.details)

        
        //ul[@class='delivery-method']//li//span[text()='Moto']
        cy.contains('.delivery-method li', deliver.deliver_method).click()
        cy.get('input[accept^=image]').attachFile('/images/' + deliver.cnh)

        cy.get('input[name= "address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

        
    }

    submit() {
        cy.get('form button[type="submit"]').click()
    }

    modalContentShouldBe(messageText) {
        cy.get('.swal2-container .swal2-html-container').should('have.text', messageText)
    }

    alertMessageShouldBe(messageText){
        //cy.get('.alert-error').should('have.text', messageText)
        cy.contains('.alert-error', messageText).should('be.visible')
    }
}

//new = exporta a class com uma nova estância 
export default new SingupPage;