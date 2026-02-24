const localesMock = [
  {
    id: 1,
    name: "Cafe Central",
    type: "cafeteria",
    priceRange: "economico",
    city: "Montevideo",
    zone: "Centro",
    rating: 4,
    address: "18 de Julio 1234",
    hours: "08:00 - 20:00"
  },
  {
    id: 2,
    name: "Burger House",
    type: "restaurante",
    priceRange: "medio",
    city: "Montevideo",
    zone: "Pocitos",
    rating: 5,
    address: "Av Brasil 456",
    hours: "12:00 - 00:00"
  },
  {
    id: 3,
    name: "Bar del Puerto",
    type: "bar",
    priceRange: "alto",
    city: "Colonia",
    zone: "Puerto",
    rating: 3,
    address: "Rambla 999",
    hours: "18:00 - 03:00"
  }
];

export default function LocalDetalle({ params }) {
  const local = localesMock.find(l => l.id === Number(params.id));

  if (!local) return <h1>Local no encontrado</h1>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{local.name}</h1>

      <div className="mt-4 space-y-2">
        <p><strong>Tipo:</strong> {local.type}</p>
        <p><strong>Precio:</strong> {local.priceRange}</p>
        <p><strong>Ciudad:</strong> {local.city}</p>
        <p><strong>Zona:</strong> {local.zone}</p>
        <p><strong>Dirección:</strong> {local.address}</p>
        <p><strong>Horario:</strong> {local.hours}</p>
        <p><strong>Rating:</strong> ⭐ {local.rating}</p>
      </div>
    </div>
  );
}