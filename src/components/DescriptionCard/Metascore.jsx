import React from "react";

export default function Metascore({ metascore }) {
  if (metascore === "N/A") {
    return null;
  }
  return (
    <div className="description-item">
      <div className="description-item_title">Metascore</div>
      <div className="description-item_value">{metascore}</div>
    </div>
  );
}
