// TODO: Story
export default function PageLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="grid auto-rows-auto gap-y-16 px-24 lg:px-32 xl:px-36 2xl:px-44">
			{children}
		</div>
	)
}
