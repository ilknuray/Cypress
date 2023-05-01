/// <reference types="cypress" />

describe('',() => {

    it('',() => {
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
        cy.get('#column-a').wait(3000).drag('#column-b').then((success) => {
            assert.isTrue(success)
        })





    })
    it.only('',() => {
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
        const dataTransfer=new DataTransfer();
        cy.wait(4000)
        cy.get('#column-a').trigger('dragstart', {
            dataTransfer
            
        })
        cy.wait(6000)
        cy.get('#column-b').trigger('drop', {
            dataTransfer
        })
           
        



    })



})