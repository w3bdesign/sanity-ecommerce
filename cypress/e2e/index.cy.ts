/// <reference types="cypress"/>

// https://cheatography.com/aiqbal/cheat-sheets/cypress-io/
describe("Forside", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it(`STOR TEKST`, () => {
    cy.get('[data-cy="test"]').contains("STOR TEKST");
  });
});

export {};
