import React from "react";

export default function Released({ released }) {
  if (released === "N/A") {
    return null;
  }
  return (
    <div className="description-item">
      <div className="description-item_title">Released</div>
      <div className="description-item_value">{released}</div>
    </div>
  );
}
