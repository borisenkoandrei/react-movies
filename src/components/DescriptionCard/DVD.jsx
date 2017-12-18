import React from "react";

export default function DVD({ dvd }) {
  if (dvd === "N/A") {
    return null;
  }
  return (
    <div className="description-item">
      <div className="description-item_title">DVD</div>
      <div className="description-item_value">{dvd}</div>
    </div>
  );
}
