import React from "react";

export default function Ratings({ ratings }) {
  if (ratings.length === 0) {
    return null;
  }
  return (
    <div className="description-item">
      <div className="description-item_title">Ratings</div>
      <div className="description-item_value">
        <ul>
          {ratings.map(function(item) {
            return (
              <li>
                {item.Source} - {item.Value}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
