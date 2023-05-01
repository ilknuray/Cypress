/// <reference types="cypress" />

describe('Hover Over',() => {

    it('Test case',() => {
    cy.visit('https://www.amazon.com/')
    cy.wait(3000)
    cy.get('.icp-nav-flag').trigger('mouseover')
    cy.wait(3000)
    cy.contains('Change country/region.').click()
    cy.get('#icp-dropdown').select('Turkey (Türkiye)',{force:true})


    })
    it('',() => {



    })



})