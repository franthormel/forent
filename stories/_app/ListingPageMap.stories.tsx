import ListingPageMap from "@/app/listing/_component/map";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ListingPageMap> = {
	title: "App/Listing Page/Map",
	component: ListingPageMap,
	parameters: {
		layout: 'fullscreen'
	}
} satisfies Meta<typeof ListingPageMap>;

export default meta;
type Story = StoryObj<typeof meta>;

const imageUrls = [
	'https://images.unsplash.com/photo-1609767175584-7abe16d3f1fa',
	'https://images.unsplash.com/photo-1598928739741-a922f245bb6d',
	'https://images.unsplash.com/photo-1598928387577-d49b6d399110',
	'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
	'https://images.unsplash.com/photo-1464890100898-a385f744067f',
	'https://images.unsplash.com/photo-1538609589535-bb35f0c034db'
];

export const SmallLayout: Story = {
	args: {
		mapId: "map-sm",
		lat: -8.9816958,
		lon: -38.2163828
	},
	parameters: {
		viewport: {
			defaultViewport: 'small',
		},
	},
};

export const MediumLayout: Story = {
	args: {
		mapId: "map-md",
		lat: 15.9272138,
		lon: 48.7952987
	},
	parameters: {
		viewport: {
			defaultViewport: 'md',
		},
	},
};

export const LargeLayout: Story = {
	args: {
		mapId: "map-lg",
		lat: 8.1101243,
		lon: -63.5790315
	},
	parameters: {
		viewport: {
			defaultViewport: 'lg',
		},
	},
};

export const ExtraLargeLayout: Story = {
	args: {
		mapId: "map-xl",
		lat: 60.8657115,
		lon: 26.7151751
	},
	parameters: {
		viewport: {
			defaultViewport: 'xl',
		},
	},
};

export const ExtraExtraLargeLayout: Story = {
	args: {
		mapId: "map-2xl",
		lat: 38.9775672,
		lon: 125.7193604
	},
	parameters: {
		viewport: {
			defaultViewport: 'xxl',
		},
	},
};
