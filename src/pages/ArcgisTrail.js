import React, { useEffect, useRef } from 'react';
import { loadModules, setDefaultOptions } from 'esri-loader';

// configure esri-loader to lazy load the CSS
// the fisrt time any react-arcgis components are rendered
setDefaultOptions({ css: true });

export default function WebMapView() {
    const mapRef = useRef();

    useEffect(
      () => {
        // lazy load the required ArcGIS API for JavaScript modules and CSS
        loadModules(['esri/Map', 'esri/views/MapView'], { css: true })
        .then(([ArcGISMap, MapView]) => {
          const map = new ArcGISMap({
            basemap: 'dark-gray-vector'
          });

          // load the map view at the ref's DOM node
          const view = new MapView({
            container: mapRef.current,
            map: map,
            center: [78, 20],
            zoom: 5
          });

          return () => {
            if (view) {
              // destroy the map view
              view.container = null;
            }
          };
        });
      }
    );

    return (<div className="webmap" style={{height: "1000px"}} ref={mapRef} />)
};