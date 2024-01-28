import React, { useState } from "react";
import UseApi from "./hook/UseApi";
import Results from "../results/Results";

const initialValues = {
  amount: "",
  date: "",
};

const FormQuoter = ({ sendFormData }) => {
  const [data, setData] = useState(initialValues);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const amountHandler = (event) => {
    setData({ ...data, amount: event.target.value });
  };

  const dateHandler = (event) => {
    const selectedDate = new Date(event.target.value);

    // Formatear la fecha a 'YYYY-MM-DD'
    const formattedDate = selectedDate.toISOString().split("T")[0];

    setData({ ...data, date: formattedDate });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const resultados = await UseApi(data.amount, data.date);
      setResult(resultados);
      console.log("Solicitud exitosa:", resultados);
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex flex-column flex-sm-row gap-3">
        <div className="input-group">
          <span className="input-group-text border border-primary">$</span>
          <input
            className="form-control border border-primary"
            type="number"
            placeholder="ARS"
            onChange={amountHandler}
            value={data.amount}
          />
        </div>
        <input
          className="form-control border border-primary"
          type="date"
          placeholder="date"
          onChange={dateHandler}
          value={data.date}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary mt-2"
        onClick={submitHandler}
        disabled={isLoading}
      >
        {isLoading ? "Calculando..." : "Calcular"}
      </button>
      {result !== null && <Results result={result} />}
    </div>
  );
};

export default FormQuoter;
