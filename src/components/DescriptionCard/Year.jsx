import React from "react";

export default function Year({ year }) {
  if (year === "N/A") {
    return null;
  }
  return (
    <div className="description-item">
      <div className="description-item_title">Year</div>
      <div className="description-item_value">{year}</div>
    </div>
  );
}
