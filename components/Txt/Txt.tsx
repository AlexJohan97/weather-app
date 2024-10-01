import { Text } from "react-native";
import { s } from "./Txt.style";

interface Props {
  children: any;
  style?: any;
}
export default function Txt({ children, style, ...rest }: Props) {
  return (
    <Text style={[s.txt, style]} {...rest}>
      {children}
    </Text>
  );
}
