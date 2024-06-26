"use client"
import PageLayout from "@/components/_app/page-layout";

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

export default function Home() {
    // Default styles
    const iconDefaultStyle = new Style({
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
    const textDefaultStyle = new Style({
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
            text: "₱20K",
            padding: [2, 2, 2, 2],
        }),
    });

    // Selected styles
    const iconBackgroundOverlayStyle = new Style({
        image: new CircleStyle({
            radius: 16,
            fill: new Fill({
                color: '#FBBF2430',
            }),
        }),
    });
    const textSelectedStyle = new Style({
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
            text: "₱20K",
            padding: [2, 2, 2, 2],
        }),
    });

    // Map icon feature
    const iconFeature = new Feature(new Point(fromLonLat([0, 0])))
    iconFeature.setStyle(iconDefaultStyle)

    const iconSelectedFeature = new Feature(new Point(fromLonLat([20, 0])))
    iconSelectedFeature.setStyle([iconBackgroundOverlayStyle, iconDefaultStyle])

    // Map text feature
    const textFeature = new Feature(new Point(fromLonLat([0, 20])))
    textFeature.setStyle(textDefaultStyle)

    const textSelectedFeature = new Feature(new Point(fromLonLat([20, 20])))
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
                // FUTURE: if zoom level (zoom-in) is text feature, use textDefaultStyle
                // FUTURE: if zoom level (zoom-out) is icon feature, use iconDefaultStyle
                if (selected === iconFeature) {
                    selected.setStyle(iconDefaultStyle)
                } else if (selected === textFeature) {
                    selected.setStyle(textDefaultStyle)
                }
                selected = undefined
                map.getViewport().style.cursor = 'auto'
            }

            map.forEachFeatureAtPixel(e.pixel, (f) => {
                // TODO: animate change of style https://openlayers.org/en/latest/examples/feature-animation.html
                // Icon hover
                if (iconFeature === f) {
                    selected = f;
                    selected.setStyle([iconBackgroundOverlayStyle, iconDefaultStyle])
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

    return (
        <PageLayout>
            <div id="map" className="w-full h-96 transition-all" />
        </PageLayout>
    );
}
