import React from "react";

const Results = ({ result }) => {
  return (
    <div className="mt-2 p-3 border border-primary rounded">
      {result ? (
        <div className="text-left">
          <h2 className="text-center fs-5">En pesos son...</h2>
          <p>
            UVA:{" "}
            {result.uva !== undefined && result.uva !== 0 ? (
              <strong>${result.uva.toFixed(2)}</strong>
            ) : (
              <span>Aumentar monto</span>
            )}
          </p>
          <p>
            Dólar Compra:{" "}
            {result.dollarPurchase !== undefined &&
            result.dollarPurchase !== 0 ? (
              <strong>${result.dollarPurchase.toFixed(2)}</strong>
            ) : (
              <span>Aumentar monto</span>
            )}
          </p>
          <p>
            Dólar Venta:{" "}
            {result.dollarSale !== undefined && result.dollarSale !== 0 ? (
              <strong>${result.dollarSale.toFixed(2)}</strong>
            ) : (
              <span>Aumentar monto</span>
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
