import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';


export function Arrival({route, navigation}) {

    function handleHomePress(){
        navigation.navigate("Filmovi")
    }

    return (
        <View style={styles.container}>

<View style={styles.jumbotron}>
        <View style={styles.jumbotron}>
        
        
        <Image style={styles.image} source={require("../assets/film1.jpg")}/>
        <Text style={styles.text}>A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.</Text>
        <Text style={styles.text}>Director: Denis Villeneuve</Text>
        <Text style={styles.text}>Starring: Amy Adams, Jeremy Renner, Forest Whitaker</Text>
        <Text style={styles.text}>Rating: 4/5</Text>
    
    
        </View>
       
      </View>

        
            <Button 
            title="Back to Movies"
            onPress={handleHomePress}
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
      textAlign: "justify",
      
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
     
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
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
  
    text: {
        textAlign: "center",
        fontSize: 15,
        padding: 10
  
    },
  
    image: {
      width: 220,
      height:300,
      
  
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
