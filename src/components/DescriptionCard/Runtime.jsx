import React from "react";

export default function Runtime({ runtime }) {
  if (runtime === "N/A") {
    return null;
  }
  return (
    <div className="description-item">
      <div className="description-item_title">Runtime</div>
      <div className="description-item_value">{runtime}</div>
    </div>
  );
}
