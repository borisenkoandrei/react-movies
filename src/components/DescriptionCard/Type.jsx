import React from "react";

export default function Type({ type }) {
  if (type === "N/A") {
    return null;
  }
  return (
    <div className="description-item">
      <div className="description-item_title">Type</div>
      <div className="description-item_value">{type}</div>
    </div>
  );
}
