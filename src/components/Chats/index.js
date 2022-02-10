import { useEffect, useCallback, useMemo } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { MessageList } from "../MessageList";
import "../MessageList/MessageList.css";
import "../Message.css";

import { AUTHORS } from "../utils/constans";
import { FormContainer } from "../Form/FormContainer";
import { ChartList } from "../ChstList";

import { initChats } from "../../store/chats/actions";
import { addMessageFb, initMessages } from "../../store/messages/actions";
import { selectIfChatExists } from "../../store/chats/selectors";
import { remove } from "@firebase/database";

function Chats() {
  const { itemId } = useParams();
  const dispatch = useDispatch();

  const messagesList = useSelector((state) => state.messagesList.messagesList);

  const selectCatExists = useMemo(() => selectIfChatExists(itemId), [itemId]);
  const chatExists = useSelector(
    (id) => (state) => !!state.items.items.find((item) => id === item.id)
  );

  useEffect(() => {
    dispatch(initChats());
    dispatch(initMessages());
  }, []);

  const sendMessage = useCallback(
    (text, author) => {
      dispatch(addMessageFb(text, author, itemId));
      if (itemId == null) {
        remove(addMessageFb());
      }
    },
    [itemId]
  );

  const handelAddMessage = useCallback(
    (text) => {
      sendMessage(text, AUTHORS.HUMAN);
    },
    [sendMessage]
  );

  return (
    <div className="MessageList">
      <ChartList itemId={itemId} />
      {!!itemId && chatExists && (
        <>
          <FormContainer onSubmit={handelAddMessage} />
          {(Object.values(messagesList[itemId] || {}) || []).map((message) => (
            <MessageList key={message.id} text={message.text} />
          ))}
        </>
      )}
    </div>
  );
}

export default Chats;
