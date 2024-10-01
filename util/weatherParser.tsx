import { WEATHER_INTERPRATIONS } from "./interpretationCodes";

export function getInterpretationCode(code: any) {
  return WEATHER_INTERPRATIONS.find((interpretation) =>
    interpretation.codes.includes(code)
  );
}

export default function parseWeather(weather: any) {
  const temperature = Math.round(weather?.current_weather?.temperature);
  const time = weather?.current_weather?.time?.split("T")[1];
  const interpretationTitle = getInterpretationCode(
    weather.current_weather.weathercode
  )?.label;
  const windSpeed = weather?.current_weather?.windspeed ?? 0;
  const sunrise = weather?.daily?.sunrise[0]?.split("T")[1];
  const sunset = weather?.daily?.sunset[0]?.split("T")[1];
  const dailyWeather = weather?.daily;

  return {
    temperature,
    time,
    interpretationTitle,
    windSpeed,
    sunrise,
    sunset,
    dailyWeather,
  };
}
