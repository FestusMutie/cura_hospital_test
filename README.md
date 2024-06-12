# Cypress Test Automation for Katalon Demo CURA Healthcare Application

## Overview
This project contains automated tests for the Katalon Demo CURA Healthcare web application using Cypress. The tests cover visiting the website, making an appointment, and verifying the appointment confirmation.

## Prerequisites
Before running the tests, ensure you have the following installed:
- Node.js (version 12 or higher)
- Cypress (version 6.0 or higher)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/katalon-demo-cura-automation.git
   ```
2. Navigate to the project directory:
   ```bash
   cd katalon-demo-cura-automation
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Running the Tests
To run the tests, use the following command:
```bash
npx cypress open
```
This will open the Cypress Test Runner. Select the test file you want to run (`visit_and_launch_website.spec.js`) to execute the tests.

## Test Structure
The tests are organized in a single file `visit_and_launch_website.spec.js`. Here is a brief overview of the test scenarios:

### Test 1: Visit URL
- Visits the Katalon Demo CURA Healthcare website.
- Verifies the URL contains `katalon-demo-cura.herokuapp.com`.

### Test 2: Click Make an Appointment
- Clicks the "Make Appointment" button.
- Enters username and password.
- Clicks the "Login" button.

### Test 3: Make an Appointment
- Selects the facility "Tokyo CURA Healthcare Center".
- Checks the "Hospital readmission" checkbox.
- Selects the "Medicare" program.
- Enters the visit date.
- Enters a comment.
- Clicks the "Book Appointment" button.

### Test 4: Confirmation of Appointment
- Verifies the "Appointment Confirmation" header.
- Checks that the summary section is visible.
- Verifies the URL contains `katalon-demo-cura.herokuapp.com`.

## Handling Uncaught Exceptions
The following code snippet prevents Cypress from failing the test in case of uncaught exceptions:
```javascript
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});
```

## Test File: `visit_and_launch_website.spec.js`
```javascript
Cypress.on('uncaught:exception', (err, runnable) => {
   // returning false here prevents Cypress from failing the test
   return false;
});

describe('visit and launch website', () => {
  it('visit url', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/');
    cy.url().should('include', 'katalon-demo-cura.herokuapp.com');
  });

  it('click make an appointment', () => {
    cy.get('#btn-make-appointment').click();
    cy.get('#txt-username').type('John Doe');
    cy.get('#txt-password').type('ThisIsNotAPassword');
    cy.get('#btn-login').click();
  });

  it('make an appointment', () => {
    cy.get('#combo_facility').select('Tokyo CURA Healthcare Center');
    cy.get('#chk_hospotal_readmission').click();
    cy.get('#radio_program_medicare').click();
    cy.get('#txt_visit_date').type('20/12/2024');
    cy.get('#txt_comment').type('Hakuna matata');
    cy.get('#btn-book-appointment').click();
  });

  it('confirmation of appointment', () => {
    cy.get('h2').contains('Appointment Confirmation');
    cy.get('#summary > .container > .row').should('be.visible');
    cy.url().should('include', 'katalon-demo-cura.herokuapp.com');
  });
});
```

## Conclusion
This README provides an overview of the Cypress automated tests for the Katalon Demo CURA Healthcare application. Follow the installation and running instructions to execute the tests. The tests cover essential user actions such as making and confirming an appointment on the website.
