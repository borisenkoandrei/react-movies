import React from "react";

export default function Website({ website }) {
  if (website === "N/A") {
    return null;
  }
  return (
    <div className="description-item">
      <div className="description-item_title">Website</div>
      <a href={website}>Website</a>
    </div>
  );
}
