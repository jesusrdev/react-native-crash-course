import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

import { icons } from "../constants";

const SearchInput = ({
  value,
  handleChangeText,
  otherStyles,
  ...props
}) => {

  return (
    <View className="flex-row items-center w-full h-16 px-4 space-x-4 border-2 border-black-200 rounded-2xl focus:border-secondary bg-black-100">
      <TextInput
        className="flex-1 text-base mt-0.5 text-white font-pregular"
        value={value}
        placeholder="Search for a video topic"
        placeholderTextColor="#7b7b8b"
        // onChangeText={handleChangeText}
      />
      <TouchableOpacity onPress={() => {}}>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
