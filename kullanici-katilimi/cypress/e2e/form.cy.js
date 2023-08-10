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
