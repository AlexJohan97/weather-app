import { WEATHER_INTERPRATIONS } from "./interpretationCodes";

function getInterpretation(weather: any) {
  return WEATHER_INTERPRATIONS.find((interpretation) =>
    interpretation.codes.includes(weather?.current_weather?.weathercode)
  );
}

export default function parseWeather(weather: any) {
  const temperature = Math.round(weather?.current_weather?.temperature);
  const time = weather?.current_weather?.time?.split("T")[1];
  const interpretationTitle = getInterpretation(weather)?.label;

  return {
    temperature,
    time,
    interpretationTitle,
  };
}
