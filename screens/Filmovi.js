import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';


export function Filmovi({route, navigation}) {

    function handleSettingsPress(){
        navigation.navigate("TextScreen")
    }

    function handleArrivalPress(){
      navigation.navigate("Arrival")
  }

  function handleBladeRunnerPress(){
    navigation.navigate("BladeRunner")
}
function handleAlienPress(){
  navigation.navigate("Alien")
}

function handleDunePress(){
  navigation.navigate("Dune")
}

    
    

    return (

        

        <View style={styles.container}>

<View style={styles.jumbotron}>
        <View style={styles.leftContainer}>
        <Text style={styles.naslovFilm}>Arrival</Text>
        <TouchableHighlight onPress={handleArrivalPress}>
        <Image style={styles.image} source={require("../assets/film1.jpg")}/>
        </TouchableHighlight>
        <Text style={styles.opisFilm}>For more info, click on image</Text>
        </View>
        <View style={styles.rightContainer}>
        <Text style={styles.naslovFilm}>Blade Runner</Text>
        <TouchableHighlight onPress={handleBladeRunnerPress}>
        <Image style={styles.image} source={require("../assets/film2.jpg")}/>
        </TouchableHighlight>
        <Text style={styles.opisFilm}>For more info, click on image</Text>
        </View>
      </View>


      <View style={styles.jumbotron}>
        <View style={styles.leftContainer}>
        <Text style={styles.naslovFilm}>Alien</Text>
        <TouchableHighlight onPress={handleAlienPress}>
        <Image style={styles.image} source={require("../assets/film3.jpg")}/>
        </TouchableHighlight>
        <Text style={styles.opisFilm}>For more info, click on image</Text>
        </View>
        <View style={styles.rightContainer}>
        <Text style={styles.naslovFilm}>Dune</Text>
        <TouchableHighlight onPress={handleDunePress}>
        <Image style={styles.image} source={require("../assets/film4.jpg")}/>
        </TouchableHighlight>
        <Text style={styles.opisFilm}>For more info, click on image</Text>
        </View>
      </View>

         
<View><Text></Text></View>


            
            <Button 
            title="Go to Text input"
            onPress={handleSettingsPress}
            />

            


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#A8B4A5',
  
  
    },

    opisFilm: {
      fontSize: 10,
      textAlign: "center",
      
    },
  
    headerWrapper: {
      padding: 10,
      borderBottomWidth: 2
    },
    headerTitle: {
      textAlign: "center",
      fontSize: 30
    },
  
    jumbotron: {
      flexDirection: "row",
      justifyContent: "space-between",
      
  
    },

    naslovFilm: {
      textAlign: "center",
      fontSize: 20
    },
  
    leftContainer: {
   
      backgroundColor: '#A8B4A5',
      padding: 25
  
    },
  
    rightContainer: {
   
      backgroundColor: '#A8B4A5',
      padding: 25
  
    },
  
    rightContainer: {
   
      backgroundColor: '#A8B4A5',
      padding: 25
  
    },
  
    leftText: {
      color: "red",
      fontSize: 30
  
    },
  
    rightText: {
   
  
    },
  
    image: {
      width: 120,
      height:200
  
    },
  
    touchableCountainer: {
      margin: 20,
      backgroundColor: "white",
      padding: 20
    },
  
    textStyle: {
      fontSize: 20
    }
  
  });

      

