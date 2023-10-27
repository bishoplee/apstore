import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from "expo-linear-gradient"
import { ArrowDownTrayIcon, HeartIcon } from "react-native-heroicons/solid"
import StarRating from "react-native-star-rating"

import { storeColors } from "../theme"

const GameCard = ({game}) => {
  const [isFavourite, setIsFavourite] = useState(false)

  return (
    <View className="mr-4 relative">
      <Image source={game.image} className="w-80 h-60 rounded-2xl" />
      <LinearGradient
        colors={['transparent', 'rgba(0, 0, 0, 0.8)']}
        className="absolute p-4 h-full w-full flex justify-between rounded-2xl"
      >
        <View className="flex-row justify-end">
          <TouchableOpacity
            onPress={() => setIsFavourite(!isFavourite)}
            className="p-2 rounded-full"
            style={{backgroundColor: 'rgba(255, 255, 255, 0.3)'}}
          >
            <HeartIcon size="16" color={isFavourite ? storeColors.redHeart : 'white'} />
          </TouchableOpacity>
        </View>

        <View className="space-y-1">
          <StarRating
            disabled={true}
            starSize={15}
            containerStyle={{width: 90}}
            maxStars={5}
            rating={game.stars}
            emptyStar={require('../assets/images/emptyStar.png')}
            fullStar={require('../assets/images/fullStar.png')}
          />

          <Text className="text-xl font-bold text-gray-300">
            {game.title}
          </Text>

          <View className="flex-row items-center space-x-2">
            <ArrowDownTrayIcon size="18" color="lightgray" />
            <Text className="text-sm text-gray-300 font-semibold">
              {game.downloads} Downloads
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}

export default GameCard