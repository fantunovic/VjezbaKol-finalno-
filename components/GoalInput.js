import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Input text here"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <View style={styles.button}>
      <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
   
  },
  input: {
    width: '80%',
    backgroundColor: '#90be6d',
    borderColor: 'black',
    borderWidth: 1,
    padding: 100
  },

  button: {
    
  }

});

export default GoalInput;