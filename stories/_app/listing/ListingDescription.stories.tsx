import ListingDescription from "@/components/_app/listing/description";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ListingDescription> = {
    title: "App/Listing/Description",
    component: ListingDescription,
    tags: ["autodocs"],
} satisfies Meta<typeof ListingDescription>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallLayout: Story = {
    args: {
        description: "Desino cruentus appositus tamisium tollo villa valde comedo. Asperiores surgo demum vis dedecor spiritus conturbo animus capitulus nobis. Carbo abbas totus tepidus vaco comedo amaritudo."
    },
    parameters: {
        viewport: {
            defaultViewport: 'small',
        },
    },
};

export const MediumLayout: Story = {
    args: {
        description: `Desino cruentus appositus tamisium tollo villa valde comedo.
        
        Asperiores surgo demum vis dedecor spiritus conturbo animus capitulus nobis.
        
        Carbo abbas totus tepidus vaco comedo amaritudo.`
    },
    parameters: {
        viewport: {
            defaultViewport: 'md',
        },
    },
};

export const LargeLayout: Story = {
    args: {
        description: `Morbi finibus condimentum vestibulum. Proin rhoncus nisl nec nisl faucibus lobortis. 
        
        Donec fringilla elementum feugiat. Morbi in orci tortor. Etiam eleifend, lectus sit amet ornare consequat, elit enim semper diam, efficitur tempor odio arcu sed turpis. Proin ornare ac diam at dictum. Maecenas tristique facilisis felis.
        
        Duis nulla tortor, gravida vitae fringilla non, dignissim eget neque. Phasellus ornare in ipsum vitae molestie.
        
        Donec sollicitudin mauris est, vitae finibus metus consequat ut. Etiam molestie ut massa nec aliquet.
        
        Praesent dignissim tincidunt mauris, mattis vestibulum neque rutrum quis. Etiam vel eros non sapien elementum dictum. In vitae pharetra neque. `
    },
    parameters: {
        viewport: {
            defaultViewport: 'lg',
        },
    },
};

export const ExtraLargeLayout: Story = {
    args: {
        description: `Ut nec purus rutrum, feugiat velit at, finibus ante. Maecenas fringilla efficitur tellus, a efficitur massa. 
        
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Vivamus id dignissim metus. Nullam eros magna, finibus a ante id, consectetur tristique nisl. 
        
        Curabitur libero est, vehicula ut vulputate a, pharetra rutrum turpis.
        Donec dignissim ipsum tempor velit tempus, sed interdum arcu eleifend. Vestibulum scelerisque quam nec aliquam facilisis. 
        
        Curabitur ut venenatis ligula, sit amet porttitor nulla. `
    },
    parameters: {
        viewport: {
            defaultViewport: 'xl',
        },
    },
};

export const ExtraExtraLargeLayout: Story = {
    args: {
        description: `Pellentesque a cursus urna, in maximus lorem. Praesent ullamcorper orci at felis sollicitudin, quis sollicitudin ex facilisis. Morbi eu commodo dolor. Ut vitae turpis sollicitudin, maximus lectus eu, auctor arcu. 
        
        Cras eget ante nec dui fringilla vulputate. Mauris placerat auctor mi, ut efficitur nunc porta sit amet. Aliquam dignissim, turpis in finibus vestibulum, odio nunc porttitor enim, id facilisis ante mi ut neque. 
        
        Nam elementum odio sit amet ultrices condimentum. Nam dolor tortor, aliquet ac dapibus sed, mattis eget lorem. Etiam ultrices purus et nisl lobortis lobortis. Aliquam ipsum libero, viverra et justo eu, suscipit condimentum tortor. 
        
        Curabitur auctor vulputate felis, non ultricies felis mattis a. Mauris id nibh eleifend, aliquam odio at, efficitur ante. Morbi tempor tempus eros eu fringilla.`
    },
    parameters: {
        viewport: {
            defaultViewport: 'xxl',
        },
    },
};
