import { URL_PUBLIC } from "../../components/utils/constans";

export const GET_ARTICLES_PENDING = "ARTICLES::GET_PENDING";
export const GET_ARTICLES_SUCCESS = "ARTICLES::GET_SUCCESS";
export const GET_ARTICLES_FAILURE = "ARTICLES::GET_FAILURE";

const getArticlesPending = () => ({
  type: GET_ARTICLES_PENDING,
});

const GetArticlesSuccess = (articles) => ({
  type: GET_ARTICLES_SUCCESS,
  payload: articles,
});

const getArticlesFailure = (error) => ({
  type: GET_ARTICLES_FAILURE,
  payload: error,
});

/*  export const getArticles = () => (dispatch) => {
   dispatch(getArticlesPending());

   fetch(URL_PUBLIC)
     .then((response) => {
       if (!response.ok) {
         throw new Error(`error ${response.status}`);
       }

       return response.json();
     })
     .then((result) => {
       dispatch(GetArticlesSuccess(result));
     })
     .catch((e) => {
       console.log(e);
       dispatch(getArticlesFailure(e.message));
     });
 }; */

 export const getArticles = () => async (dispatch) => {
  dispatch(getArticlesPending());

  try {
    const response = await fetch(URL_PUBLIC);

    if (!response.ok) {
      throw new Error(`error ${response.status}`);
    }

    const result = await response.json();
    dispatch(GetArticlesSuccess(result));
  }
    catch(e) {
      console.log(e);
      dispatch(getArticlesFailure(e.message));
    }
};
