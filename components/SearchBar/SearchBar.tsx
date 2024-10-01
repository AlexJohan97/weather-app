import { TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { s } from "./SearchBar.style";
import Txt from "../Txt/Txt";
import { useState } from "react";

export default function SearchBar() {
  const [text, setText] = useState("");
  return (
    <View style={s.container}>
      <TouchableOpacity style={s.searchbar}>
        <TextInput
          onSubmitEditing={(e) => console.log(e.nativeEvent.text)}
          style={s.input}
          onChangeText={(text) => setText(text)}
        />
      </TouchableOpacity>
    </View>
  );
}
