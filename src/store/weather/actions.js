import { WEATHER_URL } from "../../components/utils/constans";

export const GET_WEATHER_LOADING = "WEATHER//GET_WEATHER_LOADING";
export const GET_WEATHER_SUCCESS = "WEATHER//GET_WEATHER_SUCCESS";
export const GET_WEATHER_FAILURE = "WEATHER//GET_WEATHER_FAILURE";

const getWeatherLoading = () => ({
    type: GET_WEATHER_LOADING
});

const getWeatherSuccess = (temps) => ({
    type: GET_WEATHER_SUCCESS,
    payload: temps,
});

const getWeatherFeilure = (error) => ({
    type: GET_WEATHER_FAILURE,
    payload: error,
});

export const getWeather = () => (dispatch) => {
    dispatch(getWeatherLoading());

    fetch(WEATHER_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error status ${response.status}`);
        }

        return response.json();
      })
      .then((result) => {
        dispatch(getWeatherSuccess(result));
      })
      .catch((e) => {
        console.log(e);
        dispatch(getWeatherFeilure(e.message));
      });
};
