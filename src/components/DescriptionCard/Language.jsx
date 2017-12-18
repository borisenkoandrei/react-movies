import React from "react";

export default function Language({ language }) {
  if (language === "N/A") {
    return null;
  }
  return (
    <div className="description-item">
      <div className="description-item_title">Language</div>
      <div className="description-item_value">{language}</div>
    </div>
  );
}
