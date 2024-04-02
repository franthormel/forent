import FormInput from "@/components/form-input"

describe("Form Input", () => {
    describe("date", () => {
        it("should display correct UI", () => {
            cy.mount(<FormInput
                label="Schedule"
                name="schedule"
                type="date"
                dataCy="form-input"
                dataCyLabel="form-input-label"
                dataCyOptional="form-input-optional"
            />)

            cy.get('[data-cy="form-input-label"]')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Schedule')
            cy.get('[data-cy="form-input"]')
                .should('exist')
                .and('be.visible')
                .and('have.attr', 'name')
                .and('include', 'schedule')
            cy.get('[data-cy="form-input"]').should('have.attr', 'required')
            cy.get('[data-cy="form-input-optional"]')
                .should('not.exist')
        })

        it("should display correct UI when optional", () => {
            cy.mount(<FormInput
                label="Appointment"
                name="appointment"
                type="date"
                optional={true}
                dataCy="form-input"
                dataCyLabel="form-input-label"
                dataCyOptional="form-input-optional"
            />)
            cy.get('[data-cy="form-input-label"]')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Appointment')
            cy.get('[data-cy="form-input"]')
                .should('exist')
                .and('be.visible')
                .and('have.attr', 'name')
                .and('include', 'appointment')
            cy.get('[data-cy="form-input"]').should('not.have.attr', 'required')
            cy.get('[data-cy="form-input-optional"]')
                .should('exist')
                .and('be.visible')
                .and('have.text', "Optional")
        })

        it("should display correct UI when default value is provided", () => {
            cy.mount(<FormInput
                label="Deadline"
                name="deadline"
                type="date"
                defaultValue="2020-01-01"
                dataCy="form-input"
                dataCyLabel="form-input-label"
                dataCyOptional="form-input-optional"
            />)
            cy.get('[data-cy="form-input-label"]')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Deadline')
            cy.get('[data-cy="form-input"]')
                .should('exist')
                .and('be.visible')
                .and('have.attr', 'name')
                .and('include', 'deadline')
            cy.get('[data-cy="form-input"]').should('have.attr', 'required')
            cy.get('[data-cy="form-input"]')
                .and('have.attr', 'value')
                .and('include', '2020-01-01')
            cy.get('[data-cy="form-input-optional"]')
                .should('not.exist')
        })

        it("should display correct UI when input is changed", () => {
            cy.mount(<FormInput
                label="Date of Birth"
                name="dob"
                type="date"
                defaultValue="2000-02-02"
                dataCy="form-input"
                dataCyLabel="form-input-label"
                dataCyOptional="form-input-optional"
            />)
            cy.get('[data-cy="form-input-label"]')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Date of Birth')
            cy.get('[data-cy="form-input"]')
                .should('exist')
                .and('be.visible')
                .and('have.attr', 'name')
                .and('include', 'dob')
            cy.get('[data-cy="form-input"]').should('have.attr', 'required')
            cy.get('[data-cy="form-input"]')
                .should('have.attr', 'value')
                .and('include', '2000-02-02')
            cy.get('[data-cy="form-input-optional"]')
                .should('not.exist')
            cy.get('[data-cy="form-input"]').type('1999-12-24')
        })
    })

    describe("number", () => {
        it("should display correct UI", () => {
            cy.mount(<FormInput
                type="number"
                label="Students"
                placeholder="Set the number of students in the class"
                name="students"
                dataCy="form-input"
                dataCyLabel="form-input-label"
                dataCyOptional="form-input-optional"
            />)

            cy.get('[data-cy="form-input-label"]')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Students')
            cy.get('[data-cy="form-input"]').should('have.attr', 'required')
            cy.get('[data-cy="form-input"]')
                .should('exist')
                .and('be.visible')
                .and('have.attr', 'name')
                .and('include', 'students')
            cy.get('[data-cy="form-input"]')
                .should('have.attr', 'placeholder')
                .and('include', 'Set the number of students in the class')
            cy.get('[data-cy="form-input-optional"]')
                .should('not.exist')
        })

        it("should display correct UI when optional", () => {
            cy.mount(<FormInput
                type="number"
                label="Teachers"
                name="teachers"
                optional={true}
                dataCy="form-input"
                dataCyLabel="form-input-label"
                dataCyOptional="form-input-optional"
            />)

            cy.get('[data-cy="form-input-label"]')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Teachers')
            cy.get('[data-cy="form-input"]')
                .should('exist')
                .and('be.visible')
                .and('have.attr', 'name')
                .and('include', 'teachers')
            cy.get('[data-cy="form-input"]').should('not.have.attr', 'required')
            cy.get('[data-cy="form-input-optional"]')
                .should('exist')
                .and('be.visible')
                .and('have.text', "Optional")
        })

        it("should display correct UI when default value is provided", () => {
            cy.mount(<FormInput
                type="number"
                label="Subjects"
                name="subjects"
                defaultValue={7}
                dataCy="form-input"
                dataCyLabel="form-input-label"
                dataCyOptional="form-input-optional"
            />)
            cy.get('[data-cy="form-input-label"]')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Subjects')
            cy.get('[data-cy="form-input"]')
                .should('exist')
                .and('be.visible')
                .and('have.attr', 'name')
                .and('include', 'subjects')
            cy.get('[data-cy="form-input"]').should('have.attr', 'required')
            cy.get('[data-cy="form-input"]')
                .and('have.attr', 'value')
                .and('include', 7)
            cy.get('[data-cy="form-input-optional"]')
                .should('not.exist')
        })

        it("should display correct UI when input is changed", () => {
            cy.mount(<FormInput
                type="number"
                label="Grade"
                name="grade"
                defaultValue={75}
                dataCy="form-input"
                dataCyLabel="form-input-label"
                dataCyOptional="form-input-optional"
            />)
            cy.get('[data-cy="form-input-label"]')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Grade')
            cy.get('[data-cy="form-input"]')
                .should('exist')
                .and('be.visible')
                .and('have.attr', 'name')
                .and('include', 'grade')
            cy.get('[data-cy="form-input"]').should('have.attr', 'required')
            cy.get('[data-cy="form-input"]')
                .should('have.attr', 'value')
                .and('include', 75)
            cy.get('[data-cy="form-input-optional"]')
                .should('not.exist')
            cy.get('[data-cy="form-input"]').clear().type('90')
        })
    })

    describe("text", () => {
        it("should display correct UI", () => {
            cy.mount(<FormInput
                type="text"
                label="Full Name"
                placeholder="Peter Simon"
                name="fullname"
                dataCy="form-input"
                dataCyLabel="form-input-label"
                dataCyOptional="form-input-optional"
            />)

            cy.get('[data-cy="form-input-label"]')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Full Name')
            cy.get('[data-cy="form-input"]').should('have.attr', 'required')
            cy.get('[data-cy="form-input"]')
                .should('exist')
                .and('be.visible')
                .and('have.attr', 'name')
                .and('include', 'fullname')
            cy.get('[data-cy="form-input"]')
                .should('have.attr', 'placeholder')
                .and('include', 'Peter Simon')
            cy.get('[data-cy="form-input-optional"]')
                .should('not.exist')
        })

        it("should display correct UI when optional", () => {
            cy.mount(<FormInput
                type="text"
                label="Middle Initial"
                name="middleInitial"
                optional={true}
                dataCy="form-input"
                dataCyLabel="form-input-label"
                dataCyOptional="form-input-optional"
            />)

            cy.get('[data-cy="form-input-label"]')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Middle Initial')
            cy.get('[data-cy="form-input"]')
                .should('exist')
                .and('be.visible')
                .and('have.attr', 'name')
                .and('include', 'middleInitial')
            cy.get('[data-cy="form-input"]').should('not.have.attr', 'required')
            cy.get('[data-cy="form-input-optional"]')
                .should('exist')
                .and('be.visible')
                .and('have.text', "Optional")
        })

        it("should display correct UI when default value is provided", () => {
            cy.mount(<FormInput
                type="text"
                label="Phone Number"
                name="phonenumber"
                defaultValue="+00"
                dataCy="form-input"
                dataCyLabel="form-input-label"
                dataCyOptional="form-input-optional"
            />)
            cy.get('[data-cy="form-input-label"]')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Phone Number')
            cy.get('[data-cy="form-input"]')
                .should('exist')
                .and('be.visible')
                .and('have.attr', 'name')
                .and('include', 'phonenumber')
            cy.get('[data-cy="form-input"]').should('have.attr', 'required')
            cy.get('[data-cy="form-input"]')
                .and('have.attr', 'value')
                .and('include', "+00")
            cy.get('[data-cy="form-input-optional"]')
                .should('not.exist')
        })

        it("should display correct UI when input is changed", () => {
            cy.mount(<FormInput
                type="text"
                label="Surname"
                name="surname"
                defaultValue="N/A"
                dataCy="form-input"
                dataCyLabel="form-input-label"
                dataCyOptional="form-input-optional"
            />)
            cy.get('[data-cy="form-input-label"]')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Surname')
            cy.get('[data-cy="form-input"]')
                .should('exist')
                .and('be.visible')
                .and('have.attr', 'name')
                .and('include', 'surname')
            cy.get('[data-cy="form-input"]').should('have.attr', 'required')
            cy.get('[data-cy="form-input"]')
                .should('have.attr', 'value')
                .and('include', "N/A")
            cy.get('[data-cy="form-input-optional"]')
                .should('not.exist')
            cy.get('[data-cy="form-input"]').clear().type('Martinez')
        })
    })
})
