import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [result, setResult] = useState(0);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const sumNumbers = () => {  setResult(number1 + number2);}

  const substractNumbers = () => {  setResult(number1 - number2);}

  return (
    <View style={styles.container}>
        <Text>Result: {result}</Text>
        <TextInput style={{width:200, borderColor: 'gray', borderWidth:1}}onChangeText={number1 => setNumber1(Number(number1))}  value={number1} keyboardType={'numeric'}/>
        <TextInput style={{width:200, borderColor: 'gray', borderWidth:1}}onChangeText={number2 => setNumber2(Number(number2))}  value={number2} keyboardType={'numeric'}/>
      <View style={styles.buttons}> 
        <View style={styles.button}>
          <Button onPress={sumNumbers}title="+" />
        </View>
        <View style={styles.button}>
          <Button onPress={substractNumbers}title="-" />
        </View>
      </View>
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
  buttons: {
    flexDirection: 'row',
    margin: 10,
  },
  button: {
    width: 30,
    margin: 10
  }
});
