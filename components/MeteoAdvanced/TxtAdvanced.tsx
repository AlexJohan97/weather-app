import { View } from "react-native";
import Txt from "../Txt/Txt";
import { s } from "./TxtAdvanced.style";

export default function TxtAdvanced({ children, style, ...rest }: any) {
  const { value, description } = rest;
  return (
    <View>
      <Txt style={s.value}>{value}</Txt>
      <Txt style={s.description}>{description}</Txt>
    </View>
  );
}
