"use client"
import PageLayout from "@/components/_app/page-layout";
// TODO: Check if this is really needed

import { Feature, MapBrowserEvent, View } from "ol";
import Map from 'ol/Map';
import { Geometry } from "ol/geom";
import Point from "ol/geom/Point";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import { fromLonLat } from "ol/proj";
import OSM from "ol/source/OSM";
import VectorSource from "ol/source/Vector";
import { Fill, Stroke, Style, Text } from "ol/style";
import CircleStyle from "ol/style/Circle";
import Select from 'ol/interaction/Select';
import { useEffect } from "react";
import { click, singleClick } from "ol/events/condition";
import MapBrowserEventType from "ol/MapBrowserEventType";

export default function Home() {
    const mapIconStyle = new Style({
        image: new CircleStyle({
            radius: 7,
            fill: new Fill({
                color: 'rgba(123, 23, 128)',

            }),
            stroke: new Stroke({
                color: 'rgba(256, 256, 256, 0.9)',
                width: 2,
            }),
        }),
    })
    const mapPositionFeature = new Feature()
    mapPositionFeature.setStyle(mapIconStyle)
    const point = new Point(fromLonLat([0, 0]));
    mapPositionFeature.setGeometry(point)

    const textPositionFeature = new Feature({
        geometry: new Point(fromLonLat([0, 20])),
    })
    textPositionFeature.setStyle(new Style({
        text: new Text({
            backgroundStroke: new Stroke({
                color: 'pink',
                width: 4,
                lineCap: 'round',
                lineJoin: 'round',
            }),
            backgroundFill: new Fill({
                color: 'pink',
            }),
            fill: new Fill({
                color: 'white'
            }),
            font: 'bold 1.5rem sans-serif',
            text: "20K",
            padding: [2, 2, 2, 2],
        }),
    }))

    const selectClickInteraction = new Select({
        condition: (e) => {
            return e.type === MapBrowserEventType.SINGLECLICK
        },
    })

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
                        features: [mapPositionFeature, textPositionFeature],
                    }),
                })
            ],
            view: new View({
                center: [0, 0],
                zoom: 2,
            }),
        });


        // TODO: demo on click (for show listing card) https://openlayers.org/en/latest/examples/select-features.html
        // demo on hover (for change map pos style) https://openlayers.org/en/latest/examples/select-hover-features.html
        map.on('pointermove', (e) => {
            if (selected) {
                // revert back to original style if not same hovered
                selected.setStyle(mapIconStyle)
                selected = undefined
                map.getViewport().style.cursor = 'auto'
            }

            // todo: improve use select interaction
            map.forEachFeatureAtPixel(e.pixel, (f) => {
                // highlight if same feature
                if (mapPositionFeature === f) {
                    selected = f;
                    // todo: animate change of style https://openlayers.org/en/latest/examples/feature-animation.html
                    selected.setStyle(new Style({
                        image: new CircleStyle({
                            radius: 14,
                            fill: new Fill({
                                color: 'rgba(23, 23, 128)',

                            }),
                            stroke: new Stroke({
                                color: 'rgba(256, 256, 256, 0.9)',
                                width: 2,
                            }),
                        }),
                    }))
                    map.getViewport().style.cursor = 'pointer'
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
