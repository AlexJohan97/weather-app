import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  searchbar: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  input: {
    fontSize: 20,
    fontWeight: "500",
  },
});
