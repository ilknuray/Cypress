/// <reference types="cypress" />

describe('view ports',() => {

    it('iphone-8',() => {
        cy.visit('https://www.google.com/')
        cy.viewport('iphone-8')
        cy.screenshot//ekrani ayarladigimiz olceklerde acar



    })
    it('',() => {



    })



})