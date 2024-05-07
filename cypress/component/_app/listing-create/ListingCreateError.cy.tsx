import ListingCreateError from "@/app/listing/create/_components/error"

describe('Listing Create Error', () => {
	describe("should display correct UI", () => {
		it("when error is hidden", () => {
			cy.mount(<ListingCreateError
				error="Check errors below"
				dataCyIcon="listing-create-error-icon"
				dataCyTitle="listing-create-error" />)
			cy.get('[data-cy="listing-create-error-icon"]')
				.should('not.exist')
			cy.get('[data-cy="listing-create-error"]')
				.should('not.exist')
		})

		it("when error is shown", () => {
			cy.mount(<ListingCreateError
				showError={true}
				error="Check errors below"
				dataCyIcon="listing-create-error-icon"
				dataCyTitle="listing-create-error" />)
			cy.get('[data-cy="listing-create-error-icon"]')
				.should('be.visible')
				.and('exist')
			cy.get('[data-cy="listing-create-error"]')
				.should('be.visible')
				.and('exist')
				.and('have.text', 'Check errors below')
		})
	});
});
