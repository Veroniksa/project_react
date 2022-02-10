import { ListItem } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";

import "./style.css";

export const ChatItemView = ({ id, name, onDelete }) => {
  return (
    <ListItem className="ListItem">
      <Link to={`/chats/${id}`}>{name}</Link>
      <DeleteIcon className="ListBTN" onClick={onDelete} />
    </ListItem>
  );
};
