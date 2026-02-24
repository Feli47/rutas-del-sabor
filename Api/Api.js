const URL = "https://api-react-taller-production.up.railway.app";

// =====================
// REGISTER
// =====================
export const register = async (username, name, password) => {
  const res = await fetch(`${URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, name, password }),
  });

  return res.json();
};

// =====================
// LOGIN
// =====================
export const login = async (username, password) => {
  const res = await fetch(`${URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  return res.json();
};

// =====================
// PRODUCTOS (TEMPORAL)
// =====================
export async function obtenerProductos() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) throw new Error("Error cargando productos");

  return res.json();
}

export async function obtenerProducto(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) throw new Error("Error cargando producto");

  return res.json();
}

export{
  register,
  login,
}