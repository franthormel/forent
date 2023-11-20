"use client"

import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
import { useEffect } from "react";

// TODO: Add icon and geolocation
// icon: https://openlayers.org/en/latest/examples/modify-icon.html
// geolocate: https://openlayers.org/en/latest/examples/geolocation.html
// loading: https://openlayers.org/en/latest/examples/load-events.html
// position: https://openlayers.org/en/latest/examples/mouse-position.html
// map move end: https://openlayers.org/en/latest/examples/moveend.html
// page scrolling: https://openlayers.org/en/latest/examples/page-scroll.html
// click, popup = https://openlayers.org/en/latest/examples/popup.html;
// projection scale = https://openlayers.org/en/latest/examples/projection-and-scale.html
export default function MapDisplay() {
    useEffect(() => {
        const map = new Map({
            target: "map",
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            view: new View({
                center: fromLonLat([-77.036667, 38.895]),
                zoom: 15.75,
            })
        });

        return () => map.dispose();
    });

    return <div className='h-screen max-h-screen' id="map" />;
}