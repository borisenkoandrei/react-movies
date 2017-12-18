import React from "react";

export default function Title({ title }) {
  if (title === "N/A") {
    return null;
  }
  return (
    <div className="description-item">
      <div className="description-item_value">{title}</div>
    </div>
  );
}
