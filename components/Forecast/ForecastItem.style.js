import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 30,
    justifyContent: "space-between",
  },
  image: {
    width: 50,
    height: 50,
  },
  day: {
    textAlign: "right",
    fontSize: 20,
    alignSelf: "center",
  },
  date: {
    textAlign: "right",
    alignSelf: "center",
    fontSize: 20,
    minWidth: 60,
  },
  temperature: {
    minWidth: 60,
    textAlign: "right",
    alignSelf: "center",
  },
});
