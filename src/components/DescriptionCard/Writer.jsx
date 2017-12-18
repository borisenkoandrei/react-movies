import React from "react";

export default function Writer({ writer }) {
  if (writer === "N/A") {
    return null;
  }
  return (
    <div className="description-item">
      <div className="description-item_title">Writer</div>
      <div className="description-item_value">{writer}</div>
    </div>
  );
}
