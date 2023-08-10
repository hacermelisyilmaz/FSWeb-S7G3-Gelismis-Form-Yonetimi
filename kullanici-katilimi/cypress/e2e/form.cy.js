describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/"); // change URL to match your dev URL
  });
});

describe("Name Input", () => {
  it("checks if the name is 'Melis Yılmaz'", () => {
    cy.visit("/");
    cy.get("[data-cy=name-input]").type("Melis Yılmaz");
    cy.get("[data-cy=name-input]").should("have.value", "Melis Yılmaz");
  });
});

describe("Submitable", () => {
  it("checks if the form can be submitted", () => {
    cy.visit("/");
    cy.get("[data-cy=name-input]").type("Melis Yilmaz");
    cy.get("[data-cy=email-input]").type("hacer@melis.com");
    cy.get("[data-cy=password-input]").type("1234");
    cy.get("[data-cy=terms-input]").check();
    cy.get("[data-cy=submit-button]").should("not.be.disabled");
  });
});
