import React from "react";

export default function Rated({ Rated }) {
  return (
    <div className="description-item">
      <div className="description-item_title">Rated</div>
      <div className="description-item_value">{Rated}</div>
    </div>
  );
}
