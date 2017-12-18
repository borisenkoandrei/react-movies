import React from "react";

export default function Plot({ plot }) {
  if (plot === "N/A") {
    return null;
  }
  return (
    <div className="description-item">
      <div className="description-item_title">Plot</div>
      <div className="description-item_value">{plot}</div>
    </div>
  );
}
