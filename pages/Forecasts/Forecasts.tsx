import { View } from "react-native";
import { useRoute } from "@react-navigation/native";
import Header from "../../components/Forecast/Header";
import ForecastItem from "../../components/Forecast/ForecastItem";
import { getInterpretationCode } from "../../util/weatherParser";
import { DAYS } from "../../util/interpretationCodes";

interface Props {
  city: string;
  time: any;
  weathercode: any;
  temperature_2m_max: any;
}

function getWeekWeather({ time, weathercode, temperature_2m_max }) {
  let weekWeather = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(time[i]);
    const dayOfWeek = DAYS[date.getDay()];
    const formmattedDate = date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "numeric",
    });
    weekWeather.push({
      weatherLabel: getInterpretationCode(weathercode[i]).label,
      temperature: Math.round(temperature_2m_max[i]),
      date: formmattedDate,
      day: dayOfWeek,
    });
  }
  return weekWeather;
}
export default function Forecasts() {
  const { params } = useRoute();
  const routeParams = params as Props;
  const weatherWeek = getWeekWeather(routeParams);
  return (
    <View>
      <Header city={routeParams.city} />
      {weatherWeek.map((item, index) => (
        <ForecastItem
          key={index}
          weatherLabel={item.weatherLabel}
          day={item.day}
          date={item.date}
          temperature={`${item.temperature}°`}
        />
      ))}
    </View>
  );
}
