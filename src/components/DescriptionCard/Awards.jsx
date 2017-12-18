import React from "react";

export default function Awards({ awards }) {
  if (awards === "N/A") {
    return null;
  }
  return (
    <div className="description-item">
      <div className="description-item_title">Awards</div>
      <div className="description-item_value">{awards}</div>
    </div>
  );
}
