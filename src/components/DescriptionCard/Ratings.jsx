import React from "react";

export default function Ratings({ Ratings }) {
  return (
    <div className="description-item">
      <div className="description-item_title">Ratings</div>
      <div className="description-item_value">{Ratings}</div>
    </div>
  );
}
