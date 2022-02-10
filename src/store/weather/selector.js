import { REQUEST_STATUS } from "../../components/utils/constans";

export const selectWeatherLoading = (state) =>
  state.tempo.request.status === REQUEST_STATUS.PENDING;
export const selectWeather = (state) => state.tempo;
export const selectWeatherError = (state) => state.tempo.request.error;