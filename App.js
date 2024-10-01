import { ImageBackground, Text, View } from "react-native";
import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Home from "./pages/Home/Home";
import backgroundImg from "./assets/background.png";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { useEffect, useState } from "react";
import { MeteoApi } from "./api/meteo";
import { useFonts } from "expo-font";
import parseWeather from "./util/weatherParser";

export default function App() {
  const [coordinates, setCoordinates] = useState(null);
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const [fontsLoaded] = useFonts({
    "Alata-Regular": require("./assets/fonts/Alata-Regular.ttf"),
  });
  useEffect(() => {
    getUserCoordinates();
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetchWeather(coordinates);
      fetchCity(coordinates);
    }
  }, [coordinates]);

  async function fetchWeather(coordinates) {
    const weatherResponse = await MeteoApi.fetachweatherByCoords(coordinates);
    setWeather(parseWeather(weatherResponse));
  }

  async function fetchCity(coordinates) {
    const city = await MeteoApi.fetchCityByCoords(coordinates);
    setCity(city);
  }
  async function getUserCoordinates() {
    const { status } = await requestForegroundPermissionsAsync();
    if (status == "granted") {
      const location = await getCurrentPositionAsync();
      setCoordinates({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoordinates({
        lat: 48.85,
        lng: 2.35,
      });
    }
  }

  console.log("coord", coordinates, "weather", weather, "city", city);
  return (
    <ImageBackground
      imageStyle={s.img}
      style={s.img_background}
      source={backgroundImg}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          {fontsLoaded && weather && city && (
            <Home weather={weather} city={city} />
          )}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
