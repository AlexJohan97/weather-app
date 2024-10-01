import { Text, View } from "react-native";
import { s } from "./Home.style";

export default function Home() {
  return (
    <>
      <View style={s.meteo_basic}>
        <Text style={s.txt}>Basic weather info</Text>
      </View>
      <View style={s.meteo_searchbar}>
        <Text style={s.txt}>searchBar</Text>
      </View>
      <View style={s.meteo_advanced}>
        <Text style={s.txt}>Advanced weather info</Text>
      </View>
    </>
  );
}
