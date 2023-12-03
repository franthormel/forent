"use client"

import { LonLat } from '@/lib/types/geography';
import { Feature, Map, View } from 'ol';
import Geolocation from 'ol/Geolocation';
import { ZoomSlider, defaults } from 'ol/control';
import { Point } from 'ol/geom';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import { fromLonLat, toLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import { useEffect, useRef, useState } from "react";

// TODO: Add custom icon, optimize geolocation, and pan animation when map point is selected
// https://openlayers.org/en/latest/examples/animation.html
const mapZoomDefault = 2;

// Map (Features)
const positionFeature = new Feature();
positionFeature.setStyle(
    new Style({
        image: new CircleStyle({
            radius: 6,
            fill: new Fill({
                color: '#3399CC',
            }),
            stroke: new Stroke({
                color: '#fff',
                width: 2,
            }),
        }),
    })
);
// Map (Layers)
const mapLayers = [
    new TileLayer({
        source: new OSM()
    }),
    new VectorLayer({
        source: new VectorSource({
            features: [positionFeature],
        }),
    })
];

export default function MapForm() {
    const zoom = useRef<number>(mapZoomDefault);
    const [lonLat, setLonLat] = useState<LonLat>({ longitude: 0, latitude: 0 });

    useEffect(() => {
        // Map (View)
        const mapView = new View({
            center: fromLonLat([lonLat.longitude!, lonLat.latitude!]),
            zoom: zoom.current,
        });
        // Map (Controls)
        const mapControls = defaults({ attributionOptions: { collapsible: true } });
        const mapControlZoomSlider = new ZoomSlider();
        // Map
        const map = new Map({
            target: "map",
            layers: mapLayers,
            controls: mapControls,
            view: mapView
        });
        map.addControl(mapControlZoomSlider);
        map.on("singleclick", (e) => {
            positionFeature.setGeometry(new Point(e.coordinate));

            // Retain map zoom level between re-renders
            zoom.current = map.getView().getZoom() ?? mapZoomDefault

            // Change input field values
            const lonLat = toLonLat(e.coordinate);
            setLonLat({
                ...lonLat,
                longitude: lonLat[0],
                latitude: lonLat[1]
            })
        });

        // Geolocation
        const geolocation = new Geolocation({
            trackingOptions: {
                enableHighAccuracy: true
            },
            // tracking: true,
            projection: mapView.getProjection(),
        });
        geolocation.on('change:position', function () {
            const coordinates = geolocation.getPosition();
            positionFeature.setGeometry(coordinates ? new Point(coordinates) : undefined);
        });

        return () => map.dispose();
    });

    return <>
        <div className='h-96 max-h-full' id="map" />
        <input type="hidden" name="addressLongitude" value={lonLat.longitude} />
        <input type="hidden" name="addressLatitude" value={lonLat.latitude} />
    </>;
}