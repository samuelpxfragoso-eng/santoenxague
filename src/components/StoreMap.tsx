import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

export default function StoreMap() {
  if (!hasValidKey) {
    return (
      <div className="bg-gray-100 p-8 rounded-3xl text-center">
        <h3 className="text-xl font-bold mb-4">Google Maps API Key Required</h3>
        <p>Por favor, configure sua chave de API nas configurações do app.</p>
      </div>
    );
  }

  const locations = [
    { name: "Unidade Centro", lat: -29.7556614, lng: -57.0893995 },
    { name: "Unidade Posto Buffon (Imigrantes)", lat: -29.7724023, lng: -57.0502608 },
  ];

  return (
    <div className="h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
      <APIProvider apiKey={API_KEY} version="weekly">
        <Map
          defaultCenter={{ lat: -29.764, lng: -57.07 }}
          defaultZoom={13}
          mapId="DEMO_MAP_ID"
          internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
        >
          {locations.map((loc) => (
            <AdvancedMarker key={loc.name} position={{ lat: loc.lat, lng: loc.lng }} title={loc.name}>
              <Pin background="#7e22ce" glyphColor="#fff" />
            </AdvancedMarker>
          ))}
        </Map>
      </APIProvider>
    </div>
  );
}
