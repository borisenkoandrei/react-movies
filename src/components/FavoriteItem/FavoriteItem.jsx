import React from "react";
import { Button } from "antd";

function FavoriteItem(props) {
  function getDescription() {
    props.getDescription(props.id);
  }
  function deleteItem() {
    props.deleteItem(props.id);
  }

  return (
    <div className="favorite-item">
      <div className="favorite-item_title">{props.title}</div>
      <div className="favorite-item_year">{props.year}</div>
      <Button onClick={deleteItem} className="favorite-item_delete">
        Удалить
      </Button>
      <Button onClick={getDescription} className="favorite-item_description">
        Описание
      </Button>
    </div>
  );
}

export default FavoriteItem;
