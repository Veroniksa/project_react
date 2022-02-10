import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import {
  deleteChat,
  deleteChatFb,
  deleteChats,
} from "../../store/chats/actions";
import {
  selectChatsLength,
  selectFerstChatId,
} from "../../store/chats/selectors";

import "./style.css";
import { ChatItemView } from "./ChatItenView";
import { deleteMessageFb } from "../../store/messages/actions";

export const ChatItemContainer = ({ item }) => {
  const { itemId } = useParams();
  const ferstChatId = useSelector(selectFerstChatId);
  const chatsLength = useSelector(selectChatsLength);

  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(deleteChats());
  }, []);

  const handelDelete = () => {
    dispatch(deleteChatFb(item.id));
    dispatch(deleteMessageFb(itemId));

    if (itemId !== item.id) {
      return;
    }

    if (!chatsLength === 1) {
      history.push(`/chats/${ferstChatId}`);
    } else {
      history.push(`/chats`);
    }
  };

  return <ChatItemView name={item.name} id={item.id} onDelete={handelDelete} />;
};
