"use client"

import SectionHeaderIcon from '@/components/section/header-icon'
import pinIcon from "@/public/icons/home_pin.svg"
import { Feature, Map, View } from 'ol'
import { defaults } from 'ol/control'
import { Point } from 'ol/geom'
import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import { fromLonLat } from 'ol/proj'
import OSM from 'ol/source/OSM'
import VectorSource from 'ol/source/Vector'
import { Icon, Style } from 'ol/style'
import { useEffect } from "react"

interface ListingMapProps {
    lat: number
    lon: number
    mapId?: string,
    dataCyMap?: string
}

export default function ListingMap(props: ListingMapProps) {
    const mapId = props.dataCyMap ?? "listing-map-slippy"

    useEffect(() => {
        const coordinate = fromLonLat([props.lon, props.lat]);
        const iconFeature = new Feature({
            geometry: new Point(coordinate)
        })
        const iconStyle = new Style({
            image: new Icon({
                src: pinIcon.src,
            }),
        })
        iconFeature.setStyle(iconStyle)

        const map = new Map({
            target: mapId,
            layers: [
                new TileLayer({
                    source: new OSM()
                }),
                new VectorLayer({
                    source: new VectorSource({
                        features: [iconFeature],
                    }),
                })
            ],
            controls: defaults({
                attributionOptions: { collapsible: true }
            }),
            view: new View({
                center: coordinate,
                zoom: 16,
                constrainResolution: true
            })
        })

        return () => map.dispose()
    })

    return (
        <div className="grid auto-rows-auto gap-y-4">
            <SectionHeaderIcon props={{
                text: "Map",
                dataCyIcon: "listing-map-section-icon",
                dataCyText: "listing-map-section-text",
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28">
                    <path
                        d="m600-120-240-84-186 72q-20 8-37-4.5T120-170v-560q0-13 7.5-23t20.5-15l212-72 240 84 186-72q20-8 37 4.5t17 33.5v560q0 13-7.5 23T812-192l-212 72Zm-40-98v-468l-160-56v468l160 56Z" />
                </svg>
            </SectionHeaderIcon>
            <div id={mapId} tabIndex={0} data-cy={props.dataCyMap ?? "listing-map-slippy"}
                className="h-80 w-full rounded-md md:h-[25rem] lg:h-[30rem] 2xl:w-[60rem]" >
            </div>
        </div>
    )
}
