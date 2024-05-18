"use client"

import PageLayout from "@/app/_component/page-layout";
import ButtonFilled from "@/components/buttons/filled";
import ButtonOutlined from "@/components/buttons/outlined";
import ButtonText from "@/components/buttons/text";
import FormInput from "@/components/form-input";
import FormInputReset from "@/components/form-input/reset";
import FormInputTextArea from "@/components/form-input/textarea";
import SectionHeaderIcon from "@/components/section/header-icon";
import TextError from "@/components/text/error";
import { DateUtils } from "@/lib/commons/date_utils";
import { NumberUtils } from "@/lib/commons/number_utils";
import { LonLat } from "@/lib/types/geography";
import { CreateListingFormValidator } from "@/lib/validation/listing";
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
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import ListingCreateError from "./_components/error";
import ListingCreateHeader from "./_components/header";
import { createListingNew, fetchAddresss } from "./action";

export default function ListingCreatePage() {
	// Form submission (Server)
	const [formState, formAction] = useFormState(createListingNew, {
		errors: new globalThis.Map()
	});
	const hasServerError = formState.errors.size > 0

	const [addressLine, setAddressLine] = useState<string>('')
	const [addressCity, setAddressCity] = useState<string>('')
	const [addressState, setAddressState] = useState<string>('')

	// Validation errors (Client)
	const [priceError, setPriceError] = useState<string | undefined>(undefined);
	const [descriptionError, setDescriptionError] = useState<string | undefined>(undefined);
	const [depositError, setDepositError] = useState<string | undefined>(undefined);
	const [bedsError, setBedsError] = useState<string | undefined>(undefined);
	const [bathsError, setBathsError] = useState<string | undefined>(undefined);
	const [areaError, setAreaError] = useState<string | undefined>(undefined);
	const [availableDateError, setAvailableDateError] = useState<string | undefined>(undefined);
	const [addressLineError, setAddressLineError] = useState<string | undefined>(undefined);
	const [addressCityError, setAddressCityError] = useState<string | undefined>(undefined);
	const [addressStateError, setAddressStateError] = useState<string | undefined>(undefined);
	const [addressZipcodeError, setAddressZipcodeError] = useState<string | undefined>(undefined);

	const todayDate = new Date();
	const today = DateUtils.formatDate(todayDate)
	const oneYearFromTodayDate = DateUtils.offsetYear(todayDate, 1);
	const oneYearFromToday = DateUtils.formatDate(oneYearFromTodayDate)

	// Map related
	const MAP_ZOOM_LVL = 2;
	const MAP_PRELOAD = 4
	const MAP_ID = "listing-create-form-address-map";

	const [mapLonLat, setMapLonLat] = useState<LonLat | undefined>(undefined)
	const mapZoomLevel = useRef<number>(MAP_ZOOM_LVL)

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
		zoom: mapZoomLevel.current,
	})

	// Only switch views when position has changed
	if (mapLonLat) {
		const coords = fromLonLat([mapLonLat.longitude, mapLonLat.latitude]);
		const point = new Point(coords);
		mapPositionFeature.setGeometry(point)
		mapView.setCenter(coords);
	}

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
			mapPositionFeature.setGeometry(new Point(e.coordinate))

			// Retain map zoom level between renders
			const currentMapZoom = map.getView().getZoom()
			if (currentMapZoom) {
				mapZoomLevel.current = currentMapZoom;
			}

			// Change hidden input field values
			const newLonLat = toLonLat(e.coordinate)
			setMapLonLat({
				longitude: newLonLat[0],
				latitude: newLonLat[1]
			})
		})

		return () => map.dispose()
	})

	return (
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
									const result = CreateListingFormValidator.validatePrice(value);
									if (!result.success) {
										const error = result.error.errors[0].message
										// Only change into a new error message
										if (priceError !== error) {
											setPriceError(error);
										}
										// Only remove previous error message
									} else if (result.success && priceError !== undefined) {
										setPriceError(undefined)
									}
								}}
								errorMessage={priceError}
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
									const result = CreateListingFormValidator.validateDeposit(value);
									if (!result.success) {
										const error = result.error.errors[0].message
										// Only change into a new error message
										if (depositError !== error) {
											setDepositError(error);
										}
										// Only remove previous error message
									} else if (result.success && depositError !== undefined) {
										setDepositError(undefined)
									}
								}}
								errorMessage={depositError}
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
									const result = CreateListingFormValidator.validateDescription(e.target.value);
									if (!result.success) {
										const error = result.error.errors[0].message
										// Only change into a new error message
										if (descriptionError !== error) {
											setDescriptionError(error);
										}
										// Only remove previous error message
									} else if (result.success && descriptionError !== undefined) {
										setDescriptionError(undefined)
									}
								}}
								errorMessage={descriptionError}
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
									const result = CreateListingFormValidator.validateBeds(value);
									if (!result.success) {
										const error = result.error.errors[0].message
										// Only change into a new error message
										if (bedsError !== error) {
											setBedsError(error);
										}
										// Only remove previous error message
									} else if (result.success && bedsError !== undefined) {
										setBedsError(undefined)
									}
								}}
								errorMessage={bedsError}
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
									const result = CreateListingFormValidator.validateBaths(value);
									if (!result.success) {
										const error = result.error.errors[0].message
										// Only change into a new error message
										if (bathsError !== error) {
											setBathsError(error);
										}
										// Only remove previous error message
									} else if (result.success && bathsError !== undefined) {
										setBathsError(undefined)
									}
								}}
								errorMessage={bathsError}
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
									const result = CreateListingFormValidator.validateArea(value);
									if (!result.success) {
										const error = result.error.errors[0].message
										// Only change into a new error message
										if (areaError !== error) {
											setAreaError(error);
										}
										// Only remove previous error message
									} else if (result.success && areaError !== undefined) {
										setAreaError(undefined)
									}
								}}
								errorMessage={areaError}
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
										const inputDate = e.target.value;
										const result = CreateListingFormValidator.validateAvailableDate(inputDate, todayDate, oneYearFromTodayDate);
										if (!result.success) {
											const error = result.error.errors[0].message
											// Only change into a new error message
											if (availableDateError !== error) {
												setAvailableDateError(error);
											}
											// Only remove previous error message
										} else if (result.success && availableDateError !== undefined) {
											setAvailableDateError(undefined)
										}
									}}
									errorMessage={availableDateError}
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
							<TextError dataCy="listing-create-form-address-map-error" />
							<div className="w-fit">
								{/* TODO: Show loading state while fetchinga address response */}
								<ButtonOutlined
									text="Get Pin Address"
									size="small"
									dataCy="listing-create-form-address-button"
									onClick={async () => {
										// Only if there are coordinates present in the slippy map
										if (!mapLonLat) {
											return;
										}

										const response = await fetchAddresss(mapLonLat.latitude, mapLonLat.longitude);
										setAddressLine(response.addressLine);
										setAddressCity(response.city);
										setAddressState(response.state)
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
									const result = CreateListingFormValidator.validateAddressLine(e.target.value);
									if (!result.success) {
										const error = result.error.errors[0].message
										// Only change into a new error message
										if (addressLineError !== error) {
											setAddressLineError(error);
										}
										// Only remove previous error message
									} else if (result.success && addressLineError !== undefined) {
										setAddressLineError(undefined)
									}
								}}
								value={addressLine}
								errorMessage={addressLineError}
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
										const result = CreateListingFormValidator.validateAddressCity(e.target.value)
										if (!result.success) {
											const error = result.error.errors[0].message
											// Only change into a new error message
											if (addressCityError !== error) {
												setAddressCityError(error);
											}
											// Only remove previous error message
										} else if (result.success && addressCityError !== undefined) {
											setAddressCityError(undefined)
										}
									}}
									value={addressCity}
									errorMessage={addressCityError}
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
										const result = CreateListingFormValidator.validateAddressState(e.target.value)
										if (!result.success) {
											const error = result.error.errors[0].message
											// Only change into a new error message
											if (addressStateError !== error) {
												setAddressStateError(error);
											}
											// Only remove previous error message
										} else if (result.success && addressStateError !== undefined) {
											setAddressStateError(undefined)
										}
									}}
									value={addressState}
									errorMessage={addressStateError}
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
										const result = CreateListingFormValidator.validateAddressZip(e.target.value)
										if (!result.success) {
											const error = result.error.errors[0].message
											// Only change into a new error message
											if (addressZipcodeError !== error) {
												setAddressZipcodeError(error);
											}
											// Only remove previous error message
										} else if (result.success && addressZipcodeError !== undefined) {
											setAddressZipcodeError(undefined)
										}
									}}
									errorMessage={addressZipcodeError}
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
						dataCy="listing-create-preview-btn" />
					<ButtonFilled
						text="Create"
						dataCy="listing-create-submit-btn"
						type="submit"
					/>
				</div>
			</PageLayout>
		</form>
	)
}

