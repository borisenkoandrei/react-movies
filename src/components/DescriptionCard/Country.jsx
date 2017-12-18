import React from "react";

export default function Country({ country }) {
  if (country === "N/A") {
    return null;
  }
  return (
    <div className="description-item">
      <div className="description-item_title">Country</div>
      <div className="description-item_value">{country}</div>
    </div>
  );
}
