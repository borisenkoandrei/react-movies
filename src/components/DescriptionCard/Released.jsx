import React from "react";

export default function Released({ Released }) {
  return (
    <div className="description-item">
      <div className="description-item_title">Released</div>
      <div className="description-item_value">{Released}</div>
    </div>
  );
}
