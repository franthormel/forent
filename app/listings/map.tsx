"use client"

import { NumberUtils } from "@/lib/commons/number_utils"
import { CURRENCY_FORMATTER } from "@/lib/formatter/currency"
import { Feature, View } from "ol"
import Point from "ol/geom/Point"
import TileLayer from "ol/layer/Tile"
import VectorLayer from "ol/layer/Vector"
import Map from 'ol/Map'
import { fromLonLat } from "ol/proj"
import OSM from "ol/source/OSM"
import VectorSource from "ol/source/Vector"
import { Fill, Stroke, Style, Text } from "ol/style"
import CircleStyle from "ol/style/Circle"
import { useEffect } from "react"
import { Listing } from "./types"

const ICON_STYLE = new Style({
    image: new CircleStyle({
        radius: 6,
        fill: new Fill({
            color: '#fbbf24',
        }),
        stroke: new Stroke({
            color: '#fef3c7',
            width: 2,
        }),
    }),
})

const TEXT_TEMPLATE_STYLE = new Text({
    backgroundStroke: new Stroke({
        color: '#fbbf24',
        width: 2,
        lineCap: 'round',
        lineJoin: 'round',
    }),
    backgroundFill: new Fill({
        color: '#fbbf24',
    }),
    fill: new Fill({
        color: '#1F2937'
    }),
    padding: [2, 2, 2, 2],
})

function createDefaultTextStyle(price: number): Style {
    // Regular font
    // Different text
    const text = TEXT_TEMPLATE_STYLE.clone()
    text.setFont('0.8rem sans-serif')
    text.setText(CURRENCY_FORMATTER.format(price));
    return new Style({
        text: text
    })
}

function creatActiveTextStyle(price: number): Style {
    // Regular font
    // Different text
    const text = TEXT_TEMPLATE_STYLE.clone()
    text.setFont('bold 0.8rem sans-serif')
    text.setText(CURRENCY_FORMATTER.format(price));
    return new Style({
        text: text
    })
}

export interface ListingsMapInterface {
    listings: Listing[]
}

/**
 * The feature's IDs (same for both icon & text) are the indices used when they were constructed.
 */
interface MapFeatures {
    iconFeatures: Feature<Point>[]
    textFeatures: Feature<Point>[]
    activeFeatures: Feature<Point>[]
}

function createMapFeatures(listings: Listing[]): MapFeatures {
    const iconFeatures: Feature<Point>[] = []
    const textFeatures: Feature<Point>[] = []
    const activeFeatures: Feature<Point>[] = []

    for (let i = 0; i < listings.length; i++) {
        const listing = listings.at(i)!
        const point = new Point(fromLonLat([
            listing.address.longitude,
            listing.address.latitude,
        ]))

        // Icon feature
        const iconFeature = new Feature(point)
        iconFeature.setStyle(ICON_STYLE)
        iconFeature.setId(i)
        // Text feature
        const textFeature = new Feature(point)
        textFeature.setStyle(createDefaultTextStyle(listing.price.value))
        textFeature.setId(i)
        // Active features
        const activeFeature = new Feature(point)
        activeFeature.setStyle(creatActiveTextStyle(listing.price.value))
        activeFeature.setId(i)

        iconFeatures.push(iconFeature)
        textFeatures.push(textFeature)
        activeFeatures.push(activeFeature)
    }

    return {
        iconFeatures: iconFeatures,
        textFeatures: textFeatures,
        activeFeatures: activeFeatures,
    }
}

export function ListingsMap(props: ListingsMapInterface) {
    const mapFeatures = createMapFeatures(props.listings);

    useEffect(() => {
        // This ID is based upon the indices of the listings
        let activeIndex: number = -1;

        const map = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
                new VectorLayer({
                    source: new VectorSource({
                        // TODO: Use icons features if zoom level is big
                        // TODO: Use text features if zoom level is small
                        features: mapFeatures.iconFeatures,
                    }),
                })
            ],
            view: new View({
                center: [0, 0],
                zoom: 2,
            }),
        })

        // TODO: improve use select interaction demo on click (for show listing card) https://openlayers.org/en/latest/examples/select-features.html
        // demo on hover (for change map pos style) https://openlayers.org/en/latest/examples/select-hover-features.html
        map.on('pointermove', (e) => {
            // Hover (revert style)
            if (activeIndex >= 0) {
                const activeFeature = mapFeatures.iconFeatures.at(activeIndex);
                // Revert style
                // TODO: Use icons features if zoom level is big
                // TODO: Use text features if zoom level is small
                activeFeature?.setStyle(ICON_STYLE)
                // Remove index
                activeIndex = -1;
                // Reset cursor
                map.getViewport().style.cursor = 'auto'
            }

            // Hover (change style)
            map.forEachFeatureAtPixel(e.pixel, (f) => {
                const hoveredFeature = f as Feature;
                const hoveredIndex = NumberUtils.toNumber(hoveredFeature.getId(), -1)

                // TODO: animate change of style https://openlayers.org/en/latest/examples/feature-animation.html
                // TODO: Display popup/banner of listing card
                // 1. https://openlayers.org/en/latest/examples/overlay.html (HTML only)
                // 2. https://openlayers.org/en/latest/examples/popup.html (Bootstrap)
                if (hoveredIndex !== activeIndex) {
                    activeIndex = hoveredIndex
                    const textFeature = mapFeatures.activeFeatures.at(activeIndex);
                    // Change style
                    hoveredFeature.setStyle(textFeature?.getStyle())
                    // Change pointer
                    map.getViewport().style.cursor = 'pointer'
                }
            })
        })

        return () => map.dispose()
    }, [])
    // TODO: Think about the problem when icon or text features are dynamically added/removed. Need to think about the side effect dependencies

    return (
        <div id="map" className="basis-1/2 w-full h-full" tabIndex={0} />
    )
}