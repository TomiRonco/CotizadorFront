import React from "react";

const Results = ({ result }) => {
  return (
    <div className="mt-4 p-3 border border-dark rounded">
      {result ? (
        <div className="text-center">
          <h2 className="text-uppercase fs-3">Resultados</h2>
          <p>
            UVA:{" "}
            {result.uva ? (
              <strong>${result.uva}</strong>
            ) : (
              <span>No hay valor disponible para la fecha seleccionada</span>
            )}
          </p>
          <p>
            Dólar Compra:{" "}
            {result.dollarPurchase ? (
              <strong>${result.dollarPurchase}</strong>
            ) : (
              <span>No hay valor disponible para la fecha seleccionada</span>
            )}
          </p>
          <p>
            Dólar Venta:{" "}
            {result.dollarSale ? (
              <strong>${result.dollarSale}</strong>
            ) : (
              <span>No hay valor disponible para la fecha seleccionada</span>
            )}
          </p>
        </div>
      ) : (
        <p>No hay resultados disponibles</p>
      )}
    </div>
  );
};

export default Results;
