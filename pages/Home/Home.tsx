import { Text, View } from "react-native";
import { s } from "./Home.style";
import Txt from "../../components/Txt/Txt";
import MeteoBasic from "../../components/MeteoBasic/MeteoBasic";
import MeteoAdvanced from "../../components/MeteoAdvanced/MeteoAdvanced";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function Home({ weather, city }) {
  return (
    <>
      <MeteoBasic weather={weather} city={city} />
      <SearchBar />
      <MeteoAdvanced weather={weather} />
    </>
  );
}
