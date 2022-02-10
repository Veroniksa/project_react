import React, { useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux';

import { CircularProgress } from "@material-ui/core";
import { getArticles } from "../../store/articles/actions";
import { selectArticles, selectArticlesError, selectArticlesLoading } from "../../store/articles/selectors";

export const News = () => {
  
  const dispatch = useDispatch();

  const articles = useSelector(selectArticles);
  const error = useSelector(selectArticlesError);
  const loading = useSelector(selectArticlesLoading);

  const reload = () => {
    dispatch(getArticles());
/*     setLoading(true);
    fetch(URL_PUBLIC)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        return response.json();
      })
      .then((result) => {
        setArticles(result);
        setError('');
      })
      .catch((e) => {
        console.log(e);
        setError(e.message);
      })
      .finally(()=> {
        setLoading(false);
      }); */
  };

  useEffect(() => {
    reload();
  }, []);

  return (
    <div>
      <h2>News</h2>
      {error ? (
        <>
          <h2>Error: {error}</h2>
          {loading && <CircularProgress color="secondary"/>}
          <button onClick={reload}>Reflesh</button>
        </>
      ) : (
        articles.map((art) => (
          <article key={art.id}>
            <h4>{art.title}</h4>
          </article>
        ))
      )}
    </div>
  );
};
