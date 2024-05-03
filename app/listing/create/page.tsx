import PageLayout from "@/app/_component/page-layout";
import ListingCreateErrorMessages from "./_components/error-messages";
import ListingCreateHeader from "./_components/header";

export default function ListingCreatePage() {
	return (
		<PageLayout>
			<div className="grid auto-rows-auto gap-4">
				<ListingCreateHeader
					dataCy="listing-create-header"
					dataCySubHeader="listing-create-subheader" />
				<ListingCreateErrorMessages
					showError={true}
					title="Check errors below"
					dataCyIcon="listing-create-error-icon"
					dataCyTitle="listing-create-error-title" />
			</div>
		</PageLayout>
	)
}
