"use client"

import { Address } from '@/lib/listing';
import { Map, View } from 'ol';
import { defaults } from 'ol/control';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat, toLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
import { useEffect, useRef, useState } from "react";

// TODO: Add icon and geolocation
// icon: https://openlayers.org/en/latest/examples/modify-icon.html
// geolocate: https://openlayers.org/en/latest/examples/geolocation.html
// position: https://openlayers.org/en/latest/examples/mouse-position.html
// map move end: https://openlayers.org/en/latest/examples/moveend.html
// page scrolling: https://openlayers.org/en/latest/examples/page-scroll.html
// projection scale = https://openlayers.org/en/latest/examples/projection-and-scale.html
// https://openlayers.org/en/latest/examples/animation.html

export default function MapDisplay() {
    const zoom = useRef<number | undefined>(15.75);
    const [address, setAddress] = useState<Address>({
        longitude: -77.036667,
        latitude: 38.895
    });

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
                center: fromLonLat([address.longitude!, address.latitude!]),
                zoom: zoom.current,
            })
        });

        map.on("singleclick", (e) => {
            const lonLat = toLonLat(e.coordinate);
            zoom.current = map.getView().getZoom();
            setAddress({
                ...address,
                longitude: lonLat[0],
                latitude: lonLat[1]
            })
        });

        return () => map.dispose();
    });

    return <>
        <div className='h-screen max-h-screen' id="map" />
        <input type="hidden" name="addressLongitude" value={address.longitude} />
        <input type="hidden" name="addressLatitude" value={address.latitude} />
    </>;
}