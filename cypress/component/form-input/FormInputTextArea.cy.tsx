import FormInputTextArea from "@/components/form-input/textarea"

describe("Form Input Text Area", () => {
    it("should display correct UI", () => {
        cy.mount(<FormInputTextArea
            label="Comment"
            placeholder="Tell us what you have in mind"
            name="comment"
            dataCy="form-input-textarea"
            dataCyLabel="form-input-textarea-label"
            dataCyOptional="form-input-textarea-optional"
            dataCyError="form-input-textarea-error"
        />)

        cy.get('[data-cy="form-input-textarea-label"]')
            .should('exist')
            .and('be.visible')
            .and('have.text', 'Comment')
        cy.get('[data-cy="form-input-textarea"]').should('have.attr', 'required')
        cy.get('[data-cy="form-input-textarea"]')
            .should('exist')
            .and('be.visible')
            .and('have.attr', 'name')
            .and('include', 'comment')
        cy.get('[data-cy="form-input-textarea"]')
            .should('have.attr', 'placeholder')
            .and('include', 'Tell us what you have in mind')
        cy.get('[data-cy="form-input-textarea-optional"]')
            .should('not.exist')
        cy.get('[data-cy="form-input-textarea-error"]')
            .should('not.exist')
    })

    it("should display correct UI when optional", () => {
        cy.mount(<FormInputTextArea
            label="Suggestions"
            placeholder="Tell us what you think"
            name="suggestions"
            optional={true}
            dataCy="form-input-textarea"
            dataCyLabel="form-input-textarea-label"
            dataCyOptional="form-input-textarea-optional"
            dataCyError="form-input-textarea-error"
        />)

        cy.get('[data-cy="form-input-textarea-label"]')
            .should('exist')
            .and('be.visible')
            .and('have.text', 'Suggestions')
        cy.get('[data-cy="form-input-textarea"]').should('not.have.attr', 'required')
        cy.get('[data-cy="form-input-textarea"]')
            .should('exist')
            .and('be.visible')
            .and('have.attr', 'name')
            .and('include', 'suggestions')
        cy.get('[data-cy="form-input-textarea"]')
            .should('have.attr', 'placeholder')
            .and('include', 'Tell us what you think')
        cy.get('[data-cy="form-input-textarea-optional"]')
            .should('exist')
            .and('be.visible')
            .and('have.text', "Optional")
        cy.get('[data-cy="form-input-textarea-error"]')
            .should('not.exist')
    })

    it("should display correct UI when it contains an error", () => {
        cy.mount(<FormInputTextArea
            label="Suggestions"
            placeholder="Tell us what you think"
            name="suggestions"
            dataCy="form-input-textarea"
            errorMessage="Empty"
            dataCyLabel="form-input-textarea-label"
            dataCyOptional="form-input-textarea-optional"
            dataCyError="form-input-textarea-error"
        />)

        cy.get('[data-cy="form-input-textarea-label"]')
            .should('exist')
            .and('be.visible')
            .and('have.text', 'Suggestions')
        cy.get('[data-cy="form-input-textarea"]').should('have.attr', 'required')
        cy.get('[data-cy="form-input-textarea"]')
            .should('exist')
            .and('be.visible')
            .and('have.attr', 'name')
            .and('include', 'suggestions')
        cy.get('[data-cy="form-input-textarea"]')
            .should('have.attr', 'placeholder')
            .and('include', 'Tell us what you think')
        cy.get('[data-cy="form-input-textarea-optional"]')
            .should('not.exist')
        cy.get('[data-cy="form-input-textarea-error"]')
            .should('exist')
            .and('be.visible')
            .and('have.text', "Empty")
    })

    it("input should not exceed the maximum length is set", () => {
        cy.mount(<FormInputTextArea
            label="How was it?"
            placeholder="Tell us how you feel"
            name="experience"
            maxLength={100}
            dataCy="form-input-textarea"
            dataCyLabel="form-input-textarea-label"
            dataCyOptional="form-input-textarea-optional"
            dataCyError="form-input-textarea-error"
        />)

        cy.get('[data-cy="form-input-textarea-label"]')
            .should('exist')
            .and('be.visible')
            .and('have.text', 'How was it?')
        cy.get('[data-cy="form-input-textarea"]').should('have.attr', 'required')
        cy.get('[data-cy="form-input-textarea"]')
            .should('exist')
            .and('be.visible')
            .and('have.attr', 'name')
            .and('include', 'experience')
        cy.get('[data-cy="form-input-textarea"]')
            .should('have.attr', 'placeholder')
            .and('include', 'Tell us how you feel')
        cy.get('[data-cy="form-input-textarea-optional"]')
            .should('not.exist')
        cy.get('[data-cy="form-input-textarea-error"]')
            .should('not.exist')

        const input = "Aenean consectetur accumsan dui, nec pretium nunc hendrerit id. Maecenas sit amet nunc tellus. Cras quis placerat nibh."
        cy.get('[data-cy="form-input-textarea"]').type(input)
    })

})
