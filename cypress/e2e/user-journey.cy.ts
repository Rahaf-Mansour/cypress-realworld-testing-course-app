describe("User Journey", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })

  it("a user can find a course on the home page and complete all courses lessons", () => {
    cy.getByData("course-0").find("a").contains("Get started").click()
    cy.location("pathname").should("equal", "/testing-your-first-application")
    cy.getByData("next-lesson-button").click()
    cy.location("pathname").should(
      "equal",
      "/testing-your-first-application/app-install-and-overview"
    )
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").should("exist").click()
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
    )
    cy.getByData("challenge-answer-0").should("exist").click()
    cy.getByData("next-lesson-button").click()
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/setting-up-data-before-each-test"
    )
    cy.getByData("challenge-answer-0").should("exist").click()
    cy.getByData("next-lesson-button").click()
    cy.location("pathname").should("eq", "/")
    cy.log("hello from console")
    console.log("hi")
    cy.screenshot()
  })
})
