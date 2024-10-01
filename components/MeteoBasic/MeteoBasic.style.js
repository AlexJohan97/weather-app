import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  meteo_basic: { flex: 2 },
  clock: {
    alignItems: "flex-end",
  },
  location: {},
  interpretation: {
    alignSelf: "flex-end",
    transform: [{ rotate: "-90deg" }],
  },
  interpretation_text: {
    fontSize: 20,
  },
  temperature_box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  temperature: { fontSize: 150 },
  image: { width: 90, height: 90 },
});
