import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import {Button} from 'native-base'
import {FontAwesome} from '@expo/vector-icons'

const itemArray = new Array(25).fill('empty')

export default function App() {
  const [randomNumber, setRandomNumber] = useState('')
  useEffect(() => {
   generateRandomNumber()
  }, [])

  const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 25 ))
  }

  const scratchItem = () => {
    //TODO: decide lucky or not
  }

  const scratchItemIcon = () => {
    //TODO: Find right icon
  }

  const scratchItemColor = () => {
    //TODO: Find right color
  }

  const showAllItems = () => {
    //TODO: reveal all icons
  }

  const resetGame = () => {
    //TODO: reset the game
  }
  return (
    <View style={styles.container}>
      <Text>Scratch and win</Text>
      <Text>{randomNumber}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
