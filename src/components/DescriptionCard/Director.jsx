import React from "react";

export default function Director({ director }) {
  if (director === "N/A") {
    return null;
  }
  return (
    <div className="description-item">
      <div className="description-item_title">Director</div>
      <div className="description-item_value">{director}</div>
    </div>
  );
}
