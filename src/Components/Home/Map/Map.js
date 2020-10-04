import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import classes from './Map.module.scss';

const Map = ({ settings, setSettings }) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoianAxOTkwIiwiYSI6ImNrZnZrM3pxcTBibmwycnA3NXNnbm9rNWgifQ.ST9pl9KeOpuNQyX8Y-jTcA';

  useEffect(() => {
    new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/jp1990/ckbz9cpzn0xk51iqaiqa4yt0q',
      center: [settings.lng, settings.lat],
      zoom: settings.zoom,
    });
  }, [settings]);

  return (
    <div
      id='map'
      style={{ border: '1px solid red' }}
      className={classes.map}
    ></div>
  );
};

export default Map;
