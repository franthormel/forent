"use client"

import ButtonIconTextOutlined from "@/components/buttons/icon-text-outlined";
import ButtonTextIconOutlined from "@/components/buttons/text-icon-outlined";
import Search from "@/components/search";
import { Feature, View } from "ol";
import { Geometry } from "ol/geom";
import Point from "ol/geom/Point";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import Map from 'ol/Map';
import { fromLonLat } from "ol/proj";
import OSM from "ol/source/OSM";
import VectorSource from "ol/source/Vector";
import { Fill, Stroke, Style, Text } from "ol/style";
import CircleStyle from "ol/style/Circle";
import { useEffect } from "react";


const ICON_DEFAULT_STYLE = new Style({
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
const TEXT_DEFAULT_STYLE = new Style({
    text: new Text({
        backgroundStroke: new Stroke({
            color: '#fbbf24',
            width: 6,
            lineCap: 'round',
            lineJoin: 'round',
        }),
        backgroundFill: new Fill({
            color: '#fbbf24',
        }),
        fill: new Fill({
            color: '#1F2937'
        }),
        font: '1rem sans-serif',
        padding: [2, 2, 2, 2],
    }),
});
const ICON_SELECTED_STYLE = new Style({
    image: new CircleStyle({
        radius: 16,
        fill: new Fill({
            color: '#FBBF2430',
        }),
    }),
});
const TEXT_SELECTED_STYLE = new Style({
    text: new Text({
        backgroundStroke: new Stroke({
            color: '#fbbf24',
            width: 6,
            lineCap: 'round',
            lineJoin: 'round',
        }),
        backgroundFill: new Fill({
            color: '#fbbf24',
        }),
        fill: new Fill({
            color: '#1F2937'
        }),
        font: 'bold 1rem sans-serif',
        padding: [2, 2, 2, 2],
    }),
});

export default function Home() {
    // Map icon feature
    const iconFeature = new Feature(new Point(fromLonLat([0, 0])))
    iconFeature.setStyle(ICON_DEFAULT_STYLE)

    const iconSelectedFeature = new Feature(new Point(fromLonLat([20, 0])))
    iconSelectedFeature.setStyle([ICON_SELECTED_STYLE, ICON_DEFAULT_STYLE])

    // Map text feature
    const textFeature = new Feature(new Point(fromLonLat([0, 20])))
    const textDefaultStyle = TEXT_DEFAULT_STYLE;
    textDefaultStyle.getText()?.setText("₱20K");
    textFeature.setStyle(TEXT_DEFAULT_STYLE)

    const textSelectedFeature = new Feature(new Point(fromLonLat([20, 20])))
    const textSelectedStyle = TEXT_SELECTED_STYLE;
    textSelectedStyle.getText()?.setText("₱20K");
    textSelectedFeature.setStyle(textSelectedStyle);

    const features = [
        iconFeature, iconSelectedFeature,
        textFeature, textSelectedFeature
    ]

    useEffect(() => {
        let selected: Feature<Geometry> | undefined;

        const map = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
                new VectorLayer({
                    source: new VectorSource({
                        features: features,
                    }),
                })
            ],
            view: new View({
                center: [0, 0],
                zoom: 2,
            }),
        });

        // TODO: improve use select interaction; demo on click (for show listing card) https://openlayers.org/en/latest/examples/select-features.html
        // demo on hover (for change map pos style) https://openlayers.org/en/latest/examples/select-hover-features.html
        map.on('pointermove', (e) => {
            if (selected) {
                // revert back to original style if not same hovered
                // TODO: if zoom level (zoom-in) is text feature, use textDefaultStyle
                // TODO: if zoom level (zoom-out) is icon feature, use iconDefaultStyle
                if (selected === iconFeature) {
                    selected.setStyle(ICON_DEFAULT_STYLE)
                } else if (selected === textFeature) {
                    selected.setStyle(TEXT_DEFAULT_STYLE)
                }
                selected = undefined
                map.getViewport().style.cursor = 'auto'
            }

            map.forEachFeatureAtPixel(e.pixel, (f) => {
                // TODO: animate change of style https://openlayers.org/en/latest/examples/feature-animation.html
                // Icon hover
                if (iconFeature === f) {
                    selected = f;
                    selected.setStyle([ICON_SELECTED_STYLE, ICON_DEFAULT_STYLE])
                    map.getViewport().style.cursor = 'pointer'
                    return;
                }

                // Text hover
                if (textFeature === f) {
                    selected = f;
                    selected.setStyle(textSelectedStyle);
                    map.getViewport().style.cursor = 'pointer'
                    return;
                }
            })
        })

        return () => map.dispose()
    }, []);
    // TODO: Think about the problem when icon or text features are dynamically added/removed. Need to think about the side effect dependencies

    return (
        <div className="flex flex-col gap-y-8">
            {/* Search and price filters */}
            <div className="flex w-full gap-x-4 px-8 md:px-10 lg:max-w-5xl">
                {/* Search filter */}
                <div className="w-full">
                    <Search />
                </div>
                {/* Price filter */}
                <div className="hidden md:flex">
                    <ButtonTextIconOutlined props={{
                        text: "Price",
                        dataCy: "button-filter-price"
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            height="24"
                            width="24">
                            <path d="M480-360 280-560h400L480-360Z" />
                        </svg>
                    </ButtonTextIconOutlined>
                </div>
                {/* Beds/Baths filter */}
                <div className="hidden lg:flex">
                    <ButtonTextIconOutlined props={{
                        text: "Beds/Baths",
                        dataCy: "button-filter-beds-baths"
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            height="24"
                            width="24">
                            <path d="M480-360 280-560h400L480-360Z" />
                        </svg>
                    </ButtonTextIconOutlined>
                </div>
                {/* Area filter */}
                <div className="hidden lg:flex">
                    <ButtonTextIconOutlined props={{
                        text: "Area",
                        dataCy: "button-filter-area"
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            height="24"
                            width="24">
                            <path d="M480-360 280-560h400L480-360Z" />
                        </svg>
                    </ButtonTextIconOutlined>
                </div>
                {/* Filter menu */}
                <div className="flex lg:hidden">
                    <ButtonIconTextOutlined props={{
                        text: "Filters",
                        dataCy: "button-filter-menu"
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            width="24"
                            viewBox="0 -960 960 960">
                            <path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z" />
                        </svg>
                    </ButtonIconTextOutlined>
                </div>
            </div>
            <div className="flex h-[36rem]">
                {/* TODO: Map of listings */}
                <div className="basis-1/2 bg-red-200">
                    <div id="map" className="w-full h-full" tabIndex={0} />
                </div>
                {/* TODO: List of listings */}
                <div className="basis-1/2 bg-yellow-100">
                    List
                </div>
            </div>
        </div>
    );
}
