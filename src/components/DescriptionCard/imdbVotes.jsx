import React from "react";

export default function ImdbVotes({ imdbVotes }) {
  if (imdbVotes === "N/A") {
    return null;
  }
  return (
    <div className="description-item">
      <div className="description-item_title">ImdbVotes</div>
      <div className="description-item_value">{imdbVotes}</div>
    </div>
  );
}
