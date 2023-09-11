import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import RoundButton from '../components/RoundButton'

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Temp"
        onPress={() => navigation.navigate('Temp', { name: 'Temp' })}
        style={styles.buttonStyle}
      />
      <Button
        title="Rain"
        onPress={() => navigation.navigate('Rain', { name: 'Rain' })}
      />
      <Button
        title="Humidity"
        onPress={() => navigation.navigate('Humidity', { name: 'Humidity' })}
      />
      <Button
        title="Soil Moisture"
        onPress={() =>
          navigation.navigate('Soil Moisture', { name: 'Soil Moisture' })
        }
      />
    </View>

    /* <View style={styles.container}>
      <RoundButton
        buttonText={'Temp'}
        buttonColor={styles.button1}
        buttonIcon={'thermometer'}
      />
      <RoundButton
        buttonText={'Humidity'}
        buttonColor={styles.button1}
        buttonIcon={'cloud'}
      />
      <RoundButton
        buttonText={'Soil Moisture'}
        buttonColor={styles.button1}
        buttonIcon={'align-justify'}
      />
      <RoundButton
        buttonText={'Rain'}
        buttonColor={styles.button1}
        buttonIcon={'droplet'}
      />
      <RoundButton
        buttonText={'Battery'}
        buttonColor={styles.button1}
        buttonIcon={'battery'}
      />
    </View> */
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
  },
  button1: {
    backgroundColor: 'powderblue',
    flexDirection: 'row'
  },
  buttonStyle: {
    height: 100,
    width: 50,
    backgroundColor: 'red'
  }
})
export default HomeScreen
