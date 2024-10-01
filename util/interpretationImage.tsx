export function interpretationImage(interpretation: string) {
  switch (interpretation) {
    case "Sunny":
      return require("../assets/sun.png");
    case "Cloudy":
      return require("../assets/clouds.png");
    case "Rainy":
      return require("../assets/rain.png");
    case "Snowy":
      return require("../assets/snow.png");
    case "Thunderous":
      return require("../assets/thunder.png");
    default:
      return require("../assets/sun.png");
  }
}
