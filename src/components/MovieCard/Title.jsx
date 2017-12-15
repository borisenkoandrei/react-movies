import React from "react";

function Title(props) {
  return (
    <div className="film-card_title" title={props.title}>
      {props.title}
    </div>
  );
}

export default Title;
