import { Alert, ImageBackground } from "react-native";
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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Forecasts from "./pages/Forecasts/Forecasts";
const Stack = createNativeStackNavigator();
const navTheme = {
  colors: {
    background: "transparent",
  },
};

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

  async function fetchCoordsByCity(city) {
    try {
      const { lat: lat, lng: lng } = await MeteoApi.fetchCoordsByCity(city);
      setCoordinates({ lat: lat, lng: lng });
    } catch (e) {
      Alert.alert("City not found", e);
    }
  }
  return (
    <NavigationContainer theme={navTheme}>
      <ImageBackground
        imageStyle={s.img}
        style={s.img_background}
        source={backgroundImg}
      >
        <SafeAreaProvider>
          <SafeAreaView style={s.container}>
            {fontsLoaded && weather && city && (
              <Stack.Navigator
                screenOptions={{ headerShown: false, animation: "fade" }}
                initialRouteName="Home"
              >
                <Stack.Screen name="Home">
                  {() => (
                    <Home
                      city={city}
                      weather={weather}
                      onSubmit={fetchCoordsByCity}
                    />
                  )}
                </Stack.Screen>
                <Stack.Screen name="Forecasts" component={Forecasts} />
              </Stack.Navigator>
            )}
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </NavigationContainer>
  );
}
