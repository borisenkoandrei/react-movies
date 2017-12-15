import React from "react";

export default function Language({ Language }) {
  return (
    <div className="description-item">
      <div className="description-item_title">Language</div>
      <div className="description-item_value">{Language}</div>
    </div>
  );
}
