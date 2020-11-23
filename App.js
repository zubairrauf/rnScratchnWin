import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import {Button} from 'native-base'
import {FontAwesome} from '@expo/vector-icons'

const itemArray = new Array(5).fill({status: 'empty', icon : 'circle', color: 'black'})

export default function App() {
  const [randomNumber, setRandomNumber] = useState('')
  const [icon, setIcon] = useState('circle')
  const [color, setColor] = useState('black')
  const [isScratched, setIsScratched] = useState('false')

  useEffect(() => {
   generateRandomNumber()
  }, [])

  const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 5 ))
  }

  const scratchItem = itemNumber => {
    if(randomNumber === itemNumber){
      itemArray[itemNumber] = {status :'matched', icon:'dolar', color:'green'}
      console.log('Matched')
    } else {
      itemArray[itemNumber] = {status : 'unmatched', icon:'frown-o', color:'red'}
      console.log('Unmatched')
    }
  }

  // const scratchItemIcon = itemNumber => {
  //   //TODO: Find right icon
  //   if (itemArray[itemNumber] === 'matched') {
  //     return 'dollar'
  //   } else if (itemArray[itemNumber] === 'unmatched') {
  //     return 'frown-o'
  //   }
  //   return 'circle'
  // }

  // const scratchItemColor = itemNumber => {
  //   //TODO: Find right color
  //   if (itemArray[itemNumber] === 'matched') {
  //     return 'green'
  //   } else if (itemArray[itemNumber] === 'unmatched') {
  //     return 'red'
  //   }
  //   return 'black'
  // }

  const showAllItems = () => {
    //TODO: reveal all icons
    itemArray.fill('unmatched')
    itemArray[randomNumber] = 'matched'
  }

  const resetGame = () => {
    //TODO: reset the game, generate a new random number and empty the array
    generateRandomNumber()
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>Scratch and win</Text>
      </View>
      <View style={styles.grid}>
        <View style={styles.itemRow}>
          <TouchableOpacity style={styles.item} onPress={() => scratchItem(0)}>
            <FontAwesome 
              name={itemArray[0].icon}
              size={50}
              color={color}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => scratchItem(1)}>
            <FontAwesome 
              name={itemArray[1].icon}
              size={50}
              color={color}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => scratchItem(2)}>
            <FontAwesome 
              name={itemArray[2].icon}
              size={50}
              color={color}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => scratchItem(3)}>
            <FontAwesome 
              name={itemArray[3].icon}
              size={50}
              color={color}
              />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => scratchItem(4)}>
            <FontAwesome 
              name={itemArray[4].icon}
              size={50}
              color={color}
              />
          </TouchableOpacity>
        </View>
        <Text>{randomNumber}</Text>
      </View>
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
