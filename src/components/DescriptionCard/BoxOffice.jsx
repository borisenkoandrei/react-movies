import React from "react";

export default function BoxOffice({ boxoffice }) {
  if (boxoffice === "N/A") {
    return null;
  }
  return (
    <div className="description-item">
      <div className="description-item_title">BoxOffice</div>
      <div className="description-item_value">{boxoffice}</div>
    </div>
  );
}
