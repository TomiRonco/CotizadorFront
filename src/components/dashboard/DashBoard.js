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
      const uvaUrl = "http://127.0.0.1:8000/update-uva/";
      const dolarUrl = "http://127.0.0.1:8000/update-dollar/";

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
    <div className="vh-100">
      <nav className="navbar navbar-expand-lg d-flex justify-content-center align-items-center text-center border-bottom border-2 border-primary">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://cotizadahoyback.onrender.com/update-uva/"
              target="_blank"
              rel="noopener noreferrer"
            >
              UVA Histórico
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://cotizadahoyback.onrender.com/update-dollar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dólar Histórico
            </a>
          </li>
        </ul>
      </nav>

      <h1 className="d-flex justify-content-center align-items-center mt-5 fs-2 fw-bold">
        TLQuoter
      </h1>

      <div className="customContainer">
        <div className="row w-100">
          <div className="col-md-6 mt-5">
            <h3 className="text-center">Cotización del día</h3>
            <QuoteCards uvaData={uvaData} dolarData={dolarData} />
          </div>

          <div className="col-md-6 mt-5">
            <h3 className="text-center">Conversor de moneda</h3>
            <FormQuoter />
          </div>
        </div>
      </div>

      <footer className="bg-primary text-white mt-5 p-5 d-flex flex-column align-items-center justify-content-center">
        <h3 className="text-center fs-5">Página creada por</h3>
        <h4 className="text-center fs-6">
          Tomas Roncoroni <br /> Leandro Tanoni
        </h4>
      </footer>
    </div>
  );
};

export default DashBoard;
