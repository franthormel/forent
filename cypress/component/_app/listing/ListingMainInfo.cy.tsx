import ListingMainInfo from "@/components/_app/listing/main-info";

describe('Listing Main Info', () => {
    describe("display correct UI when", () => {
        afterEach(() => {
            cy.get('[data-cy="listing-main-info-col-label-area"]')
                .should('be.visible')
                .and('exist')
                .and('have.text', 'Area (sqm)')
            cy.get('[data-cy="listing-main-info-col-label-available-date"]')
                .should('be.visible')
                .and('exist')
                .and('have.text', 'Date Available')
        })

        it("Multiple beds, multiple baths, null available date, null zipcode", () => {
            cy.mount(<ListingMainInfo price={9900}
                beds={3}
                baths={2}
                area={55}
                availableDate={null}
                addressLine="8508 Vandervort Crest Apt. 828"
                city="East Wallace"
                state="Louisiana"
                zipCode={null} />)
            cy.get('[data-cy="listing-main-info-price"]')
                .should('be.visible')
                .and('exist')
                .and('have.text', '₱9,900/mo')
            cy.get('[data-cy="listing-main-info-col-value-beds"]')
                .should('be.visible')
                .and('exist')
                .and('have.text', '3')
            cy.get('[data-cy="listing-main-info-col-label-beds"]')
                .should('be.visible')
                .and('exist')
                .and('have.text', 'Beds')
            cy.get('[data-cy="listing-main-info-col-value-baths"]')
                .should('be.visible')
                .and('exist')
                .and('have.text', '2')
            cy.get('[data-cy="listing-main-info-col-label-baths"]')
                .should('be.visible')
                .and('exist')
                .and('have.text', 'Baths')
            cy.get('[data-cy="listing-main-info-col-value-area"]')
                .should('be.visible')
                .and('exist')
                .and('have.text', '55')
            cy.get('[data-cy="listing-main-info-col-value-available-date"]')
                .should('be.visible')
                .and('exist')
                .and('have.text', 'Available Now')
            cy.get('[data-cy="listing-main-info-address-line"]')
                .should('be.visible')
                .and('exist')
                .and('have.text', '8508 Vandervort Crest Apt. 828,')
            cy.get('[data-cy="listing-main-info-address-space"]')
                .should('not.be.visible')
                .and('exist')
            cy.get('[data-cy="listing-main-info-address-city-state-zip"]')
                .should('be.visible')
                .and('exist')
                .and('contain.text', 'East Wallace, Louisiana')
        });
        it("Single bed, single bath, future available date, with zipcode", () => {
            cy.mount(<ListingMainInfo price={12540}
                beds={1}
                baths={1}
                area={25}
                availableDate={new Date(2035, 5, 20)}
                addressLine="84162 S Front Street Apt. 807"
                city="Prosaccoborough"
                state="Hawaii"
                zipCode={88950} />)
            cy.get('[data-cy="listing-main-info-price"]')
                .should('be.visible')
                .and('exist')
                .and('have.text', '₱12,540/mo')
            cy.get('[data-cy="listing-main-info-col-value-beds"]')
                .should('be.visible')
                .and('exist')
                .and('have.text', '1')
            cy.get('[data-cy="listing-main-info-col-label-beds"]')
                .should('be.visible')
                .and('exist')
                .and('have.text', 'Bed')
            cy.get('[data-cy="listing-main-info-col-value-baths"]')
                .should('be.visible')
                .and('exist')
                .and('have.text', '1')
            cy.get('[data-cy="listing-main-info-col-label-baths"]')
                .should('be.visible')
                .and('exist')
                .and('have.text', 'Bath')
            cy.get('[data-cy="listing-main-info-col-value-area"]')
                .should('be.visible')
                .and('exist')
                .and('have.text', '25')
            cy.get('[data-cy="listing-main-info-col-value-available-date"]')
                .should('be.visible')
                .and('exist')
                .and('have.text', 'June 20, 2035')
            cy.get('[data-cy="listing-main-info-address-line"]')
                .should('be.visible')
                .and('exist')
                .and('have.text', '84162 S Front Street Apt. 807,')
            cy.get('[data-cy="listing-main-info-address-space"]')
                .should('not.be.visible')
                .and('exist')
            cy.get('[data-cy="listing-main-info-address-city-state-zip"]')
                .should('be.visible')
                .and('exist')
                .and('contain.text', 'Prosaccoborough, Hawaii 88950')
        });
        it("Multiple beds, single bath, before available date, with zipcode", () => {
            cy.mount(<ListingMainInfo price={9562}
                beds={2}
                baths={1}
                area={32}
                availableDate={new Date(2020, 11, 13)}
                addressLine="26846 Hartmann Trace Apt. 561"
                city="North Dagmarshire"
                state="New Jersey"
                zipCode="83140" />)
            cy.get('[data-cy="listing-main-info-price"]')
                .should('be.visible')
                .and('exist')
                .and('have.text', '₱9,562/mo')
            cy.get('[data-cy="listing-main-info-col-value-beds"]')
                .should('be.visible')
                .and('exist')
                .and('have.text', '2')
            cy.get('[data-cy="listing-main-info-col-label-beds"]')
                .should('be.visible')
                .and('exist')
                .and('have.text', 'Beds')
            cy.get('[data-cy="listing-main-info-col-value-baths"]')
                .should('be.visible')
                .and('exist')
                .and('have.text', '1')
            cy.get('[data-cy="listing-main-info-col-label-baths"]')
                .should('be.visible')
                .and('exist')
                .and('have.text', 'Bath')
            cy.get('[data-cy="listing-main-info-col-value-area"]')
                .should('be.visible')
                .and('exist')
                .and('have.text', '32')
            cy.get('[data-cy="listing-main-info-col-value-available-date"]')
                .should('be.visible')
                .and('exist')
                .and('have.text', 'Available Now')
            cy.get('[data-cy="listing-main-info-address-line"]')
                .should('be.visible')
                .and('exist')
                .and('have.text', '26846 Hartmann Trace Apt. 561,')
            cy.get('[data-cy="listing-main-info-address-space"]')
                .should('not.be.visible')
                .and('exist')
            cy.get('[data-cy="listing-main-info-address-city-state-zip"]')
                .should('be.visible')
                .and('exist')
                .and('contain.text', 'North Dagmarshire, New Jersey 83140')
        });
    })
});
