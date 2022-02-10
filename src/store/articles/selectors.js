import { REQUEST_STATUS } from "../../components/utils/constans";

export const selectArticlesLoading = (state) =>
  state.news.request.status === REQUEST_STATUS.PENDING;
export const selectArticles = (state) => state.news.list;
export const selectArticlesError = (state) => state.news.request.error;