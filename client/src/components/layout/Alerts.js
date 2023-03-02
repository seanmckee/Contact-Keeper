import React, { useContext } from "react";
import alertContext from "../../context/alert/alertContext";

const Alerts = () => {
  const alertContext = useContext(alertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle">{alert.msg}</i>
      </div>
    ))
  );
};

export default Alerts;
