/// <reference types="cypress" />

describe('Koala Resort Hotel',() => {

    it('Login Test',() => {
     cy.visit('https://qa-environment.koalaresorthotels.com/')
     //cy.contains('Log in').click()==>contains.text
     //cy.contains('[class="nav-link"]','Log in').click()//==>contains.locator,text
      cy.contains('li','Log in',{matchCase : false}).click()

      //ASSERT

      //1)have.text
      cy.get('#navLogon > .nav-link').should('have.text','Log in')
      //locate edilen yerdeki metinde log in yaziyormu

      //2)URL
      cy.url().should('include','Account/Logon')

      //3)be.visible
      cy.get('.row > .mb-4').should('be.visible')

      //4)
      cy.title().should('eq','KoalaResortHotels - Log in')

      //5)include.text

      cy.get('#navLogon > .nav-link').should('include.text','Log in')

      //toplam link sayisi
      cy.get('li a').should('have.length',29)

      //find():belirli bir html seciminin alt elemenlarini bulmak icin
      cy.get('li').find('a[href="/Rooms/320"]').should('have.text','Twin 2')
      
      //cy.find() olarak kullanilmaz
      //cy.get().find() olarak kullanilir

      //within()==>Locate almak icin kullanilir
      cy.get('div.categories').within( () => {
        cy.get('a[href="/Rooms/320"]').click()
      })
      /*
      NOT:Web elementleri ilk olarak get() ile bulacagiz eger get ile bulamazsak get().find() deneyecegiz
      onunlada bulamazsak get().within() kullanacagiz
      */
      


    })
    



})