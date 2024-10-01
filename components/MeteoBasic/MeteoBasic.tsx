import { Image, Touchable, TouchableOpacity, View } from "react-native";
import { s } from "./MeteoBasic.style";
import Txt from "../Txt/Txt";
import { interpretationImage } from "../../util/interpretationImage";
import { useNavigation } from "@react-navigation/native";

export default function MeteoBasic({ weather, city }) {
  const { temperature, time, interpretationTitle, dailyWeather } = weather;
  const nav: any = useNavigation();
  return (
    <View style={s.meteo_basic}>
      <View style={s.clock}>
        <Txt style={s.clock_text}>{time}</Txt>
      </View>
      <View style={s.location}>
        <Txt>{city}</Txt>
      </View>
      <View style={s.interpretation}>
        <Txt style={s.interpretation_text}>Clouds</Txt>
      </View>
      <View style={s.temperature_box}>
        <TouchableOpacity
          onPress={() => nav.navigate("Forecasts", { city, ...dailyWeather })}
        >
          <Txt style={s.temperature}>{temperature}°</Txt>
        </TouchableOpacity>
        <Image
          style={s.image}
          source={interpretationImage(interpretationTitle)}
        />
      </View>
    </View>
  );
}
