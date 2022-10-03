import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export default function AlertMessage({ severity = "success", message }) {
  const title =
    {
      error: "Error",
      warning: "Warning",
      info: "Info",
      success: "Success",
    }[severity] || "Success";

  return (
    <Alert severity={severity} data-testid="alertMessage">
      <AlertTitle>{title}</AlertTitle>
      <strong>{message}</strong>
    </Alert>
  );
}
