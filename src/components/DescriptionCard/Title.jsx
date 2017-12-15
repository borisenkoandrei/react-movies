import React from "react";

export default function Title({ Title }) {
  return (
    <div className="description-item">
      <div className="description-item_title">Title</div>
      <div className="description-item_value">{Title}</div>
    </div>
  );
}
