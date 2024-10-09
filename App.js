import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, useColorScheme } from 'react-native';

function App() {
  const [isActive, setActive] = useState(true);
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  
  const backgroundColor = !isDarkMode ? "white" : "black";
  const color = !isDarkMode ? "green" : "red";
  
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Text style={[styles.text, {color}]}>App</Text>
      <BoxComponent isActive={isActive} />
      <ButtonComponent isActive={isActive} setActive={setActive} />
      <Text style={styles.text}>App szintű state: { isActive ? "Aktív" : "Inaktív" }</Text>
      <Text style={[styles.text, {color}]}>{isDarkMode ? 'Dark mód' : 'Light mód' }</Text>
    </View>
  );
}

function ButtonComponent({ isActive, setActive }) {
  return (
    <View style={styles.buttonContainer}>
      <Button
        title="Aktiválás"
        disabled={isActive}
        onPress={() => setActive(true)}
        color="green"
      />
      <Button
        title="Deaktiválás"
        disabled={!isActive}
        onPress={() => setActive(false)}
        color="red"
      />
    </View>
  );
}

function BoxComponent({ isActive }) {
  return (
    <View
      style={[styles.box, { backgroundColor: isActive ? "green" : "firebrick" }]}
    >
      <Text style={styles.boxText}>{isActive ? "Aktív" : "Inaktív"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  buttonContainer: {
    width: 200,
    height: 200,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
  },
  box: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 20,
  },
  boxText: {
    color: 'white',
    fontSize: 18,
  },
});

export default App;