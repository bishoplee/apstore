import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "expo-status-bar"
import { SafeAreaView } from "react-native-safe-area-context"

import HomeScreen from "../screens/HomeScreen"
import StoreScreen from "../screens/StoreScreen"
import AndroidSafeArea from "../constants/AndroidSafeArea"

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer>
      {/* <SafeAreaView style={AndroidSafeArea.safe}> */}
        <StatusBar />
        <Stack.Navigator initialRouteName="Store">
          <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
          <Stack.Screen name="Store" options={{ headerShown: false }} component={StoreScreen} />
        </Stack.Navigator>
      {/* </SafeAreaView> */}
    </NavigationContainer>
  )
}

export default AppNavigation