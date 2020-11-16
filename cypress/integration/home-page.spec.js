describe("home page", () => {
  const login = () => {
    cy.visit("http://localhost:3000/")
    cy.get("[placeholder=user]").clear().type("osh")
    cy.get("[placeholder=password]").clear().type("secret2")
    cy.contains("log in").click()
  }

  it("lets user read tweets", () => {
    login()
    cy.get("[data-testid=tweet]").contains("Hello World")
  })
})