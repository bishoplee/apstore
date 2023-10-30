import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { SafeAreaView } from "react-native-safe-area-context"
import { ArrowDownTrayIcon, Bars3CenterLeftIcon, BellIcon } from "react-native-heroicons/solid"

import { storeColors } from "../theme"
import { categories, featured, games } from "../config"
import GradientButton from "../components/GradientButton"
import GameCard from "../components/GameCard"

const StoreScreen = () => {
  const [activeCategory, setActiveCategory] = useState('Action')
  const [selectedGame, setSelectedGame] = useState(null)

  return (
    <LinearGradient
      colors={['rgba(58, 131, 244, 0.4)', 'rgba(9, 181, 211, 0.4)']}
      className="w-full flex-1"
    >
      <SafeAreaView>
        <View className="flex-row justify-between items-center px-4 py-2">
          <Bars3CenterLeftIcon color={storeColors.text} size="30" />
          <BellIcon color={storeColors.text} size="30" />
        </View>
        
        <ScrollView
          className="container"
          style={{height: "100%"}}
          showsVerticalScrollIndicator={false}
        >
          
          {/* categories */}
          <View className="mt-3 space-y-3">
            <Text
              style={{color: storeColors.text}}
              className="ml-4 text-3xl font-bold"
            >
              Browse Games
            </Text>

            <View className="pl-4">
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                {
                  categories.map((category, index) => {
                    if (category === activeCategory){
                      // show gradient button
                      return (
                        <GradientButton key={category} containerClass="mr-2" value={category} />
                      )
                    } else {
                      // show regular
                      return (
                        <TouchableOpacity
                          onPress={() => setActiveCategory(category)}
                          key={index}
                          className="bg-blue-200 p-3 px-4 rounded-full mr-2"
                        >
                          <Text>
                            {category}
                          </Text>
                        </TouchableOpacity>
                      )
                    }
                  })
                }
              </ScrollView>
            </View>
          </View>

          {/* featured row */}
          <View className="mt-6 space-y-4">
            <Text
              style={{color: storeColors.text}}
              className="ml-4 text-lg font-bold"
            >
              Featured Games
            </Text>
            <View className="pl-4">
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                  featured.map((item, index) => {
                    return (
                      // game cards
                      <GameCard key={index} game={item} />
                    )
                  })
                }
              </ScrollView>
            </View>
          </View>

          {/* top action games list */}
          <View className="mt-8">
            <View className="flex-row justify-between items-center mb-2">
              <Text
                style={{color: storeColors.text}}
                className="ml-4 text-lg font-bold"
              >
                Top Action Games
              </Text>

              <TouchableOpacity
                className="mr-4"
              >
                <Text
                  className="text-blue-600 font-bold"
                >See All</Text>
              </TouchableOpacity>
            </View>

            <View className="pb-16">
              {
                games.map((game, index) => {
                  let bg = game.id === selectedGame ? 'rgba(255, 255, 255, 0.4)' : 'transparent'

                  return (
                    <TouchableOpacity
                      style={{backgroundColor: bg, }}
                      className="mx-4 p-2 mb-2 flex-row rounded-3xl"
                      onPress={() => setSelectedGame(game.id)}
                      key={index}
                    >
                      <Image
                        source={game.image}
                        style={{width: 80, height: 80}}
                        className="rounded-2xl"
                        />
                      <View className="flex-1 flex justify-center pl-3 space-y-3">
                        <Text style={{color: storeColors.text}} className="font-semibold">{game.title}</Text>

                        <View className="flex-row space-x-3">
                          <View className="flex-row space-x-1">
                            <Image
                              className="h-4 w-4 opacity-80"
                              source={require('../assets/images/fullStar.png')}
                            />
                            <Text className="text-xs text-gray-700">{game.stars}</Text>
                          </View>

                          <View className="flex-row space-x-1">
                            <ArrowDownTrayIcon size="18" color="rgb(55, 61, 81)" />
                            <Text className="text-xs text-gray-700">{game.downloads}</Text>
                          </View>
                        </View>
                      </View>

                      <View className="flex justify-center items-center">
                        <GradientButton value="play" buttonClass="py-2 px-5" />
                      </View>
                    </TouchableOpacity>
                  )
                })
              }
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default StoreScreen