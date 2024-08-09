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
import { StyleLike } from "ol/style/Style"
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
        const map = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
                new VectorLayer({
                    source: new VectorSource({
                        features: mapFeatures.iconFeatures,
                    }),
                })
            ],
            view: new View({
                center: [0, 0],
                zoom: 2,
            }),
        })

        // let featureDisplayState: 'icon' | 'text' = 'icon';
        // const MAP_ZOOM_TEXT = 15;
        // map.on('moveend', (e) => {
        //     const mapZoom = map.getView().getZoom() || -1;
        //     if (mapZoom >= MAP_ZOOM_TEXT && featureDisplayState !== "text") {
        //         map.setLayers([
        //             new TileLayer({
        //                 source: new OSM(),
        //             }),
        //             new VectorLayer({
        //                 source: new VectorSource({
        //                     features: mapFeatures.textFeatures,
        //                 }),
        //             })
        //         ])
        //         featureDisplayState = 'text';
        //     } else if (mapZoom < MAP_ZOOM_TEXT && featureDisplayState !== 'icon') {
        //         map.setLayers([
        //             new TileLayer({
        //                 source: new OSM(),
        //             }),
        //             new VectorLayer({
        //                 source: new VectorSource({
        //                     features: mapFeatures.iconFeatures,
        //                 }),
        //             })
        //         ])
        //         featureDisplayState = 'icon'
        //     }
        // })

        let activeIndex: number = -1;
        let previousStyle: StyleLike | undefined;
        map.on('pointermove', (e) => {
            // Hover (revert style)
            if (activeIndex >= 0) {
                // TODO: Use icons features if zoom level is big
                // TODO: Use text features if zoom level is small
                const activeFeature = mapFeatures.iconFeatures.at(activeIndex);
                // Revert style
                activeFeature?.setStyle(previousStyle)
                // Remove index
                activeIndex = -1;
                // Reset cursor
                map.getViewport().style.cursor = 'auto'
            }

            // Hover (change style)
            map.forEachFeatureAtPixel(e.pixel, (f) => {
                // This prevents the overlapping features issue
                const hoveredFeatures = map.getFeaturesAtPixel(e.pixel)
                const hoveredFeature = hoveredFeatures.at(hoveredFeatures.length - 1) as Feature;
                const hoveredIndex = NumberUtils.toNumber(hoveredFeature.getId(), -1)

                // TODO: Display popup/banner of listing card
                // 1. https://openlayers.org/en/latest/examples/overlay.html (HTML only)
                // 2. https://openlayers.org/en/latest/examples/popup.html (Bootstrap)
                // 3. https://openlayers.org/en/latest/examples/select-features.html
                if (hoveredIndex !== activeIndex) {
                    activeIndex = hoveredIndex
                    const activeFeature = mapFeatures.activeFeatures.at(activeIndex);
                    previousStyle = hoveredFeature.getStyle();
                    // Change style
                    hoveredFeature.setStyle(activeFeature?.getStyle())
                    // Change pointer
                    map.getViewport().style.cursor = 'pointer'
                }
            })
        })

        return () => map.dispose()
    }, [])

    return (
        <div id="map" className="basis-1/2 w-full h-full" tabIndex={0} />
    )
}