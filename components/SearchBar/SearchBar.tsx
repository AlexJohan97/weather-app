import { TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { s } from "./SearchBar.style";
import Txt from "../Txt/Txt";
import { useState } from "react";

export default function SearchBar({ onSubmit }) {
  const [text, setText] = useState("");
  return (
    <View style={s.container}>
      <TouchableOpacity style={s.searchbar}>
        <TextInput
          onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
          style={s.input}
          onChangeText={(text) => setText(text)}
        />
      </TouchableOpacity>
    </View>
  );
}
