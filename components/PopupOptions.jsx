import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { icons } from "../constants";
import { useState } from "react";
import { addVideoToBookmarks, removeVideoFromBookmarks } from "../lib/appwrite";

const PopupOptions = ({ video }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const handleSave = () => {
    try {
      addVideoToBookmarks(video);
      Alert.alert("Success", "Video saved successfully");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setActive(false);
    }
  };

  const handleRemove = () => {
    try {
      removeVideoFromBookmarks(video.$id);
      Alert.alert("Success", "Video removed successfully");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setActive(false);
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handleClick}>
      <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
      {active && (
        <View className="absolute z-50 justify-center p-4 rounded-lg flex-column bg-black-100 w-44 top-7 right-1">
          <TouchableOpacity
            onPress={handleSave}
            className="flex-row items-center justify-center w-full gap-2"
          >
            <Image
              source={icons.bookmark}
              className="w-4 h-4"
              resizeMode="contain"
            />
            <Text className="text-base text-white font-pmedium">Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleRemove}
            className="flex-row items-center justify-center w-full gap-2 mt-2"
          >
            <Image
              source={icons.remove}
              className="w-4 h-4"
              resizeMode="contain"
            />
            <Text className="text-base text-white font-pmedium">Remove</Text>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default PopupOptions;
