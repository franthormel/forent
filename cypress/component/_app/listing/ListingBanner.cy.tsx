import ListingBanner from "@/components/_app/listing/banner";

describe("Listing Banner", () => {
	// NOTE: ListingPhotos already handles the testing of layouts and image links so there is no need to do the same tests here. 
	describe('should display correct button text', () => {
		it("when there is one (1) photo", () => {
			const imageUrls = [
				"https://images.unsplash.com/photo-1449247613801-ab06418e2861",
			]
			cy.mount(<ListingBanner imageUrls={imageUrls} listingId="id1" />)
			cy.get('[data-cy="link-photos"]')
				.should('have.attr', 'href')
				.and('include', '/listing/id1/photos')
			cy.get('[data-cy="btn-photos"]')
				.should('exist')
				.and('be.visible')
				.and('have.text', '1 Photo')
		})

		it("when there are multiple photos (variant A)", () => {
			const imageUrls = [
				"https://images.unsplash.com/photo-1449247613801-ab06418e2861",
				"https://images.unsplash.com/photo-1530334542242-1410f69cb168",
				"https://images.unsplash.com/photo-1534595038511-9f219fe0c979",
				"https://images.unsplash.com/photo-1535078035266-a0fa7d3b8f65",
			]
			cy.mount(<ListingBanner imageUrls={imageUrls} listingId="id2" />)
			cy.get('[data-cy="link-photos"]')
				.should('have.attr', 'href')
				.and('include', '/listing/id2/photos')
			cy.get('[data-cy="btn-photos"]')
				.should('exist')
				.and('be.visible')
				.and('have.text', '4 Photos')
		})

		it("when there are multiple photos (variant A)", () => {
			const imageUrls = [
				"https://images.unsplash.com/photo-1449247613801-ab06418e2861",
				"https://images.unsplash.com/photo-1560448076-ee77deea722b",
				"https://images.unsplash.com/photo-1560448204-61dc36dc98c8",
				"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
				"https://images.unsplash.com/photo-1560448205-17d3a46c84de",
				"https://images.unsplash.com/photo-1560448205-97abe7378152",
				"https://images.unsplash.com/photo-1580041029617-861657e9f349",
				"https://images.unsplash.com/photo-1581404476143-fb31d742929f",
				"https://images.unsplash.com/photo-1598928387577-d49b6d399110",
				"https://images.unsplash.com/photo-1598928428433-1077478561d6",
				"https://images.unsplash.com/photo-1598928739741-a922f245bb6d",
				"https://images.unsplash.com/photo-1600121848594-d8644e57abab",
				"https://images.unsplash.com/photo-1601760561441-16420502c7e0",
				"https://images.unsplash.com/photo-1601760562234-9814eea6663a",
				"https://images.unsplash.com/photo-1602028967263-17d1255ad02f",
				"https://images.unsplash.com/photo-1603111691889-364c9fc6d066",
				"https://images.unsplash.com/photo-1603382254452-30f9f44ad451",
				"https://images.unsplash.com/photo-1604011237296-117b9066e9e4",
				"https://images.unsplash.com/photo-1609766857120-0183863c7971",
				"https://images.unsplash.com/photo-1609766934998-2903faa9d02d",
				"https://images.unsplash.com/photo-1609767175584-7abe16d3f1fa",
				"https://images.unsplash.com/photo-1610516258978-461db90b97b4",
			]
			cy.mount(<ListingBanner imageUrls={imageUrls} listingId="id3" />)
			cy.get('[data-cy="link-photos"]')
				.should('have.attr', 'href')
				.and('include', '/listing/id3/photos')
			cy.get('[data-cy="btn-photos"]')
				.should('exist')
				.and('be.visible')
				.and('have.text', '22 Photos')
		})
	})
})
