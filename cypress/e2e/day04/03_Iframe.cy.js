/// <reference types="cypress" />

describe('Iframe tests',() => {

    it('Iframe',() => {
    cy.visit('https://the-internet.herokuapp.com/iframe')



     /*
      1)plugin indirilir
      npm.js sitesinden
      2)plugin import edilerek support altindaki dosyaya yapistirilir
      3)Bu islmelerden sonra iframe tanima komutunu tanimlariz
      cy.frameloaded ve cy.irame()
      */
      cy.frameLoaded('#mce_0_ifr')//iframe in yerini tanimla
      //cy.iframe('#mce_0_ifr')
      cy.iframe().find('p').clear()
      cy.iframe().find('p').type('Cypress')
      cy.get('.large-4 > div > a').should('contain.text','Elemental Selenium').click()





    })
    it('',() => {



    })



})