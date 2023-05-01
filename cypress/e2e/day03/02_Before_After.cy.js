/// <reference types="cypress" />

describe('Before After',() => {
    before( () => {
        cy.log('Her test dosyasindan once bir kere calisacak')
    })
    after(() => {
        cy.log('Her Test Dosyasindan Sonra bir kere Calisacak')
    })
    beforeEach(() => {
        cy.log('Her testten once bir kere calisacak')
    })
    afterEach(()=> {
        cy.log('Her tessten sonra bir kere calisacak')
    })

    it('Test Case 1',() => {
    cy.log('Test Case 1')


    })
    it('Test Case 2',() => {
        cy.log('Test Case 2')



    })



})