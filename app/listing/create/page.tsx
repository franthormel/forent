import PageLayout from "@/app/_component/page-layout";
import SectionHeaderIcon from "@/components/section/header-icon";
import ListingCreateErrorMessages from "./_components/error-messages";
import ListingCreateHeader from "./_components/header";
import FormInput from "@/components/form-input";
import FormInputTextArea from "@/components/form-input/textarea";

export default function ListingCreatePage() {
	return (
		<PageLayout>
			{/* Top */}
			<div className="space-y-4">
				<ListingCreateHeader
					dataCy="listing-create-header"
					dataCySubHeader="listing-create-subheader" />
				<ListingCreateErrorMessages
					showError={true}
					title="Check errors below"
					dataCyIcon="listing-create-error-icon"
					dataCyTitle="listing-create-error-title" />
			</div>
			{/* TODO: Form */}
			<div className="space-y-11">
				{/* Basic information */}
				<div className="space-y-4">
					<SectionHeaderIcon props={{
						text: "Basic Information",
						dataCyIcon: "listing-create-section-basic-info-icon",
						dataCyText: "listing-create-section-basic-info-text",
					}}>
						<svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28">
							<path
								d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
						</svg>
					</SectionHeaderIcon>
					<div className="grid grid-cols-2 gap-x-4">
						<FormInput
							label='Price'
							name='price'
							type="number"
							min={100}
							max={100_000_000}
							dataCy="listing-create-form-price-input"
							dataCyLabel="listing-create-form-price-input-label"
							dataCyOptional="listing-create-form-price-input-optional"
							dataCyError="listing-create-form-price-input-error" />
						<FormInput
							label='Deposit'
							name='deposit'
							type="number"
							optional={true}
							min={0}
							max={1_000_000}
							defaultValue={0}
							dataCy="listing-create-form-deposit-input"
							dataCyLabel="listing-create-form-deposit-input-label"
							dataCyOptional="listing-create-form-deposit-input-optional"
							dataCyError="listing-create-form-deposit-input-error" />
					</div>
					<FormInputTextArea
						label='Description'
						name='description'
						minLength={16}
						maxLength={1024}
						dataCy="listing-create-form-description-input-textarea"
						dataCyLabel="listing-create-form-description-input-textarea-label"
						dataCyOptional="listing-create-form-description-input-textarea-optional"
						dataCyError="listing-create-form-description-input-textarea-error" />
					<div className="grid grid-cols-3 gap-x-4">
						<FormInput
							label='No. of Beds'
							name='beds'
							type="number"
							min={1}
							max={750}
							dataCy="listing-create-form-beds-input"
							dataCyLabel="listing-create-form-beds-input-label"
							dataCyOptional="listing-create-form-beds-input-optional"
							dataCyError="listing-create-form-beds-input-error" />
						<FormInput
							label='No. of Baths'
							name='baths'
							type="number"
							min={1}
							max={250}
							dataCy="listing-create-form-baths-input"
							dataCyLabel="listing-create-form-baths-input-label"
							dataCyOptional="listing-create-form-baths-input-optional"
							dataCyError="listing-create-form-baths-input-error" />
						<FormInput
							label='Area (sqm)'
							name='area'
							type="number"
							min={10}
							max={1_000_000}
							dataCy="listing-create-form-area-input"
							dataCyLabel="listing-create-form-area-input-label"
							dataCyOptional="listing-create-form-area-input-optional"
							dataCyError="listing-create-form-area-input-error" />
					</div>
					<div className="grid grid-cols-3">
						<div className="col-span-2">
							<FormInput label='Available Date' name='availableDate' type='date' optional={true} />
						</div>
					</div>
				</div>
				{/* Photos */}
				<div className="space-y-4">
					<SectionHeaderIcon props={{
						text: "Photos",
						dataCyIcon: "listing-create-section-photos-icon",
						dataCyText: "listing-create-section-photos-text",
					}}>
						<svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28">
							<path
								d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm40-160h480L570-480 450-320l-90-120-120 160Z" />
						</svg>
					</SectionHeaderIcon>
					<p className="text-gray-500"
						data-cy="listing-create-photos-text">
						*Chosen from a random set of images
					</p>
				</div>
			</div>
		</PageLayout>
	)
}
