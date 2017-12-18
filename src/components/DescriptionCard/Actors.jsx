import React from "react";

export default function Actors({ actors }) {
  if (actors === "N/A") {
    return null;
  }
  return (
    <div className="description-item">
      <div className="description-item_title">Actors</div>
      <div className="description-item_value">{actors}</div>
    </div>
  );
}
