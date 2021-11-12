import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';


export function Alien({route, navigation}) {

    function handleHomePress(){
        navigation.navigate("Filmovi")
    }

    return (
        <View style={styles.container}>

<View style={styles.jumbotron}>
        <View style={styles.jumbotron}>
        
        
        <Image style={styles.image} source={require("../assets/film3.jpg")}/>
        <Text style={styles.text}>After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun.</Text>
        <Text style={styles.text}>Ridley Scott</Text>
        <Text style={styles.text}>Starring: Sigourney Weaver, Tom Skerritt, John Hurt</Text>
        <Text style={styles.text}>Rating: 5/5</Text>
    
    
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
