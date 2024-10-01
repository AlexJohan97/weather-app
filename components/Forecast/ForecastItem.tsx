import { Image, View } from "react-native";
import Txt from "../Txt/Txt";
import { s } from "./ForecastItem.style";
import { interpretationImage } from "../../util/interpretationImage";

export default function ForecastItem({ weatherLabel, day, date, temperature }) {
  return (
    <View style={s.container}>
      <Image style={s.image} source={interpretationImage(weatherLabel)} />
      <Txt style={s.day}>{day}</Txt>
      <Txt style={s.date}>{date}</Txt>
      <Txt style={s.temperature}>{temperature}</Txt>
    </View>
  );
}
