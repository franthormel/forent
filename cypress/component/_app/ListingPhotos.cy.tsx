import ListingPhotos from "@/app/listing/[id]/photos/_component/photos";

describe('Listing Photos', () => {
	const imageURLs = [
		"https://images.unsplash.com/photo-1484154218962-a197022b5858",
		"https://images.unsplash.com/photo-1551806235-a05dd14a54c7",
		"https://images.unsplash.com/photo-1558442074-3c19857bc1dc",
		"https://images.unsplash.com/photo-1603111691889-364c9fc6d066",
		"https://images.unsplash.com/photo-1603382254452-30f9f44ad451",
		"https://images.unsplash.com/photo-1604011237296-117b9066e9e4",
		"https://images.unsplash.com/photo-1609766934998-2903faa9d02d",
		"https://images.unsplash.com/photo-1609767175584-7abe16d3f1fa",
		"https://images.unsplash.com/photo-1610516258978-461db90b97b4",
		"https://images.unsplash.com/photo-1612320582827-a95ab2596dbc",
	]

	it('should display correct UI', () => {
		cy.mount(<ListingPhotos listingId="listing-a" imageUrls={imageURLs}
			dataCy="listing-photos"
			dataCyBtn="listing-photos-btn"
			dataCyHeader="listing-photos-header" />)
		cy.get('[data-cy="listing-photos"]')
			.should('exist')
			.and('be.visible')
			.children()
			.should('exist')
			.and('be.visible')
			.and('have.length', imageURLs.length)
		cy.get('[data-cy="listing-photos-btn"]')
			.should('exist')
			.and('be.visible')
			.and('have.text', 'Go to Listing')
			.and('have.attr', 'href')
			.and('include', '/listing/listing-a')
		cy.get('[data-cy="listing-photos-header"]')
			.should('exist')
			.and('be.visible')
			.and('have.text', 'Photos')

		for (let i = 1; i <= imageURLs.length; i++) {
			cy.get(`[data-cy="listing-photo-${i}"]`)
				.should('exist')
				.and('be.visible')
		}
	})
})