import { LinearProgress, Button } from "@material-ui/core";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../../store/weather/actions";
import { selectWeather, selectWeatherError, selectWeatherLoading } from "../../store/weather/selector";

export const Weather = () => {
  const temps = useSelector(selectWeather);
  const error = useSelector(selectWeatherError);
  const loading = useSelector(selectWeatherLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    reload();
  }, []);

  const reload = () => {
    dispatch(getWeather());
  };

  return (
    <div>
      <h1>Weather in the Rome</h1>
      {loading && <LinearProgress />}
      {error ? (
        <>
          <h3>Error: {error}</h3>
          <Button onClick={reload}>Refrech</Button>
        </>
      ) : (
        <article key={temps.list.id}>
          <><h3>Description:</h3><div>{temps.list.description}</div></>
          <><h3>Temperature:</h3><div>{temps.list.temperature}</div></>
          <><h3>Wind :</h3><div>{temps.list.wind}</div></>
        </article>
      )}
    </div>
  );
};
