import React, { useEffect, useState } from "react";
import FormQuoter from "../formQuoter/FormQuoter";
import "./DashBoard.css";
import QuoteCards from "../quoteCards/QuoteCards";

const DashBoard = () => {
  const [uvaData, setUvaData] = useState({});
  const [dolarData, setDolarData] = useState({});

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const text = await response.text();

      if (text.includes("Valor UVA")) {
        // Manejar datos de UVA
        const match = text.match(
          /Fecha: (\d{2}-\d{2}-\d{4}), Valor UVA: (\d+\.\d+)/
        );

        if (match) {
          const [, fecha, uva] = match;
          return { fecha, uva: parseFloat(uva) };
        } else {
          throw new Error(
            "No se pudo encontrar la información de UVA esperada en la respuesta"
          );
        }
      } else if (text.includes("Compra") && text.includes("Venta")) {
        const match = text.match(
          /Fecha: (\d{2}-\d{2}-\d{4}), Compra: (\d+\.\d+), Venta: (\d+\.\d+)/
        );

        if (match) {
          const [, fecha, compra, venta] = match;
          return {
            fecha,
            compra: parseFloat(compra),
            venta: parseFloat(venta),
          };
        } else {
          throw new Error(
            "No se pudo encontrar la información de dólar esperada en la respuesta"
          );
        }
      } else {
        throw new Error("Formato de respuesta no reconocido");
      }
    } catch (error) {
      console.error(`Error fetching data from ${url}:`, error);
      return null;
    }
  };

  useEffect(() => {
    const fetchDataFromBackend = async () => {
      const uvaUrl = "https://cotizadahoyback-bqjv.onrender.com/update-uva";
      const dolarUrl =
        "https://cotizadahoyback-bqjv.onrender.com/update-dollar";

      const uvaData = await fetchData(uvaUrl);
      const dolarData = await fetchData(dolarUrl);

      if (uvaData) {
        setUvaData(uvaData);
      }

      if (dolarData) {
        setDolarData(dolarData);
      }
    };

    fetchDataFromBackend();
  }, []);

  return (
    <div className="containerCustom d-flex flex-column align-items-center">
      {/* Fila para el título */}
      <div className="row w-100 justify-content-center mt-4">
        <div className="col-md-6">
          <h3 className="text-center">TLQuoter</h3>
        </div>
      </div>

      {/* Fila para Cotización y Conversor, centrada verticalmente */}
      <div className="customContainer m-auto">
        <div className="row w-100">
          <div className="col-md-6">
            <h3 className="text-center">Cotización del día</h3>
            <QuoteCards uvaData={uvaData} dolarData={dolarData} />
          </div>

          <div className="col-md-6">
            <h3 className="text-center">Conversor de moneda</h3>
            <FormQuoter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
