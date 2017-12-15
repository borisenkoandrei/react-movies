import React from "react";

export default function ImdbVotes({ imdbVotes }) {
  return (
    <div className="description-item">
      <div className="description-item_title">"imdbVotes"</div>
      <div className="description-item_value">{imdbVotes}</div>
    </div>
  );
}
