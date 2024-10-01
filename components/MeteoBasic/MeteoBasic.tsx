import { Image, View } from "react-native";
import { s } from "./MeteoBasic.style";
import Txt from "../Txt/Txt";
import { interpretationImage } from "../../util/interpretationImage";

export default function MeteoBasic({ weather, city }) {
  const { temperature, time, interpretationTitle } = weather;

  return (
    <View style={s.meteo_basic}>
      <View style={s.clock}>
        <Txt>{time}</Txt>
      </View>
      <View style={s.location}>
        <Txt>{city}</Txt>
      </View>
      <View style={s.interpretation}>
        <Txt style={s.interpretation_text}>Clouds</Txt>
      </View>
      <View style={s.temperature_box}>
        <Txt style={s.temperature}>{temperature}°</Txt>
        <Image
          style={s.image}
          source={interpretationImage(interpretationTitle)}
        />
      </View>
    </View>
  );
}
