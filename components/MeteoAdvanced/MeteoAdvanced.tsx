import { View } from "react-native";
import { s } from "./MeteoAdvanced.style";
import Txt from "../Txt/Txt";
import TxtAdvanced from "./TxtAdvanced";

export default function MeteoAdvanced({ weather }) {
  const { windSpeed, sunset, sunrise } = weather;
  return (
    <View style={s.meteo_advanced}>
      <View style={s.container}>
        <TxtAdvanced value={sunrise} description="Sunrise" />
        <TxtAdvanced value={sunset} description="Sunset" />
        <TxtAdvanced value={`${windSpeed} km/h`} description="Wind speed" />
      </View>
    </View>
  );
}
