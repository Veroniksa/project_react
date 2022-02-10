export const selectChats = (state) => state.items.items;
export const selectChatsLength = (state) => state.items.items.length;
export const selectFerstChatId = (state) => state.items.items?.[0].id;
export const selectIfChatExists = (id) => (state) =>
  !!state.items.items.find((item) => id === item.id);
