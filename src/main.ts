import './style.css'
import { Loader } from '@googlemaps/js-api-loader';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
`;

const apiKey:string = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

let map;
async function initMap(): Promise<void> {
  const position = { lat: 36.9905, lng: -122.0584 };

  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

  // The map, centered at Uluru
  map = new Map(
    document.getElementById('app') as HTMLElement,
    {
      zoom: 15,
      center: position,
      mapId: 'DEMO_MAP_ID',
    }
  );

  // The marker, positioned at UCSC
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: 'University of California, Santa Cruz',
  });
}


const loader = new Loader({
  apiKey: apiKey, 
  version: "weekly",
});

loader.load().then(() => {
  initMap();
}).catch(e => console.error(e));
