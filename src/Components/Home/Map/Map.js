import React, { useEffect } from 'react';
import axios from 'axios';
import mapboxgl from 'mapbox-gl';
import { useStaff } from './../../../Context/StaffContext';
import { useJobs } from '../../../Context/JobsContext';
import { useWeeks } from '../../../Context/WeeksContext';
import { days } from '../../../GlobalFunctions/dateOperations';
import classes from './Map.module.scss';

const Map = ({ user, day, week }) => {
  const { colors } = useStaff();
  const weeks = useWeeks();
  const color = colors[user];
  const mapKey =
    'pk.eyJ1IjoianAxOTkwIiwiYSI6ImNrZnZrM3pxcTBibmwycnA3NXNnbm9rNWgifQ.ST9pl9KeOpuNQyX8Y-jTcA';

  mapboxgl.accessToken = mapKey;

  // build jobs array for selected day and week
  const { jobList } = useJobs();
  const date = weeks[week][days[day].toLowerCase()].toLocaleDateString();
  const jobs = [];
  jobList.forEach((el) => {
    if (
      el.assigned === Object.keys(colors).findIndex((el) => el === user) &&
      el.nextVisit === date
    ) {
      jobs.push({ ...el });
    }
  });

  // modify address to use in geocoding
  jobs.forEach((el) => {
    if (el.address.length <= 5) {
      const output = [];
      Object.values(el.address).forEach((e) => {
        if (e) {
          output.push(e.split(' ').join('%20'));
        }
      });
      el.address = output.join(',');
    }
  });

  const geocodePostcode = async (el) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${el}.json?access_token=${mapKey}`;
    try {
      const response = await axios.get(url);
      return response.data.features[0].geometry.coordinates;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/jp1990/ckbz9cpzn0xk51iqaiqa4yt0q',
      center: [1.386, 52.8227],
      zoom: 12,
    });

    const bounds = new mapboxgl.LngLatBounds();

    const markerArray = [];
    const addMarkers = async () => {
      if (jobs) {
        jobs.forEach((el, i) => {
          const addMarker = async () => {
            const lngLat = await geocodePostcode(el.address);
            const marker = new mapboxgl.Marker({
              anchor: 'center',
              color: '#00c853',
            })
              .setLngLat(lngLat)
              .setPopup(
                new mapboxgl.Popup({ closeButton: false }).setHTML(
                  `<h6>${jobs[i].name}</h6>`
                )
              )
              .addTo(map);
            markerArray.push(marker);
            // Extend the map bounds to include the current location
            bounds.extend(lngLat);

            map.fitBounds(bounds, {
              padding: {
                top: 150,
                bottom: 150,
                left: 100,
                right: 100,
              },
              maxZoom: 14,
            });
          };
          addMarker();
        });
      }
    };
    addMarkers();

    return () => {
      markerArray.forEach((el) => {
        el.remove();
      });
      map.remove();
    };
  }, [jobs]);

  return (
    <div
      id='map'
      style={{ border: `1px solid ${color}` }}
      className={classes.map}
    ></div>
  );
};

export default Map;
