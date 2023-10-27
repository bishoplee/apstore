import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { SafeAreaView } from "react-native-safe-area-context"
import { Bars3CenterLeftIcon, BellIcon } from "react-native-heroicons/solid"

import { storeColors } from "../theme"
import { categories, featured, games } from "../config"
import GradientButton from "../components/GradientButton"
import GameCard from "../components/GameCard"

const StoreScreen = () => {
  const [activeCategory, setActiveCategory] = useState('Action')

  return (
    <LinearGradient
      colors={['rgba(58, 131, 244, 0.4)', 'rgba(9, 181, 211, 0.4)']}
      className="w-full flex-1"
    >
      <SafeAreaView>
        <View className="container">
          <View className="flex-row justify-between items-center px-4">
            <Bars3CenterLeftIcon color={storeColors.text} size="30" />
            <BellIcon color={storeColors.text} size="30" />
          </View>
          
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
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default StoreScreen