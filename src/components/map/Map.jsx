import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './map.scss';
import Pin from '../pin/Pin';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

//initial positon
const position = [51.505, -0.09];

// Override default icon paths
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet-images/marker-icon-2x.png',
  iconUrl: '/leaflet-images/marker-icon.png',
  shadowUrl: '/leaflet-images/marker-shadow.png',
});

function Map({items}) {
    return (
      <MapContainer center={position} zoom={7} scrollWheelZoom={true} className='map'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      {items.map((item) => (
        <Pin items={item} key={item.id} />
      ))}
      </MapContainer>
    );
}

export default Map;