/// <reference types="cypress" />

describe("example to-do app", () => {
  //   beforeEach(() => {
  //     cy.visit("http://localhost:5173");
  //   });

  it("Should register new user", () => {
    cy.intercept("POST", "/api/auth/register", {
      fixture: "registerUser.json",
      statusCode: 201,
    }).as("registerResponse");

    cy.visit("http://localhost:5173/");
    cy.contains("Register").click();
    cy.url().should("include", "/register");

    cy.get('[data-cy="firstName"]').type("Test name");
    cy.get('[data-cy="lastName"]').type("Test last name");
    cy.get('[data-cy="birthday"]').type("2000-01-01");
    cy.get('[data-cy="phone"]').type("1234567890");
    cy.get('[data-cy="address"]').type("123 Test St, Test City, TC 12345");
    cy.get('[data-cy="email"]').type("test@email.com");
    cy.get('[data-cy="username"]').type("testuser");
    cy.get('[data-cy="password"]').type("testpassword");

    cy.get('[data-cy="register-btn"]').click();

    cy.wait("@registerResponse").its("response.statusCode").should("eq", 201);

    cy.url().should("include", "/login");
  });
});
