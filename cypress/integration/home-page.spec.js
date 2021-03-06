describe("home page", () => {
  const login = () => {
    cy.visit("/");
    cy.get("[placeholder=user]").clear().type("osh");
    cy.get("[placeholder=password]").clear().type("secret2");
    cy.contains("log in").click();
  };

  it("lets user read tweets", () => {
    login();
    cy.get("[data-testid=tweet]").contains("Hello World");
  });

  it("lets user create a tweet", () => {
    login();
    const tweetBody = "such tweet, very contents, wow";
    cy.get('[data-testid="new-tweet-section"]').within(() => {
      cy.get('[placeholder="What\'s happening?"]').type(tweetBody);
      cy.get('[data-testid="create-new-tweet-button"]').click();
    })
    cy.get("[data-testid=tweet]").within(() => cy.contains(tweetBody));
  });
});
