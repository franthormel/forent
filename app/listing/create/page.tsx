import PageLayout from "@/app/_component/page-layout";
import ListingCreateHeader from "./_components/header";

export default function ListingCreatePage() {
	return (
		<PageLayout>
			<div className="grid auto-rows-auto gap-4">
				<ListingCreateHeader />
			</div>
		</PageLayout>
	)
}
