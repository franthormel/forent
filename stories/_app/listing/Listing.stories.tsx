import Listing, { ListingProps } from "@/components/_app/listing";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Listing> = {
    title: "App/Listing",
    component: Listing,
    tags: ["autodocs"],
} satisfies Meta<typeof Listing>;

export default meta;
type Story = StoryObj<typeof meta>;

const imageUrls = [
    'https://images.unsplash.com/photo-1609767175584-7abe16d3f1fa',
    'https://images.unsplash.com/photo-1598928739741-a922f245bb6d',
    'https://images.unsplash.com/photo-1598928387577-d49b6d399110',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
    'https://images.unsplash.com/photo-1464890100898-a385f744067f',
    'https://images.unsplash.com/photo-1538609589535-bb35f0c034db'
]

const defaultArgs: ListingProps = {
    id: "421984fd",
    imageUrls: imageUrls,
    price: 12000,
    deposit: 0,
    beds: 2,
    baths: 1,
    area: 25,
    availableDate: new Date(2030, 4, 12),
    addressLine: "201 Trent Suite 800",
    city: "Beiermouth",
    state: "Torrevieja",
    zipCode: 83648,
    name: "Anselmo Mandeja",
    contactNumber: "331-551-7254",
    email: "amandeja@email.com",
    description: `Pellentesque a cursus urna, in maximus lorem. Praesent ullamcorper orci at felis sollicitudin, quis sollicitudin ex facilisis. Morbi eu commodo dolor. Ut vitae turpis sollicitudin, maximus lectus eu, auctor arcu. 
        
    Cras eget ante nec dui fringilla vulputate. Mauris placerat auctor mi, ut efficitur nunc porta sit amet. Aliquam dignissim, turpis in finibus vestibulum, odio nunc porttitor enim, id facilisis ante mi ut neque. 
    
    Nam elementum odio sit amet ultrices condimentum. Nam dolor tortor, aliquet ac dapibus sed, mattis eget lorem. Etiam ultrices purus et nisl lobortis lobortis. Aliquam ipsum libero, viverra et justo eu, suscipit condimentum tortor. 
    
    Curabitur auctor vulputate felis, non ultricies felis mattis a. Mauris id nibh eleifend, aliquam odio at, efficitur ante. Morbi tempor tempus eros eu fringilla.`,
    latitude: 6.12503899910633,
    longitude: 81.1224138736725
};

export const SmallLayout: Story = {
    args: defaultArgs,
    parameters: {
        viewport: {
            defaultViewport: 'small',
        },
    },
};

export const MediumLayout: Story = {
    args: defaultArgs,
    parameters: {
        viewport: {
            defaultViewport: 'md',
        },
    },
};

export const LargeLayout: Story = {
    args: defaultArgs,
    parameters: {
        viewport: {
            defaultViewport: 'lg',
        },
    },
};

export const ExtraLargeLayout: Story = {
    args: defaultArgs,
    parameters: {
        viewport: {
            defaultViewport: 'xl',
        },
    },
};

export const ExtraExtraLargeLayout: Story = {
    args: defaultArgs,
    parameters: {
        viewport: {
            defaultViewport: 'xxl',
        },
    },
};
