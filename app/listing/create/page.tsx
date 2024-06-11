"use client"

import Listing from "@/components/_app/listing";
import PageLayout from "@/components/_app/page-layout";
import ButtonFilled from "@/components/buttons/filled";
import ButtonOutlined from "@/components/buttons/outlined";
import ButtonText from "@/components/buttons/text";
import FormInput from "@/components/form-input";
import FormInputReset from "@/components/form-input/reset";
import FormInputTextArea from "@/components/form-input/textarea";
import Modal from "@/components/modal";
import SectionHeaderIcon from "@/components/section/header-icon";
import TextError from "@/components/text/error";
import { DateUtils } from "@/lib/commons/date_utils";
import { NumberUtils } from "@/lib/commons/number_utils";
import { LonLat } from "@/lib/types/geography";
import { ListingPreviewForm } from "@/lib/types/listing";
import { ListingFormValidator } from "@/lib/validation/listing";
import { ListingPreviewFormValidator } from "@/lib/validation/listing/preview";
import pinIcon from "@/public/icons/home_pin.svg";
import { Feature, Map, View } from "ol";
import { defaults } from "ol/control";
import { Point } from "ol/geom";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import { fromLonLat, toLonLat } from "ol/proj";
import OSM from "ol/source/OSM";
import VectorSource from "ol/source/Vector";
import { Icon, Style } from "ol/style";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import ListingCreateError from "./_components/error";
import ListingCreateHeader from "./_components/header";
import { createListingNew, fetchAddresss, fetchRandomImages, fetchUser, isUserAuthenticated } from "./action";

/**
 * Remove any error message
 * 
 * @param value Error message state value
 * @param setStateAction Set state function
 */
function removeAnyErrorMessage(value: string | undefined, setStateAction: Dispatch<SetStateAction<string | undefined>>) {
	if (value !== undefined && value.length > 0) {
		setStateAction(undefined);
	}
}

export default function ListingCreatePage() {
	// Form submission (Server)
	const [formState, formAction] = useFormState(createListingNew, {
		errors: new globalThis.Map()
	});
	const hasServerError = formState.errors.size > 0

	// Form values
	const priceValueRef = useRef<number>()
	const depositValueRef = useRef<number>()
	const descriptionValueRef = useRef<string>()
	const bedsValueRef = useRef<number>()
	const bathsValueRef = useRef<number>()
	const areaValueRef = useRef<number>()
	const availableDateValueRef = useRef<string>()
	const [addressLine, setAddressLine] = useState<string>('')
	const [addressCity, setAddressCity] = useState<string>('')
	const [addressState, setAddressState] = useState<string>('')
	const addressZipcodeValueRef = useRef<string>()
	const userEmailRef = useRef<string>('');
	const imageUrlsRef = useRef<string[]>([]);

	// Loading states
	const [fetchingAddress, setFetchingAddress] = useState<boolean>(false);

	// Validation errors (Client)
	const [priceInputError, setPriceInputError] = useState<string | undefined>(undefined);
	const [descriptionInputError, setDescriptionInputError] = useState<string | undefined>(undefined);
	const [depositInputError, setDepositInputError] = useState<string | undefined>(undefined);
	const [bedsInputError, setBedsInputError] = useState<string | undefined>(undefined);
	const [bathsInputError, setBathsInputError] = useState<string | undefined>(undefined);
	const [areaInputError, setAreaInputError] = useState<string | undefined>(undefined);
	const [availableDateInputError, setAvailableDateInputError] = useState<string | undefined>(undefined);
	// Used by slippy map 
	const [addressInputError, setAddressInputError] = useState<string | undefined>(undefined);
	const [addressLineInputError, setAddressLineInputError] = useState<string | undefined>(undefined);
	const [addressCityInputError, setAddressCityInputError] = useState<string | undefined>(undefined);
	const [addressStateInputError, setAddressStateInputError] = useState<string | undefined>(undefined);
	const [addressZipcodeInputError, setAddressZipcodeInputError] = useState<string | undefined>(undefined);

	const todayDate = new Date();
	const today = DateUtils.formatDate(todayDate)
	const oneYearFromTodayDate = DateUtils.offsetYear(todayDate, 1);
	const oneYearFromToday = DateUtils.formatDate(oneYearFromTodayDate)

	// Map related
	const MAP_PRELOAD = 4
	const MAP_ID = "listing-create-form-address-map";

	const [mapLonLat, setMapLonLat] = useState<LonLat | undefined>(undefined)

	// Map icon
	const mapIconStyle = new Style({
		image: new Icon({
			src: pinIcon.src,
		}),
	})

	// Map position
	const mapPositionFeature = new Feature()
	mapPositionFeature.setStyle(mapIconStyle)

	// Map view
	const mapView = new View({
		center: fromLonLat([0, 0]),
		zoom: 2,
	})

	// Only switch views when position has changed
	if (mapLonLat) {
		const coords = fromLonLat([mapLonLat.longitude, mapLonLat.latitude]);
		const point = new Point(coords);
		mapPositionFeature.setGeometry(point)
		mapView.setCenter(coords);
	}

	// Modal state
	const [showModalState, setShowModalState] = useState<boolean>(false);

	useEffect(() => {
		const map = new Map({
			target: MAP_ID,
			layers: [
				new TileLayer({
					source: new OSM()
				}),
				new VectorLayer({
					source: new VectorSource({
						features: [mapPositionFeature],
					}),
				})
			],
			controls: defaults({ attributionOptions: { collapsible: true } }),
			view: mapView
		})
		map.on("singleclick", (e) => {
			// Change displayed icon's position
			const point = new Point(e.coordinate);
			mapPositionFeature.setGeometry(point)

			// Change hidden input field values
			const newLonLat = toLonLat(e.coordinate)
			setMapLonLat({
				longitude: newLonLat[0],
				latitude: newLonLat[1]
			})
		})

		return () => map.dispose()
	}, [])

	return (
		<div>
			<Modal props={{ show: showModalState, close: () => { setShowModalState(false) } }}>
				{/* FUTURE: Show deposit */}
				<Listing id="preview"
					imageUrls={imageUrlsRef.current}
					price={priceValueRef.current!}
					description={descriptionValueRef.current!}
					beds={bedsValueRef.current!}
					baths={bathsValueRef.current!}
					area={areaValueRef.current!}
					availableDate={new Date(availableDateValueRef.current ?? '2000-01-01')}
					longitude={mapLonLat?.longitude!}
					latitude={mapLonLat?.latitude!}
					addressLine={addressLine}
					city={addressCity}
					state={addressState}
					zipCode={addressZipcodeValueRef.current!}
					email={userEmailRef.current}
				/>
			</Modal>
			<form action={formAction}>
				<PageLayout>
					{/* Top */}
					<div className="space-y-4">
						<ListingCreateHeader
							dataCy="listing-create-header"
							dataCySubHeader="listing-create-subheader" />
						{/* FUTURE: Animate when it pops up */}
						<ListingCreateError
							// Only shown for server error
							showError={hasServerError}
							error="Check errors below"
							dataCyIcon="listing-create-error-icon"
							dataCyTitle="listing-create-error" />
					</div>
					{/* Form */}
					<div className="space-y-11">
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
							<div className="grid grid-cols-2 gap-x-4 md:w-[36rem]">
								{/* Price */}
								<FormInput
									label='Price'
									name='price'
									type="number"
									min={Number(process.env.LISTING_PRICE_MIN ?? 100)}
									max={Number(process.env.LISTING_PRICE_MAX ?? 100_000_000)}
									onChange={(e) => {
										const value = NumberUtils.toNumber(e.target.value, -1);

										priceValueRef.current = value;

										const result = ListingFormValidator.validatePrice(value);
										if (!result.success) {
											const error = result.error.errors[0].message
											// Only change into a new error message
											if (priceInputError !== error) {
												setPriceInputError(error);
											}
											// Only remove previous error message
										} else if (result.success && priceInputError !== undefined) {
											setPriceInputError(undefined)
										}
									}}
									errorMessage={priceInputError}
									dataCy="listing-create-form-price-input"
									dataCyLabel="listing-create-form-price-input-label"
									dataCyOptional="listing-create-form-price-input-optional"
									dataCyError="listing-create-form-price-input-error" />
								{/* Deposit */}
								<FormInput
									label='Deposit'
									name='deposit'
									type="number"
									optional={true}
									min={Number(process.env.LISTING_DEPOSIT_MIN ?? 100)}
									max={Number(process.env.LISTING_DEPOSIT_MAX ?? 1_000_000)}
									onChange={(e) => {
										const value = NumberUtils.toNumber(e.target.value, -1);

										depositValueRef.current = value;

										const result = ListingFormValidator.validateDeposit(value);
										if (!result.success) {
											const error = result.error.errors[0].message
											// Only change into a new error message
											if (depositInputError !== error) {
												setDepositInputError(error);
											}
											// Only remove previous error message
										} else if (result.success && depositInputError !== undefined) {
											setDepositInputError(undefined)
										}
									}}
									errorMessage={depositInputError}
									dataCy="listing-create-form-deposit-input"
									dataCyLabel="listing-create-form-deposit-input-label"
									dataCyOptional="listing-create-form-deposit-input-optional"
									dataCyError="listing-create-form-deposit-input-error" />
							</div>
							{/* Description */}
							<div className="lg:w-[48rem]">
								<FormInputTextArea
									label='Description'
									name='description'
									minLength={Number(process.env.LISTING_DESC_MIN ?? 16)}
									maxLength={Number(process.env.LISTING_DESC_MAX ?? 1024)}
									onChange={(e) => {
										const value = e.target.value;

										descriptionValueRef.current = value;

										const result = ListingFormValidator.validateDescription(value);
										if (!result.success) {
											const error = result.error.errors[0].message
											// Only change into a new error message
											if (descriptionInputError !== error) {
												setDescriptionInputError(error);
											}
											// Only remove previous error message
										} else if (result.success && descriptionInputError !== undefined) {
											setDescriptionInputError(undefined)
										}
									}}
									errorMessage={descriptionInputError}
									dataCy="listing-create-form-description-input-textarea"
									dataCyLabel="listing-create-form-description-input-textarea-label"
									dataCyOptional="listing-create-form-description-input-textarea-optional"
									dataCyError="listing-create-form-description-input-textarea-error" />
							</div>
							<div className="grid grid-cols-3 gap-x-4 md:w-[36rem]">
								{/* No. of Beds */}
								<FormInput
									label='No. of Beds'
									name='beds'
									type="number"
									min={Number(process.env.LISTING_BEDS_MIN ?? 1)}
									max={Number(process.env.LISTING_BEDS_MAX ?? 750)}
									onChange={(e) => {
										const value = NumberUtils.toNumber(e.target.value, -1);

										bedsValueRef.current = value;

										const result = ListingFormValidator.validateBeds(value);
										if (!result.success) {
											const error = result.error.errors[0].message
											// Only change into a new error message
											if (bedsInputError !== error) {
												setBedsInputError(error);
											}
											// Only remove previous error message
										} else if (result.success && bedsInputError !== undefined) {
											setBedsInputError(undefined)
										}
									}}
									errorMessage={bedsInputError}
									dataCy="listing-create-form-beds-input"
									dataCyLabel="listing-create-form-beds-input-label"
									dataCyOptional="listing-create-form-beds-input-optional"
									dataCyError="listing-create-form-beds-input-error" />
								{/* No. of Baths */}
								<FormInput
									label='No. of Baths'
									name='baths'
									type="number"
									min={Number(process.env.LISTING_BATHS_MIN ?? 1)}
									max={Number(process.env.LISTING_BATHS_MAX ?? 250)}
									onChange={(e) => {
										const value = NumberUtils.toNumber(e.target.value, -1);

										bathsValueRef.current = value;

										const result = ListingFormValidator.validateBaths(value);
										if (!result.success) {
											const error = result.error.errors[0].message
											// Only change into a new error message
											if (bathsInputError !== error) {
												setBathsInputError(error);
											}
											// Only remove previous error message
										} else if (result.success && bathsInputError !== undefined) {
											setBathsInputError(undefined)
										}
									}}
									errorMessage={bathsInputError}
									dataCy="listing-create-form-baths-input"
									dataCyLabel="listing-create-form-baths-input-label"
									dataCyOptional="listing-create-form-baths-input-optional"
									dataCyError="listing-create-form-baths-input-error" />
								{/* Area */}
								<FormInput
									// FUTURE: Localize `sqm`
									label='Area (sqm)'
									name='area'
									type="number"
									min={Number(process.env.LISTING_AREA_MIN ?? 10)}
									max={Number(process.env.LISTING_AREA_MAX ?? 1_000_000)}
									onChange={(e) => {
										const value = NumberUtils.toNumber(e.target.value, -1);

										areaValueRef.current = value;

										const result = ListingFormValidator.validateArea(value);
										if (!result.success) {
											const error = result.error.errors[0].message
											// Only change into a new error message
											if (areaInputError !== error) {
												setAreaInputError(error);
											}
											// Only remove previous error message
										} else if (result.success && areaInputError !== undefined) {
											setAreaInputError(undefined)
										}
									}}
									errorMessage={areaInputError}
									dataCy="listing-create-form-area-input"
									dataCyLabel="listing-create-form-area-input-label"
									dataCyOptional="listing-create-form-area-input-optional"
									dataCyError="listing-create-form-area-input-error" />
							</div>
							<div className="grid grid-cols-3 md:w-[36rem]">
								{/* Available Date */}
								<div className="col-span-2">
									<FormInput
										label='Available Date'
										name='availableDate'
										type='date'
										optional={true}
										min={today}
										max={oneYearFromToday}
										defaultValue={today}
										onChange={(e) => {
											const value = e.target.value;

											availableDateValueRef.current = value;

											const result = ListingFormValidator.validateAvailableDate(value, todayDate, oneYearFromTodayDate);
											if (!result.success) {
												const error = result.error.errors[0].message
												// Only change into a new error message
												if (availableDateInputError !== error) {
													setAvailableDateInputError(error);
												}
												// Only remove previous error message
											} else if (result.success && availableDateInputError !== undefined) {
												setAvailableDateInputError(undefined)
											}
										}}
										errorMessage={availableDateInputError}
										dataCy="listing-create-form-available-date-input"
										dataCyLabel="listing-create-form-available-date-input-label"
										dataCyOptional="listing-create-form-available-date-input-optional"
										dataCyError="listing-create-form-available-date-input-error" />
								</div>
							</div>
						</div>
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
							{/* Photos */}
							<p className="text-gray-500"
								data-cy="listing-create-photos-text">
								*Chosen from a random set of images
							</p>
						</div>
						<div className="space-y-4">
							<SectionHeaderIcon props={{
								text: "Address",
								dataCyIcon: "listing-create-section-address-icon",
								dataCyText: "listing-create-section-address-text",
							}}>
								<svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28">
									<path
										d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z" />
								</svg>
							</SectionHeaderIcon>
							{/* Address */}
							<div className="grid auto-rows-auto gap-y-2">
								{/* Map */}
								<div className="h-96 md:h-[30rem] lg:h-[35rem]">
									<div id={MAP_ID}
										className="h-full"
										data-cy="listing-create-form-address-map"
										tabIndex={0} />
								</div>
								{/* Map error (if any) */}
								<TextError dataCy="listing-create-form-address-map-error" value={addressInputError} />
								<div className="w-fit">
									<ButtonOutlined
										text="Get Pin Address"
										size="small"
										loading={fetchingAddress}
										dataCy="listing-create-form-address-button"
										onClick={async () => {
											// Only if there are coordinates present in the slippy map
											if (!mapLonLat) {
												return;
											}

											// Show loading state
											setFetchingAddress(true)

											// Fetch data from reverse geocoding provider and ...
											const response = await fetchAddresss(mapLonLat.latitude, mapLonLat.longitude);
											// ... display returned values
											setAddressLine(response.addressLine);
											setAddressCity(response.city);
											setAddressState(response.state)

											// Remove loading state
											setFetchingAddress(false)

											// Hide any address input error
											removeAnyErrorMessage(addressInputError, setAddressInputError);
										}} />
								</div>
								{/* Address longitude */}
								<input type="hidden"
									name="addressLongitude"
									value={mapLonLat?.longitude}
									data-cy="listing-create-form-address-longitude" />
								{/* Address latitude */}
								<input type="hidden"
									name="addressLatitude"
									value={mapLonLat?.latitude}
									data-cy="listing-create-form-address-latitude" />
							</div>
							<div className="space-y-4 md:w-[36rem]"
								hidden={mapLonLat === undefined}>
								{/* Address Line */}
								<FormInput
									label='Address Line'
									name='addressLine'
									type="text"
									minLength={Number(process.env.LISTING_ADDRESS_LINE_MIN ?? 1)}
									maxLength={Number(process.env.LISTING_ADDRESS_LINE_MAX ?? 128)}
									onChange={(e) => {
										// Change input state variable
										setAddressLine(e.target.value)

										// Validate input
										const result = ListingFormValidator.validateAddressLine(e.target.value);
										if (!result.success) {
											const error = result.error.errors[0].message
											// Only change into a new error message
											if (addressLineInputError !== error) {
												setAddressLineInputError(error);
											}
											// Only remove previous error message
										} else if (result.success && addressLineInputError !== undefined) {
											setAddressLineInputError(undefined)
										}
									}}
									value={addressLine}
									errorMessage={addressLineInputError}
									dataCy="listing-create-form-address-line-input"
									dataCyLabel="listing-create-form-address-line-input-label"
									dataCyOptional="listing-create-form-address-line-input-optional"
									dataCyError="listing-create-form-address-line-input-error" />
								<div className="grid grid-cols-2 gap-x-4">
									{/* City */}
									<FormInput
										label='City'
										name='city'
										type="text"
										minLength={Number(process.env.LISTING_ADDRESS_CITY_MIN ?? 1)}
										maxLength={Number(process.env.LISTING_ADDRESS_CITY_MAX ?? 64)}
										onChange={(e) => {
											// Change input
											setAddressCity(e.target.value)

											// Validated input
											const result = ListingFormValidator.validateAddressCity(e.target.value)
											if (!result.success) {
												const error = result.error.errors[0].message
												// Only change into a new error message
												if (addressCityInputError !== error) {
													setAddressCityInputError(error);
												}
												// Only remove previous error message
											} else if (result.success && addressCityInputError !== undefined) {
												setAddressCityInputError(undefined)
											}
										}}
										value={addressCity}
										errorMessage={addressCityInputError}
										dataCy="listing-create-form-city-input"
										dataCyLabel="listing-create-form-city-input-label"
										dataCyOptional="listing-create-form-city-input-optional"
										dataCyError="listing-create-form-city-input-error" />
									{/* State */}
									<FormInput
										label='State'
										name='state'
										type="text"
										minLength={Number(process.env.LISTING_ADDRESS_STATE_MIN ?? 1)}
										maxLength={Number(process.env.LISTING_ADDRESS_STATE_MAX ?? 64)}
										onChange={(e) => {
											// Change input state variable
											setAddressState(e.target.value);

											// Validated input
											const result = ListingFormValidator.validateAddressState(e.target.value)
											if (!result.success) {
												const error = result.error.errors[0].message
												// Only change into a new error message
												if (addressStateInputError !== error) {
													setAddressStateInputError(error);
												}
												// Only remove previous error message
											} else if (result.success && addressStateInputError !== undefined) {
												setAddressStateInputError(undefined)
											}
										}}
										value={addressState}
										errorMessage={addressStateInputError}
										dataCy="listing-create-form-state-input"
										dataCyLabel="listing-create-form-state-input-label"
										dataCyOptional="listing-create-form-state-input-optional"
										dataCyError="listing-create-form-state-input-error" />
								</div>
								<div className="grid grid-cols-2 gap-x-4">
									{/* ZIP Code */}
									<FormInput
										label='ZIP Code'
										name='zipcode'
										type="text"
										optional={true}
										minLength={Number(process.env.LISTING_ADDRESS_ZIP_MIN ?? 1)}
										maxLength={Number(process.env.LISTING_ADDRESS_ZIP_MAX ?? 64)}
										onChange={(e) => {
											const value = e.target.value;

											addressZipcodeValueRef.current = value;

											const result = ListingFormValidator.validateAddressZip(value);
											if (!result.success) {
												const error = result.error.errors[0].message
												// Only change into a new error message
												if (addressZipcodeInputError !== error) {
													setAddressZipcodeInputError(error);
												}
												// Only remove previous error message
											} else if (result.success && addressZipcodeInputError !== undefined) {
												setAddressZipcodeInputError(undefined)
											}
										}}
										errorMessage={addressZipcodeInputError}
										dataCy="listing-create-form-zipcode-input"
										dataCyLabel="listing-create-form-zipcode-input-label"
										dataCyOptional="listing-create-form-zipcode-input-optional"
										dataCyError="listing-create-form-zipcode-input-error" />
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-end gap-x-8">
						<FormInputReset
							dataCy="listing-create-reset-btn" />
						<ButtonText
							text="Preview"
							dataCy="listing-create-preview-btn"
							onClick={async () => {
								// Only authenticated users can preview
								const isAuthenticated = await isUserAuthenticated();

								if (!isAuthenticated) {
									return;
								}

								// NOTE: Prepare form data
								const previewListingData: ListingPreviewForm = {
									price: priceValueRef.current,
									deposit: depositValueRef.current,
									description: descriptionValueRef.current,
									beds: bedsValueRef.current,
									baths: bathsValueRef.current,
									area: areaValueRef.current,
									availableDate: availableDateValueRef.current,
									addressLongitude: mapLonLat?.longitude,
									addressLatitude: mapLonLat?.latitude,
									addressLine: addressLine,
									addressCity: addressCity,
									addressState: addressState,
									addressZipcode: addressZipcodeValueRef.current,
								}

								const validator = new ListingPreviewFormValidator(previewListingData);
								const result = validator.validate()

								// FUTURE: (START) The following validation logic might be reusable for create also, please anticipate
								if (result.success) {
									// Get user details
									const user = await fetchUser();
									if (user?.email) {
										userEmailRef.current = user.email;
									}

									// Fetch random images (if there are no images)
									if (imageUrlsRef.current.length === 0) {
										imageUrlsRef.current = await fetchRandomImages();
									}

									setShowModalState(true);
									return;
								}

								const errors = result.error.errors;
								for (const error of errors) {
									const path = error.path.at(0)?.toString();
									const message = error.message;

									switch (path) {
										case 'price': setPriceInputError(message); break;
										case 'deposit': setDepositInputError(message); break;
										case 'description': setDescriptionInputError(message); break;
										case 'beds': setBedsInputError(message); break;
										case 'baths': setBathsInputError(message); break;
										case 'area': setAreaInputError(message); break;
										case 'availableDate': setAvailableDateInputError(message); break;
										case 'addressLongitude' || 'addressLatitude': setAddressInputError(message); break;
									}

									// Address input fields are only visible if the user already selected a location in the slippy map
									if (mapLonLat) {
										switch (path) {
											case 'addressLine': setAddressLineInputError(message); break;
											case 'addressCity': setAddressCityInputError(message); break;
											case 'addressState': setAddressStateInputError(message); break;
											case 'addressZipcode': setAddressZipcodeInputError(message); break;
										}
									}
								}
								// FUTURE: (END) The following validation logic might be reusable for create also, please anticipate

								// Remove map input error
								// NOTE: We do this because we do not want the entire slippy map to re-render for every time we validate the form.
								// Other input fields are "revalidated" for every time their inputs are changed due to the `onChange` function. 
								// However for the slippy map text error, the`onClick` function is inside a side effect function.
								const errorPaths = errors.map((e) => e.path.toString());
								const noMapInputError = !(errorPaths.includes('addressLongitude') || errorPaths.includes('addressLatitude'));
								if (noMapInputError) {
									setAddressInputError(undefined);
								}
							}} />
						<ButtonFilled
							text="Create"
							dataCy="listing-create-submit-btn"
							type="submit"
						/>
					</div>
				</PageLayout>
			</form>
		</div>
	)
}

