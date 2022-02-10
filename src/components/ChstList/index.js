import React from "react";
import { List } from "@material-ui/core";
import { ChatItemContainer } from "../ChatItem/ChatItemContainer";
import { useSelector } from "react-redux";
import { selectChats } from "../../store/chats/selectors";
import { FormAddChat } from "../FormAddChat";

export const ChartList = ({ itemId }) => {
  const items = useSelector(selectChats);

  return (
    <>
      <List>
        {(items || []).map((item, i) => (
          <>
            <ChatItemContainer
              item={item}
              itemId={itemId}
              key={item.id}
              id={item.id}
            />
          </>
        ))}
        <FormAddChat />
      </List>
    </>
  );
};
