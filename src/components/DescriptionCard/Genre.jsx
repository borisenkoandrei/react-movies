import React from "react";

export default function Genre({ genre }) {
  if (genre === "N/A") {
    return null;
  }
  return (
    <div className="description-item">
      <div className="description-item_title">Genre</div>
      <div className="description-item_value">{genre}</div>
    </div>
  );
}
