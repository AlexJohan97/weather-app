import { TouchableOpacity, View } from "react-native";
import Txt from "../Txt/Txt";
import { s } from "./Header.style";
import { useNavigation } from "@react-navigation/native";

export default function Header({ city }) {
  const nav = useNavigation();
  return (
    <View style={s.header}>
      <TouchableOpacity onPress={() => nav.goBack()} style={s.arrow}>
        <Txt>{"<"}</Txt>
      </TouchableOpacity>
      <View style={s.header_text}>
        <Txt>{city}</Txt>
        <Txt style={{ fontSize: 15 }}>7 days forecast</Txt>
      </View>
    </View>
  );
}
