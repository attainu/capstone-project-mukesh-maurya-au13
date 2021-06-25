

export const WarningAlert = ({ props }) => {
  console.log(props);
  return (
    <div
      className="alert alert-primary ms-5 mt-3"
      role="alert"
      style={{ maxWidth: "70%" }}
    >
      {/* {alertMsg} */}
    </div>
  );
};

export const SuccessAlert = (props) => {
  return (
    <div
      className="alert alert-success ms-5 mt-3"
      role="alert"
      style={{ maxWidth: "70%" }}
    >
      {props.alertMsg}
    </div>
  );
};

export const DangerAlert = (props) => {
  return (
    <div
      className="alert alert-danger ms-5 mt-3"
      role="alert"
      style={{ maxWidth: "70%" }}
    >
      {props.message}
    </div>
  );
};
