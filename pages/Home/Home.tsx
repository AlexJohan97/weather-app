import { Text, View } from "react-native";
import { s } from "./Home.style";
import Txt from "../../components/Txt/Txt";
import MeteoBasic from "../../components/MeteoBasic/MeteoBasic";

export default function Home({ weather, city }) {
  return (
    <>
      <MeteoBasic weather={weather} city={city} />
      <View style={s.meteo_searchbar}>
        <Txt>searchBar</Txt>
      </View>
      <View style={s.meteo_advanced}>
        <Txt>Advanced weather info</Txt>
      </View>
    </>
  );
}
