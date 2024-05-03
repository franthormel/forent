import ListingCreateErrorMessages from "@/app/listing/create/_components/error-messages"

describe('Listing Create Error Messages', () => {
	describe("should display correct UI", () => {
		it("when error is hidden", () => {
			cy.mount(<ListingCreateErrorMessages
				title="Check errors below"
				dataCyIcon="listing-create-error-icon"
				dataCyTitle="listing-create-error-title" />)
			cy.get('[data-cy="listing-create-error-icon"]')
				.should('not.exist')
			cy.get('[data-cy="listing-create-error-title"]')
				.should('not.exist')
		})

		it("when error is shown", () => {
			cy.mount(<ListingCreateErrorMessages
				showError={true}
				title="Check errors below"
				dataCyIcon="listing-create-error-icon"
				dataCyTitle="listing-create-error-title" />)
			cy.get('[data-cy="listing-create-error-icon"]')
				.should('be.visible')
				.and('exist')
			cy.get('[data-cy="listing-create-error-title"]')
				.should('be.visible')
				.and('exist')
				.and('have.text', 'Check errors below')
		})
	});
});
