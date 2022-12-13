/// <reference path="../support/commands.d.ts" />

it('CRUDs a note', () => {
  const faker = require('faker')
  const noteDescription = faker.lorem.words(4)

  cy.intercept('GET', '**/notes').as('getNotes')
  cy.intercept('GET', '**/notes/**').as('getNote')
  cy.login()

  cy.visit('/notes/new')
  cy.get('#content').type(noteDescription)
  cy.contains('button', 'Create').click()

  cy.wait('@getNotes')
  cy.contains('.list-group-item', noteDescription).should('be.visible').click()
  cy.wait('@getNote')

  const updatedNoteDescription = faker.lorem.words(4)

  cy.get('#content').clear().type(updatedNoteDescription)
  cy.contains('button', 'Save').click()
  cy.wait('@getNotes')

  cy.contains('.list-group-item', noteDescription).should('not.exist')
  cy.contains('.list-group-item', updatedNoteDescription)
    .should('be.visible')
    .click()
  cy.wait('@getNote')
  cy.contains('button', 'Delete').click()
  cy.wait('@getNotes')

  cy.contains('.list-group-item', updatedNoteDescription).should('not.exist')
})
it('CRUDs a note with image', () => {
  const faker = require('faker')
  const noteDescription = faker.lorem.words(4)

  cy.intercept('GET', '**/notes').as('getNotes')
  cy.login()

  cy.createNote(noteDescription)
  cy.wait('@getNotes')

  const updatedNoteDescription = faker.lorem.words(4)
  const attachFile = true

  cy.editNote(noteDescription, updatedNoteDescription, attachFile)
  cy.wait('@getNotes')

  cy.deleteNote(updatedNoteDescription)
  cy.wait('@getNotes')
})
