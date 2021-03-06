import React from "react";

export default function ImdbRating({ imdbRating }) {
  if (imdbRating === "N/A") {
    return null;
  }
  return (
    <div className="description-item">
      <div className="description-item_title">ImdbRating</div>
      <div className="description-item_value">{imdbRating}</div>
    </div>
  );
}
