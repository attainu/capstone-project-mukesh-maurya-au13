import React from "react";

const ButtonSpinner = () => {
  return (
    <button class="btn btn-primary" type="button" disabled>
      <span
        class="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      ></span>
      Submit
    </button>
  );
};

export default ButtonSpinner;
