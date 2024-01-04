import React from "react";
import FormQuoter from "../formQuoter/FormQuoter";
import "./DashBoard.css";

const DashBoard = () => {
  return (
    <div className="vh-100 d-flex flex-column align-items-center justify-content-center bg-default">
      <h1 className="fw-bold mb-5">Quote APP</h1>
      <FormQuoter />
    </div>
  );
};

export default DashBoard;
