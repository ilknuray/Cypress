/// <reference types="cypress" />

describe('Navigation',() => {

    it('Back,Forward,Refresh',() => {
     cy.visit('https://qa-environment.koalaresorthotels.com/')
     cy.wait(3000)
     cy.get('#navLogon > .nav-link').click()
     cy.go('back')
     cy.wait(3000)
     cy.go(-1)
     cy.wait(3000)
     cy.go('forward')
     cy.wait(3000)
     cy.reload


    })
    it('Chaing Navigation',() => {
        cy.visit('https://qa-environment.koalaresorthotels.com/')
        cy.wait(3000)
        cy.get('#navLogon > .nav-link').click()
        cy.wait(3000)
        cy.go('back').go('forward').go(-1).go(1)
        cy.reload(true)
        //cy.reload(true):Sayfayi hafizadan degil yeniden yukler




    })



})