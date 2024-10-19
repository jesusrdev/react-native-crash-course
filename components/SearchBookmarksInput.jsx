import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";

import { icons } from "../constants";

const SearchBookmarsInput = ({ submit }) => {
  const [query, setQuery] = useState("");

  return (
    <View className="flex-row items-center w-full h-16 px-4 space-x-4 border-2 border-black-200 rounded-2xl focus:border-secondary bg-black-100">
      <TextInput
        className="flex-1 text-base mt-0.5 text-white font-pregular"
        value={query}
        placeholder="Search your saved videos"
        placeholderTextColor="#CDCDE0"
        onChangeText={(e) => setQuery(e)}
      />

      <TouchableOpacity
        onPress={() => {
          if (!query || query.length === 0) {
            return Alert.alert(
              "Missing query",
              "Please input something to search results across database"
            );
          }

          submit(query);
        }}
      >
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBookmarsInput;
