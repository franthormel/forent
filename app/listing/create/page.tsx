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
import { LonLat } from "@/lib/types/geography";
import pinIcon from "@/public/icons/home_pin.svg";
import { Feature, Map, View } from "ol";
import Geolocation from 'ol/Geolocation';
import { defaults } from "ol/control";
import { Point } from "ol/geom";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import { fromLonLat, toLonLat } from "ol/proj";
import OSM from "ol/source/OSM";
import VectorSource from "ol/source/Vector";
import { Icon, Style } from "ol/style";
import { useEffect, useRef, useState } from "react";
import ListingCreateErrorMessages from "./_components/error-messages";
import ListingCreateHeader from "./_components/header";

const MAP_ZOOM_LVL = 2;
const MAP_PRELOAD = 4

// Use home icon
const mapIconStyle = new Style({
	image: new Icon({
		src: pinIcon.src,
	}),
})
const mapPositionFeature = new Feature()
mapPositionFeature.setStyle(mapIconStyle)

export default function ListingCreatePage() {
	// TODO: Use geo location api https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
	// Map related
	const [mapLonLat, setMapLonLat] = useState<LonLat>({ longitude: 0, latitude: 0 })
	const mapZoomLevel = useRef<number>(MAP_ZOOM_LVL)
	const mapId = "listing-create-form-address-map";

	useEffect(() => {
		const mapView = new View({
			center: fromLonLat([mapLonLat.longitude!, mapLonLat.latitude!]),
			zoom: mapZoomLevel.current,
		})
		const map = new Map({
			target: mapId,
			layers: [
				new TileLayer({
					preload: MAP_PRELOAD,
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
		<form>
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
						<div className="grid auto-rows-auto gap-y-2">
							<div className="h-96">
								<div id={mapId}
									className="h-full"
									data-cy="listing-create-form-address-map"
									tabIndex={0} />
							</div>
							<TextError
								value="error"
								dataCy="listing-create-form-address-map-error" />
							<div className="w-fit">
								{/* TODO: Get pin address */}
								<ButtonOutlined
									text="Get pin address"
									size="small"
									dataCy="listing-create-form-address-button"
									onClick={() => console.log("TODO: Get address")} />
							</div>
							<input type="hidden"
								name="addressLongitude"
								value={mapLonLat.longitude}
								data-cy="listing-create-form-address-lon" />
							<input type="hidden"
								name="addressLatitude"
								value={mapLonLat.latitude}
								data-cy="listing-create-form-address-lat" />
						</div>
						{/* TODO: Hidden until user clicks Get Address button */}
						<div className="space-y-4">
							<FormInput
								label='Address Line'
								name='addressLine'
								type="text"
								minLength={1}
								maxLength={128}
								onChange={(e) => { console.log(e.target.nodeValue) }}
								dataCy="listing-create-form-address-line-input"
								dataCyLabel="listing-create-form-address-line-input-label"
								dataCyOptional="listing-create-form-address-line-input-optional"
								dataCyError="listing-create-form-address-line-input-error" />
							<div className="grid grid-cols-2 gap-x-4">
								<FormInput
									label='City'
									name='city'
									type="text"
									minLength={1}
									maxLength={64}
									dataCy="listing-create-form-city-input"
									dataCyLabel="listing-create-form-city-input-label"
									dataCyOptional="listing-create-form-city-input-optional"
									dataCyError="listing-create-form-city-input-error" />
								<FormInput
									label='State'
									name='state'
									type="text"
									minLength={1}
									maxLength={64}
									dataCy="listing-create-form-state-input"
									dataCyLabel="listing-create-form-state-input-label"
									dataCyOptional="listing-create-form-state-input-optional"
									dataCyError="listing-create-form-state-input-error" />
							</div>
							<div className="grid grid-cols-2">
								<FormInput
									label='Zip Code'
									name='zipcode'
									type="text"
									minLength={1}
									maxLength={64}
									dataCy="listing-create-form-zipcode-input"
									dataCyLabel="listing-create-form-zipcode-input-label"
									dataCyOptional="listing-create-form-zipcode-input-optional"
									dataCyError="listing-create-form-zipcode-input-error" />
							</div>
						</div>
					</div>
				</div>
				<div className="flex gap-x-8 justify-end">
					<FormInputReset
						dataCy="listing-create-reset-btn" />
					<ButtonText
						text="Preview"
						dataCy="listing-create-preview-btn" />
					<ButtonFilled
						text="Create Listing"
						dataCy="listing-create-submit-btn"
					/>
				</div>
			</PageLayout>
		</form>
	)
}
