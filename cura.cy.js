
Cypress.on('uncaught:exception', (err, runnable) => {
   returning false here prevents Cypress from failing the test
  return false
})
describe('visit and launch website', ()=>{
it('visit url', ()=>{
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
    cy.url().should('include', 'katalon-demo-cura.herokuapp.com')
    
it('click make an appointment')
    //cy.wait(6000)
    cy.get('#btn-make-appointment').click()
    cy.get('#txt-username').type('John Doe')
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.get('#btn-login').click()
   
it('make an appointment')
        cy.get('#combo_facility').select('Tokyo CURA Healthcare Center')
        cy.get('#chk_hospotal_readmission').click()
        cy.get('#radio_program_medicare').click()
        cy.get('#txt_visit_date').type('20/12/2024')
        cy.get('#txt_comment').type('Hakuna matata')
        cy.get('#btn-book-appointment').click()
        

it('Confirmation of Appointment')
        cy.get('h2').contains('Appointment Confirmation')
        cy.get('#summary > .container > .row').should('be.visible')
        cy.url().should('include', 'katalon-demo-cura.herokuapp.com')
    
  })
})
   