import React from "react";

export default function Production({ production }) {
  if (production === "N/A") {
    return null;
  }
  return (
    <div className="description-item">
      <div className="description-item_title">Production</div>
      <div className="description-item_value">{production}</div>
    </div>
  );
}
