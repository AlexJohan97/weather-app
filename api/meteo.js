import axios from "axios";
export class MeteoApi {
  static async fetachweatherByCoords(coords) {
    url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`;
    return (await axios.get(url)).data;
  }

  static async fetchCityByCoords(coords) {
    url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords.lat}&lon=${coords.lng}`;
    const {
      address: { city, village, town },
    } = (await axios.get(url)).data;
    return city || town || village;
  }

  static async fetchCoordsByCity(city) {
    try {
      url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`;
      const { latitude: lat, longitude: lng } = (await axios.get(url)).data
        .results[0];
      return { lat: lat, lng: lng };
    } catch (e) {
      throw "Invalid city name";
    }
  }
}
