import Listing from "@/components/_app/listing";
import Modal from "@/components/modal";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Modal> = {
    title: "Modal",
    component: Modal,
    tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
    show: true,
    // NOTE: No need to implement close function since this is always handled by the parent component
    close: () => { },
}

export const SmallSizedContent: Story = {
    args: {
        props: defaultArgs,
    },
    render: (args) => (
        <Modal {...args}>
            <header>Small and simple header</header>
        </Modal>
    ),
};

export const MediumSizedContent: Story = {
    args: {
        props: defaultArgs,
    },
    render: (args) => (
        <Modal {...args}>
            <section>
                <header>Rhymes with Pepsi</header>
                <p>
                    Dad did not like summer. “A little respiratory problem,” I overheard him tell the neighbour on one side of our house, but that was not why; I could hear the regular sigh of his breath when we watched TV together. “A minor circulatory thing,” I overheard him tell the other neighbour, but that was also not why because I could hear the steady ba-dump of his heart when I put my ear on his swollen belly. He just did not like the heat, I decided, like he did not like Coke but I did. The afternoon heat would drive us to the depths of the old stone church or the blasting chill of the video mart where we gazed long and hard but usually came away empty-handed. Sometimes we would ride the air-conditioned subway, end to end, with Dad trying to hide the yawns that split his jaw wide as the Don Valley.
                </p>
                <p>
                    During our last summer together, we stayed for a week at Dad’s parents’ cottage. It was possible to position your lawn-chair near the lakeshore in such a way that no other dwelling was visible. The green was rich, impenetrable. “Just like Mario World, innit, Chief,” Dad said to me. The cottage, with its splotches of red and white, looked indeed like a giant Mario mushroom. Its windows were large and high and faced the lake, and inside, its floors were the colour of golden honey.
                </p>
                <a href="https://blog.reedsy.com/short-story/8b05ap/" target="_blank">Continue reading...</a>
            </section>
        </Modal>
    ),
};

export const LargeSizedContent: Story = {
    args: {
        props: defaultArgs,
    },
    render: (args) => (
        <Modal {...args}>
            <Listing id="preview"
                imageUrls={[
                    "https://images.unsplash.com/photo-1551806235-a05dd14a54c7",
                    "https://images.unsplash.com/photo-1558442074-3c19857bc1dc",
                    "https://images.unsplash.com/photo-1560185009-5bf9f2849488",
                    "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
                    "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e",
                    "https://images.unsplash.com/photo-1560448076-ee77deea722b",
                    "https://images.unsplash.com/photo-1560448204-61dc36dc98c8",
                ]}
                price={12_000}
                deposit={-10}
                description={`
                    Situado en una ubicación privilegiada, nuestro apartamento ofrece una experiencia de vida sin igual que satisface todas sus necesidades.
                    
                    Haga la elección inteligente para una experiencia de vida sin problemas, flexible y agradable.
                    
                    ¡Póngase en contacto con nosotros hoy mismo para programar una visita y ver por qué nuestro apartamento es el lugar perfecto para llamar a casa!
                    `}
                beds={2}
                baths={2}
                area={67}
                availableDate={new Date('2025-01-01')}
                longitude={-57.2341364}
                latitude={-34.2915288}
                addressLine={"German Imhof 992"}
                city={"Nueva Helvecia"}
                state={"Departamento de Colonia"}
                zipCode={"70300 "}
                email="contact@forent.com"
            />
        </Modal>
    ),
};
