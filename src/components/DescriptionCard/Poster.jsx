import React from "react";

export default function Poster({ poster }) {
  if (poster === "N/A") {
    return null;
  }
  return (
    <div className="description-item">
      <img src={poster} alt="Poster" />
    </div>
  );
}
