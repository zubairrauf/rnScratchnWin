import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import {Button, Icon} from 'native-base'
import {FontAwesome} from '@expo/vector-icons'

const numberOfItems = 10
const itemsArray = new Array(numberOfItems).fill({status: 'empty', icon : 'circle', color: 'black'})
var updatedArray = []

export default function App() {
  const [items, setItems] = useState(itemsArray)
  const [randomNumber, setRandomNumber] = useState('')
  
  useEffect(() => {
    drawNumber(numberOfItems)
  }, [])

  const drawNumber = (numberOfItems) => {
    setRandomNumber(Math.floor(Math.random() * numberOfItems ))
  }

  const scratchItem = itemNumber => {
    //TODO: Need to fix the setItems on arrays
    
    if(itemNumber === randomNumber) {
      updatedArray =  items.map((item, i) => {
        if(i === itemNumber){
          return {status:'matched', icon:'dollar', color:'green'}
        } else {
          return item
        }
      })
      
    } else {
      updatedArray =  items.map((item, i) => {
        if(i === itemNumber){
          return {status:'unmatched', icon:'frown-o', color:'red'}
        } else {
          return item
        }
      })
    }
    setItems(updatedArray)
   }

   const resetGame = () => {
    updatedArray =  items.map(item => {
      return {status:'unmatched', icon:'circle', color:'black'}
    })
    drawNumber(numberOfItems)
    setItems(updatedArray)
   }

   const showAll = () => {
    updatedArray =  items.map((item, i) => {
      if(i === randomNumber){
        return {status:'matched', icon:'dollar', color:'green'}
      } else {
        return {status:'unmatched', icon:'frown-o', color:'red'}
      }
    })
    setItems(updatedArray)
   }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.topText}>Scratch'n Win</Text>
      </View>
      <View style={styles.grid}>
        <View style={styles.itemRow}>
          <TouchableOpacity style={styles.item} onPress={() => scratchItem(0)}>
            <FontAwesome 
              name={items[0].icon}
              size={50}
              color={items[0].color}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => scratchItem(1)}>
            <FontAwesome 
              name={items[1].icon}
              size={50}
              color={items[1].color}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => scratchItem(2)}>
            <FontAwesome 
              name={items[2].icon}
              size={50}
              color={items[2].color}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => scratchItem(3)}>
            <FontAwesome 
              name={items[3].icon}
              size={50}
              color={items[3].color}
              />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => scratchItem(4)}>
            <FontAwesome 
              name={items[4].icon}
              size={50}
              color={items[4].color}
              />
          </TouchableOpacity>
        </View>
        <View style={styles.itemRow}>
          <TouchableOpacity style={styles.item} onPress={() => scratchItem(5)}>
            <FontAwesome 
              name={items[5].icon}
              size={50}
              color={items[5].color}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => scratchItem(6)}>
            <FontAwesome 
              name={items[6].icon}
              size={50}
              color={items[6].color}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => scratchItem(7)}>
            <FontAwesome 
              name={items[7].icon}
              size={50}
              color={items[7].color}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => scratchItem(8)}>
            <FontAwesome 
              name={items[8].icon}
              size={50}
              color={items[8].color}
              />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => scratchItem(9)}>
            <FontAwesome 
              name={items[9].icon}
              size={50}
              color={items[9].color}
              />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttons}>
        <Button style={styles.btn} iconLeft full warning onPress={() => showAll()}>
          <Icon name='warning'/>
          <Text style={styles.btnText}>Show all</Text>
        </Button>
        <Button style={styles.btn} iconLeft full danger onPress={() => resetGame()}>
          <Icon name='warning'/>
          <Text style={styles.btnText}>Reset</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%'
  },
  topBar: {
    backgroundColor: '#8878e6',
    width: '100%',
    paddingTop: 40,
    paddingBottom: 20
  },
  topText: {
    textAlign: 'center',
    fontSize: 22,
    color: '#fff'
  },
  itemRow: {
    flexDirection: 'row'
  },
  item: {
    margin: 10,
    borderWidth: 1,
    minWidth: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttons: {
    flexDirection: 'row',
    backgroundColor: '#8878e6',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5,
    width: '40%',
    justifyContent: 'flex-start'
  },
  btnText: {
    margin: 10,
    color: 'black',
    fontWeight: '600'
  }
});
