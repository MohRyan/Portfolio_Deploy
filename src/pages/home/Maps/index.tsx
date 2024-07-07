import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

const Maps = () => {
  return (
    <div>
      <div className="w-full h-[580px]">
        <MapContainer
          center={[-8.33702842255985, 113.42407122273605]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "380px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-8.33702842255985, 113.42407122273605]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}

export default Maps