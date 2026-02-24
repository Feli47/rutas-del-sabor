import Link from "next/link";

async function getPlatos() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error cargando platos");
  }

  return res.json();
}

export default async function PlatosPage() {
  const platos = await getPlatos();

  return (
    <div style={{ padding: 20 }}>
      <h1>Lista de Platos</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
          gap: 20,
          marginTop: 20,
        }}
      >
        {platos.map((plato) => (
          <Link
            key={plato.id}
            href={`/platos/${plato.id}`}
            style={{
              border: "1px solid #ccc",
              borderRadius: 10,
              padding: 15,
              textDecoration: "none",
              color: "inherit",
              transition: "0.2s",
            }}
          >
            <img
              src={plato.image}
              alt={plato.title}
              style={{ width: "100%", height: 200, objectFit: "contain" }}
            />

            <h3>{plato.title}</h3>
            <p>${plato.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}