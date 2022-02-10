export const selectMessages = (state) => state.messagesList.messagesList;
export const selectMessagesByChatId = (itemId) => (state) => 
state.messagesList.messagesList[itemId];
