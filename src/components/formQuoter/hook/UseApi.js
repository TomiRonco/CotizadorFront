const UseApi = async (amount, date) => {
  try {
    const data = {
      amount,
      date,
    };

    const response = await fetch("http://localhost:3000/process-data/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("No se pudo obtener respuesta exitosa de la API.");
    }

    const resultados = await response.json();
    return resultados;
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
    throw error;
  }
};

export default UseApi;
