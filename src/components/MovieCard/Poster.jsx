import React from "react";

function Poster(props) {
  let src = props.poster;
  if (props.poster === "N/A") {
    src =
      "https://dummyimage.com/237x350/20363b/ffffff.png&text=image+not+found";
  }
  return <img className="film-card_img" src={src} alt={props.title} />;
}

export default Poster;
