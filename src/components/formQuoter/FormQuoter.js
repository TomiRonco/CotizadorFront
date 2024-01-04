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
      const resultados = await UseApi(data.amount, data.date);
      setResult(resultados);
      console.log("Solicitud exitosa:", resultados);
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  return (
    <>
      <form className="w-25">
        <div className="d-flex gap-3">
          <input
            className="form-control"
            type="number"
            placeholder="amount"
            onChange={amountHandler}
            value={data.amount}
          />
          <input
            className="form-control"
            type="date"
            placeholder="date"
            onChange={dateHandler}
            value={data.date}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-2 w-100"
          onClick={submitHandler}
        >
          Calculate
        </button>
      </form>
      <Results result={result} />
    </>
  );
};

export default FormQuoter;
