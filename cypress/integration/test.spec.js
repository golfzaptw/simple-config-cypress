/// <reference types="Cypress"/>

describe('Simple test', function () {
    context('Check pass', function () {
        it('should show difference web', function () {
            cy.visit('/')
            cy.log(Cypress.env('server'))
        })
    })
})