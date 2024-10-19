import { View, Text } from 'react-native'

const InfoBox = ({ title, subtitle, contianerStyles, titleStyles }) => {
  return (
    <View className={`${contianerStyles}`}>
      <Text className={`text-white text-center font-psemibold ${titleStyles}`}>{title}</Text>
      <Text className="text-sm text-gray-100 font-pregular">{subtitle}</Text>
    </View>
  )
}

export default InfoBox