import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import HomePage from './src/screens/HomePageDep'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen'
import TempScreen from './src/screens/parameters/TempScreen'
import RainScreen from './src/screens/parameters/RainScreen'
import LoginScreen from './src/components/LoginScreen'

const Stack = createNativeStackNavigator()

const App = () => {
  //const

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Temp" component={TempScreen} />
        <Stack.Screen name="Rain" component={RainScreen} />
        <Stack.Screen name="Humidity" component={RainScreen} />
        <Stack.Screen name="Soil Moisture" component={RainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App
