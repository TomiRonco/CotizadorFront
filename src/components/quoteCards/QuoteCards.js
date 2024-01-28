import React from "react";

const QuoteCards = ({ uvaData, dolarData }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="col-md-12 mb-3">
          <div className="card text-center border border-primary">
            <div className="card-body">
              <h5 className="card-title text-primary text-decoration-underline">
                UVA
              </h5>
              <p className="card-text">
                {uvaData && uvaData.uva !== undefined
                  ? `Valor: $${uvaData.uva}`
                  : "Cargando..."}
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-12 mb-3">
          <div className="card text-center border border-primary">
            <div className="card-body">
              <h5 className="card-title text-primary text-decoration-underline">
                Dólar (Compra)
              </h5>
              <p className="card-text">
                {dolarData && dolarData.compra !== undefined
                  ? `Valor: $${dolarData.compra}`
                  : "Cargando..."}
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-12 mb-3">
          <div className="card text-center border border-primary">
            <div className="card-body">
              <h5 className="card-title text-primary text-decoration-underline">
                Dólar (Venta)
              </h5>
              <p className="card-text">
                {dolarData && dolarData.venta !== undefined
                  ? `Valor: $${dolarData.venta}`
                  : "Cargando..."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCards;
