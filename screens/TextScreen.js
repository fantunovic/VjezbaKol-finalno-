import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {   StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ScrollView,
    FlatList} from 'react-native';
    import GoalItem from '../components/GoalItem';
import GoalInput from '../components/GoalInput';
import {useState} from "react";
    


export function TextScreen({route, navigation}) {

    const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
  };

  function handleHomePress(){
    navigation.navigate("Filmovi")
}

   

    return (


        

        <View style={styles.container}>

<View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
      />
     
    </View>

        <Text>Text</Text>
        <Button 
        title="Go to Filmovi"
        onPress={handleHomePress}
        />
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#A8B4A5",
    },

    screen: {
        
        backgroundColor: "#A8B4A5",
        
    
    
      },

});
