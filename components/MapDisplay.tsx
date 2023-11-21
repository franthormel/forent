"use client"

import { Map, View } from 'ol';
import { defaults } from 'ol/control';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat, toLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
import { useEffect, useRef, useState } from "react";
import { Address } from '@/lib/listing';

// TODO: Add icon and geolocation
// icon: https://openlayers.org/en/latest/examples/modify-icon.html
// geolocate: https://openlayers.org/en/latest/examples/geolocation.html
// position: https://openlayers.org/en/latest/examples/mouse-position.html
// map move end: https://openlayers.org/en/latest/examples/moveend.html
// page scrolling: https://openlayers.org/en/latest/examples/page-scroll.html
// projection scale = https://openlayers.org/en/latest/examples/projection-and-scale.html
// https://openlayers.org/en/latest/examples/animation.html
export default function MapDisplay() {
    const address = useRef<Address>({});

    useEffect(() => {
        const map = new Map({
            target: "map",
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            controls: defaults({ attributionOptions: { collapsible: true } }),
            view: new View({
                center: fromLonLat([-77.036667, 38.895]),
                zoom: 15.75,
            })
        });

        map.on("singleclick", (e) => {
            const lonLat = (toLonLat(e.coordinate));
            address.current.longitude = lonLat[0];
            address.current.latitude = lonLat[1];
        });

        return () => map.dispose();
    });

    return <>
        <div className='h-screen max-h-screen' id="map" />
        <input type="hidden" name="addressLongitude" value={address.current.longitude} />
        <input type="hidden" name="addressLatitude" value={address.current.latitude} />
    </>;
}