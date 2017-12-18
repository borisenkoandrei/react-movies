import React from "react";

export default function Rated({ rated }) {
  if (rated === "N/A") {
    return null;
  }
  return (
    <div className="description-item">
      <div className="description-item_title">Rated</div>
      <div className="description-item_value">{rated}</div>
    </div>
  );
}
