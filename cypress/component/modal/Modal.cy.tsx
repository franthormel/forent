import Modal, { ModalProps } from '@/components/modal';

describe('Modal', () => {
    const DEFAULT_PROPS: ModalProps = {
        close: () => { },
        show: true,
        dataCy: "modal",
        dataCyBackdrop: "modal-backdrop",
        dataCyContent: "modal-content"
    }

    describe('display correct UI when content is', () => {
        it('small', () => {
            cy.mount(<Modal props={DEFAULT_PROPS}>
                <p>That&#39;s why I am like I am &#39;cause I&#39;m like her</p>
            </Modal>)

            // Modal
            cy.get('[data-cy="modal"]').should('exist')

            // Modal (backdrop)
            cy.get('[data-cy="modal-backdrop"]')
                .should('exist')
                .and('be.visible')

            // Modal (content)
            cy.get('[data-cy="modal-content"]')
                .should('exist')
                .and('be.visible')
                .and('contain.text', "That's why I am like I am 'cause I'm like her")

            cy.get('[data-cy="modal-content"]')
                .children()
                .should('exist')
                .and('be.visible')
                .and('have.length', 1)
        })

        it('medium', () => {
            cy.mount(<Modal props={DEFAULT_PROPS}>
                <div>
                    <p>Sometimes a love won&#39;t let go<br /></p>
                    <p>Hard as I try I know it shows<br /></p>
                    <p>Everybody&#39;s telling me<br /></p>
                    <p>You&#39;ll be over her eventually<br /></p>
                    <p>But how am I supposed to feel so secure</p>
                </div>
            </Modal>)

            // Modal
            cy.get('[data-cy="modal"]').should('exist')

            // Modal (backdrop)
            cy.get('[data-cy="modal-backdrop"]').should('exist')

            // Modal (content)
            cy.get('[data-cy="modal-content"]')
                .should('exist')
                .and('be.visible')
                .and('contain.text', "Sometimes a love won't let go")
                .and('contain.text', "Hard as I try I know it shows")
                .and('contain.text', "Everybody's telling me")
                .and('contain.text', "You'll be over her eventually")
                .and('contain.text', "But how am I supposed to feel so secure")
            cy.get('[data-cy="modal-content"]')
                .children()
                .should('exist')
                .and('be.visible')
                .and('have.length', 1)
        })

        it('large', () => {
            cy.mount(<Modal props={DEFAULT_PROPS}>
                <div>
                    <p>I don&#39;t know how this whole business started</p>
                    <p>Of you thinkin&#39; that I have been untrue</p>
                    <p>But if you think that we&#39;d be better parted</p>
                    <p>It&#39;s gonna hurt me, but I&#39;ll break away from you</p>
                    <p>Well, just give me the sign and I will be gone, yeah</p>
                    <p>(That&#39;s how much I feel) feel for you, baby</p>
                    <p>(How much I need) well I need your touch</p>
                    <p>(How much I live) I live for your loving</p>
                    <p>That&#39;s how much (that&#39;s how much)</p>
                    <p>That&#39;s how much, that&#39;s how much</p>
                    <br />
                    <p>I sleep alone, and late at night I&#39;m dreamin&#39;</p>
                    <p>Of the togetherness that seems to be leaving me</p>
                    <p>I&#39;d give it all and then I&#39;d give some more</p>
                    <p>If you would only love me like you had before</p>
                    <p>Well, take hold of my hand and all will be forgiven, yeah</p>
                    <br />
                    <p>(That&#39;s how much I feel) feel for you, baby</p>
                    <p>(How much I need) I need your touch</p>
                    <p>(How much I live) I live for your loving</p>
                    <p>(That&#39;s how much) that&#39;s how much</p>
                    <p>That&#39;s how much, that&#39;s how much</p>
                    <br />
                    <p>So you try (try), try to stay in the middle</p>
                    <p>And then you cry (cry), well you cry just a little</p>
                    <p>Then you both realize</p>
                    <p>Just how foolish you&#39;ve been</p>
                    <p>And you try to make amends</p>
                    <p>But you&#39;re better off as friends</p>
                    <p>&#39;Cause that&#39;s how much (that&#39;s how much)</p>
                    <p>That&#39;s how much, that&#39;s how much</p>
                    <br />
                    <p>How&#39;s your life been goin&#39; on?</p>
                    <p>I&#39;ve got a wife now, years we&#39;ve been goin&#39; strong</p>
                    <p>Oh, no, there&#39;s just something that I&#39;ve got to say</p>
                    <p>Sometimes when we make love</p>
                    <p>I still can see your face</p>
                    <p>Ooh, just try to recall</p>
                    <p>When we were as one, yeah</p>
                    <br />
                    <p>(That&#39;s how much I feel) feel for you, baby</p>
                    <p>(How much I need) I need your touch</p>
                    <p>(How much I live) I live for your loving</p>
                    <p>That&#39;s how much</p>

                </div>
            </Modal>)

            // Modal
            cy.get('[data-cy="modal"]').should('exist')

            // Modal (backdrop)
            cy.get('[data-cy="modal-backdrop"]').should('exist')

            // Modal (content)
            cy.get('[data-cy="modal-content"]').scrollTo('bottom')
            cy.get('[data-cy="modal-content"]')
                .should('exist')
                .and('be.visible')
                .and('contain.text', "I don't know how this whole business started")
                .and('contain.text', "But if you think that we'd be better parted")
                .and('contain.text', "Of the togetherness that seems to be leaving me")
                .and('contain.text', "Just how foolish you've been")
                .and('contain.text', "I still can see your face")
            cy.get('[data-cy="modal-content"]')
                .children()
                .should('exist')
                .and('have.length', 1)
        })
    })
})
