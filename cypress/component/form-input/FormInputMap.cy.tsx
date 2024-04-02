import FormInputMap from "@/components/form-input/map"

describe("Form Input Map", () => {
    it("should display correct UI", () => {
        cy.mount(<FormInputMap
            dataCy="form-input-map"
            dataCyError="form-input-map-error"
            dataCyLat="form-input-map-lat"
            dataCyLon="form-input-map-lon"
        />)
        cy.get('[data-cy="form-input-map"]')
            .should('exist')
            .and('be.visible')
        cy.get('[data-cy="form-input-map-error"]').should('not.exist')
        cy.get('[data-cy="form-input-map-lat"]')
            .should('exist')
            .and('have.attr', 'value')
            .and('include', 0)
        cy.get('[data-cy="form-input-map-lon"]')
            .should('exist')
            .and('have.attr', 'value')
            .and('include', 0)
    })

    it("should display correct UI when an error is provided", () => {
        cy.mount(<FormInputMap
            errorMessage="Error"
            dataCy="form-input-map"
            dataCyError="form-input-map-error"
            dataCyLat="form-input-map-lat"
            dataCyLon="form-input-map-lon"
        />)
        cy.get('[data-cy="form-input-map"]')
            .should('exist')
            .and('be.visible')
        cy.get('[data-cy="form-input-map-error"]')
            .should('exist')
            .and('be.visible')
            .and('have.text', 'Error')
        cy.get('[data-cy="form-input-map-lat"]')
            .should('exist')
            .and('have.attr', 'value')
            .and('include', 0)
        cy.get('[data-cy="form-input-map-lon"]')
            .should('exist')
            .and('have.attr', 'value')
            .and('include', 0)
    })

    it("should set values when the map is clicked", () => {
        cy.mount(<FormInputMap
            dataCy="form-input-map"
            dataCyError="form-input-map-error"
            dataCyLat="form-input-map-lat"
            dataCyLon="form-input-map-lon"
        />)
        cy.get('[data-cy="form-input-map"]')
            .should('exist')
            .and('be.visible')
        cy.get('[data-cy="form-input-map-error"]').should('not.exist')
        cy.get('[data-cy="form-input-map-lat"]')
            .should('exist')
            .and('have.attr', 'value')
            .and('include', 0)
        cy.get('[data-cy="form-input-map-lon"]')
            .should('exist')
            .and('have.attr', 'value')
            .and('include', 0)

        cy.get('[data-cy="form-input-map"]').click()
    })
})
