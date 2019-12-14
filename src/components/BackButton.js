import React from "react";

export function BackButton(props) {
  const navigateAction =
    props.history.length > 1
      ? () => props.history.goBack()
      : () => props.history.replace(props.redirectTo);

  return (
    <button
      className="btn btn-default"
      style={{ marginBottom: 10 }}
      onClick={navigateAction}
    >
      Back
    </button>
  );
}
